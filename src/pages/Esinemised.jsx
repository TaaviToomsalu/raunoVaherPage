import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { fetchGigs } from '../lib/calendar.js'

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
  const { t } = useLang()
  // Algväärtus translationsist — leht näitab kohe sisu, kalender asendab pärast.
  const [gigs, setGigs] = useState({
    upcoming: t.events.upcomingGigs,
    past: t.events.pastGigs,
  })

  useEffect(() => {
    let active = true
    fetchGigs()
      .then((data) => {
        if (active) setGigs(data)
      })
      .catch((err) => {
        console.error('Kalendri laadimine ebaõnnestus, kasutan varuandmeid', err)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">{t.events.eyebrow}</p>
          <h1 className="page-title">{t.events.title}</h1>
          <p className="section-subtitle">{t.events.subtitle}</p>
        </div>

        <h2 className="rule-heading">{t.events.upcoming}</h2>
        <GigList gigs={gigs.upcoming} />

        <h2 className="rule-heading" style={{ marginTop: '3.5rem' }}>
          {t.events.past}
        </h2>
        <GigList gigs={gigs.past} />

        <div style={{ marginTop: '3rem' }}>
          <Link to="/kontakt" className="btn">
            {t.events.btn}
          </Link>
        </div>
      </div>
    </section>
  )
}
