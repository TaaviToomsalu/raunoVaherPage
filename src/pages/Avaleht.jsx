import { Link } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed.jsx'

export default function Avaleht() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Trummar · Eesti</p>
          <h1 className="hero-title">Rauno Vaher</h1>
          <p className="hero-text">
            Energiline ja täpne trummar, kes toob rütmi igale lavale. Stuudiosalvestustest
            suurte kontsertideni — iga löök loeb. Loome koos teie üritusele unustamatu kõla.
          </p>
          <Link to="/kontakt" className="btn">
            Broneeri esinemine
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Kuula ja vaata</h2>
          <p className="section-subtitle">
            Väike sissevaade sellesse, mida ootad — elav esitus ja puhas groove.
          </p>
          <VideoEmbed videoId="dQw4w9WgXcQ" title="Rauno Vaher — esitlusvideo" />
        </div>
      </section>
    </>
  )
}
