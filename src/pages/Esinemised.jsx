import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n.jsx'
import { fetchGigs } from '../lib/calendar.js'

export async function loader() {
  try {
    return await fetchGigs()
  } catch (err) {
    console.error('Kalendri laadimine ebaõnnestus, kasutan varuandmeid', err)
    return { upcoming: [], past: [] }
  }
}

function GigList({ gigs }) {
  return (
    <ul className="gigs-list">
      {gigs.map((g) => (
        <li className="gig" key={`${g.date}-${g.venue}`}>
          <div className="gig-date">{g.date}</div>
          <div>
            <div className="gig-venue">{g.venue}</div>
            <div className="gig-city">{g.city}</div>
          </div>
          <div className="gig-band">{g.band}</div>
        </li>
      ))}
    </ul>
  )
}

export default function Esinemised() {
  const { t, to } = useLang()
  const initial = useLoaderData() ?? { upcoming: [], past: [] }
  const [gigs, setGigs] = useState(initial)

  // Pärast hüdreerimist vaata värskemat kalendrit; uuenda ainult siis,
  // kui andmed on muutunud (nt Rauno lisas uue esinemise pärast buildi).
  useEffect(() => {
    let active = true
    fetchGigs()
      .then((fresh) => {
        if (!active) return
        if (JSON.stringify(fresh) !== JSON.stringify(gigs)) setGigs(fresh)
      })
      .catch((err) => console.error('Kalendri värskendamine ebaõnnestus', err))
    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="section">
      <Seo pageKey="events" />
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">{t.events.eyebrow}</p>
          <h1 className="page-title">{t.events.title}</h1>
          <p className="section-subtitle">{t.events.subtitle}</p>
        </div>

        {gigs.upcoming.length > 0 ? (
          <>
            <h2 className="rule-heading">{t.events.upcoming}</h2>
            <GigList gigs={gigs.upcoming} />
          </>
        ) : (
          <p className="section-subtitle" style={{ marginTop: '2rem' }}>
            {t.events.comingSoon}
          </p>
        )}

        {gigs.past.length > 0 && (
          <>
            <h2 className="rule-heading" style={{ marginTop: '3.5rem' }}>
              {t.events.past}
            </h2>
            <GigList gigs={gigs.past} />
          </>
        )}

        <div style={{ marginTop: '3rem' }}>
          <Link to={`${to('contact')}?service=performance`} className="btn">
            {t.events.btn}
          </Link>
        </div>
      </div>
    </section>
  )
}
