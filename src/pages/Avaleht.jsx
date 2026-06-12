import { Link } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { useLang } from '../i18n.jsx'

export default function Avaleht() {
  const { t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/galerii/metsikrauno.jpg" alt={t.hero.imgAlt} />
          <div className="grain" aria-hidden="true" />
        </div>
        <div className="container hero-inner">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero-title">
            Rauno
            <span className="accent">Vaher</span>
          </h1>
          <p className="hero-text">{t.hero.text}</p>
          <div className="hero-actions">
            <Link to="/esinemised" className="btn">
              {t.hero.btnEvents}
            </Link>
            <Link to="/kontakt" className="btn btn-outline">
              {t.hero.btnContact}
            </Link>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container bio">
          <div className="bio-photo">
            <img src="/galerii/rauno.jpg" alt={t.bio.imgAlt} />
          </div>
          <div className="bio-body">
            <p className="eyebrow">{t.bio.eyebrow}</p>
            <h2 className="section-title">
              {t.bio.title[0]}
              <br />
              {t.bio.title[1]}
            </h2>
            <div className="bio-text">
              {t.bio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minu tee */}
      <section className="section path">
        <div className="container">
          <p className="eyebrow">{t.path.eyebrow}</p>
          <h2 className="section-title">{t.path.title}</h2>
          <div className="path-grid">
            {t.path.cards.map((card, i) => (
              <article className="path-card" key={card.title}>
                <div className="index">0{i + 1}</div>
                <h3>{card.title}</h3>
                <p className="path-lead">{card.lead}</p>
                {card.groups.map((group) => (
                  <div className="path-group" key={group.label}>
                    <div className="label">{group.label}</div>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {card.foot && <p className="path-foot">{card.foot}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mats Laav */}
      <section className="section matslaav">
        <div className="container">
          <div className="matslaav-panel">
            <span className="matslaav-wordmark" aria-hidden="true">
              Mats Laav
            </span>
            <div className="matslaav-body">
              <p className="eyebrow">{t.matslaav.eyebrow}</p>
              <h2 className="section-title">{t.matslaav.title}</h2>
              <p className="matslaav-subtitle">{t.matslaav.subtitle}</p>
              <p className="matslaav-text">{t.matslaav.text}</p>
              {/* Kuula siin -nupp peidetud — kuulamislink puudub veel.
                  Eemalda kommentaar, kui link on olemas. */}
              {/* <div className="matslaav-actions">
                <button type="button" className="btn">
                  {t.matslaav.btn}
                </button>
              </div> */}
            </div>
            <div className="matslaav-media">
              <img src="/galerii/raunokosmos.jpg" alt={t.matslaav.imgAlt} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <div className="testimonials-grid">
            {t.testimonials.quotes.map((quote, i) => (
              <figure className="testimonial" key={i}>
                <blockquote>{quote}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{t.video.eyebrow}</p>
          <h2 className="rule-heading">{t.video.title}</h2>
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
            src="/apple-touch-icon.png"
            alt=""
            aria-hidden="true"
          />
          <h2 className="cta-title">
            {t.cta.pre}
            <span className="accent">{t.cta.accent}</span>
            {t.cta.post}
          </h2>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/kontakt" className="btn">
              {t.cta.btn}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
