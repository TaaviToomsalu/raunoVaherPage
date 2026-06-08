import { Link } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed.jsx'

const bands = ['Angus', 'Odd Hugo', 'Emerald']

const stats = [
  { label: 'Bändid', value: '3+' },
  { label: 'Žanr', value: 'Heavy' },
  { label: 'Asukoht', value: 'Eesti' },
]

export default function Avaleht() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/galerii/metsikrauno.jpg"
            alt="Rauno Vaher trummide taga — energiline esitus"
          />
          <div className="grain" aria-hidden="true" />
        </div>
        <div className="container hero-inner">
          <p className="eyebrow">Trummar · Rütmiseadja</p>
          <h1 className="hero-title">
            Rauno <br />
            <span className="accent">Vaher</span>
          </h1>
          <p className="hero-text">
            Kosmoses metsistunud lilledes heavy trummar, kes annab rütmile tunde
            ja viib publiku metsa jalutama.
          </p>
          <div className="hero-actions">
            <Link to="/galerii" className="btn">
              Vaata galeriid
            </Link>
            <Link to="/kontakt" className="btn btn-outline">
              Broneeri esinemine
            </Link>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container bio">
          <div className="bio-photo">
            <img src="/galerii/rauno.jpg" alt="Rauno Vaher portree" />
          </div>
          <div className="bio-body">
            <p className="eyebrow">Lugu</p>
            <h2 className="section-title">
              Rütm kui
              <br />
              loodusnähtus
            </h2>
            <div className="bio-text">
              <p>
                Rauno on trummar, kelle löögid tulevad kuskilt sügavalt — kohast,
                kus mets, lilled ja kosmos kohtuvad. Mitte ainult takti hoidja,
                vaid tundejuht, kes viib publiku jalutuskäigule.
              </p>
              <p>
                Mängib ja on mänginud koosseisudes <strong>Angus</strong>,{' '}
                <strong>Odd Hugo</strong> ja <strong>Emerald</strong> — heavyt,
                psühhedeelset ja midagi, mida sõnadega kirjeldada ei oska.
              </p>
            </div>
            <div className="bio-stats">
              {stats.map((s) => (
                <div className="bio-stat" key={s.label}>
                  <div className="num">{s.value}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bändid */}
      <section className="section bands">
        <div className="container">
          <p className="eyebrow">Koosseisud</p>
          <h2 className="section-title">Bändid</h2>
          <div className="bands-grid">
            {bands.map((band, i) => (
              <div className="band-card" key={band}>
                <div className="index">0{i + 1}</div>
                <h3>{band}</h3>
                <div className="underline" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Kuula &amp; vaata</p>
          <h2 className="rule-heading">Video</h2>
          <VideoEmbed
            src="/esitlusvideo.mp4"
            poster="/esitlusvideo-poster.jpg"
            title="Rauno Vaher — esitlusvideo"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">
          <img src="/galerii/raunolilledes.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="container cta-inner">
          <img
            className="cta-avatar"
            src="/galerii/raunokosmos.jpg"
            alt=""
            aria-hidden="true"
          />
          <h2 className="cta-title">
            Vajad rütmi, mis <span className="accent">tunneb</span>?
          </h2>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/kontakt" className="btn">
              Võta ühendust
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
