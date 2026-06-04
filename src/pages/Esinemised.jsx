const upcoming = [
  { date: '14.06.2026', title: 'Suvefestival', place: 'Tallinn, Lauluväljak' },
  { date: '02.07.2026', title: 'Jazzklubi õhtu', place: 'Tartu, Genialistide Klubi' },
  { date: '23.08.2026', title: 'Eraüritus (pulm)', place: 'Pärnu' },
]

const past = [
  { date: '12.04.2026', title: 'Kevadkontsert', place: 'Tallinn, Kultuurikatel' },
  { date: '28.02.2026', title: 'Stuudiosalvestus', place: 'Tallinn' },
  { date: '15.12.2025', title: 'Jõulukontsert', place: 'Viljandi, Pärimusmuusika Ait' },
]

function Gig({ gig, type }) {
  return (
    <div className="gig">
      <span className="gig-date">{gig.date}</span>
      <div className="gig-info">
        <h3>
          {gig.title}
          <span className={`badge badge-${type}`}>
            {type === 'upcoming' ? 'Tulemas' : 'Toimunud'}
          </span>
        </h3>
        <p>{gig.place}</p>
      </div>
    </div>
  )
}

export default function Esinemised() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Esinemised</h2>
        <p className="section-subtitle">
          Tulevased ja varasemad esinemised. Soovid Rauno enda üritusele? Võta ühendust.
        </p>

        <h3 className="gigs-heading">Tulemas</h3>
        <div className="gigs-list">
          {upcoming.map((gig) => (
            <Gig key={gig.date} gig={gig} type="upcoming" />
          ))}
        </div>

        <h3 className="gigs-heading">Varasemad</h3>
        <div className="gigs-list">
          {past.map((gig) => (
            <Gig key={gig.date} gig={gig} type="past" />
          ))}
        </div>
      </div>
    </section>
  )
}
