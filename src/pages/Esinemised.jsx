import { Link } from 'react-router-dom'

const upcoming = [
  { date: '14.06.2026', venue: 'Suvefestival', city: 'Tallinn, Lauluväljak', band: 'Angus' },
  { date: '02.07.2026', venue: 'Jazzklubi õhtu', city: 'Tartu, Genialistide Klubi', band: 'Odd Hugo' },
  { date: '23.08.2026', venue: 'Eraüritus (pulm)', city: 'Pärnu', band: 'Emerald' },
]

const past = [
  { date: '12.04.2026', venue: 'Kevadkontsert', city: 'Tallinn, Kultuurikatel', band: 'Angus' },
  { date: '28.02.2026', venue: 'Stuudiosalvestus', city: 'Tallinn', band: 'Odd Hugo' },
  { date: '15.12.2025', venue: 'Jõulukontsert', city: 'Viljandi, Pärimusmuusika Ait', band: 'Emerald' },
]

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
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Kalender</p>
          <h1 className="page-title">Esinemised</h1>
          <p className="section-subtitle">
            Kus rütm järgmisena maandub. Soovid Rauno enda üritusele? Võta ühendust.
          </p>
        </div>

        <h2 className="rule-heading">Tulemas</h2>
        <GigList gigs={upcoming} />

        <h2 className="rule-heading" style={{ marginTop: '3.5rem' }}>
          Varasemad
        </h2>
        <GigList gigs={past} />

        <div style={{ marginTop: '3rem' }}>
          <Link to="/kontakt" className="btn">
            Broneeri kuupäev
          </Link>
        </div>
      </div>
    </section>
  )
}
