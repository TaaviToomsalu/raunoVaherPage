// Google Calendar ICS feed -> esinemiste nimekiri.
// Brauseris pärib sama-origini teed (/kalender.ics), mille proxib
// dev'is Vite ja produktsioonis nginx (CORS'i vältimiseks).

const CAL_PATH = '/kalender.ics'

function unescapeText(s) {
  return s
    .replace(/\\n/gi, ' ')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
    .trim()
}

// 20260611T093000Z | 20260611T093000 | 20260611
function parseICSDate(value) {
  const m = value.match(/(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?/)
  if (!m) return null
  const [, y, mo, d, hh = '0', mm = '0', ss = '0', utc] = m
  if (utc) return new Date(Date.UTC(+y, +mo - 1, +d, +hh, +mm, +ss))
  return new Date(+y, +mo - 1, +d, +hh, +mm, +ss)
}

function parseICS(text) {
  // RFC5545: ühenda murtud read (jätkurida algab tühiku/tabiga)
  const raw = text.replace(/\r\n/g, '\n').split('\n')
  const lines = []
  for (const line of raw) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && lines.length) {
      lines[lines.length - 1] += line.slice(1)
    } else {
      lines.push(line)
    }
  }

  const events = []
  let cur = null
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      cur = {}
    } else if (line === 'END:VEVENT') {
      if (cur && cur.start) events.push(cur)
      cur = null
    } else if (cur) {
      const idx = line.indexOf(':')
      if (idx === -1) continue
      const key = line.slice(0, idx).split(';')[0]
      const value = line.slice(idx + 1)
      if (key === 'DTSTART') cur.start = parseICSDate(value)
      else if (key === 'SUMMARY') cur.title = unescapeText(value)
      else if (key === 'LOCATION') cur.location = unescapeText(value)
    }
  }
  return events
}

function fmtDate(d) {
  const p = (n) => String(n).padStart(2, '0')
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`
}

// Tagastab { upcoming, past } — kujul mida GigList ootab (date / venue / city).
export async function fetchGigs() {
  const res = await fetch(CAL_PATH, { headers: { Accept: 'text/calendar' } })
  if (!res.ok) throw new Error(`Kalendri päring ebaõnnestus: ${res.status}`)
  const text = await res.text()
  const events = parseICS(text)

  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const toGig = (e) => ({
    date: fmtDate(e.start),
    venue: e.title || '',
    city: e.location || '',
    band: '',
  })

  const upcoming = events
    .filter((e) => e.start >= startOfToday)
    .sort((a, b) => a.start - b.start)
    .map(toGig)

  const past = events
    .filter((e) => e.start < startOfToday)
    .sort((a, b) => b.start - a.start)
    .map(toGig)

  return { upcoming, past }
}
