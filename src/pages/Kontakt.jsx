import { useState } from 'react'
import { useLang } from '../i18n.jsx'

const EMAIL = 'rauno.vaher@example.com'

const socials = ['Instagram', 'Spotify', 'YouTube']

export default function Kontakt() {
  const { t } = useLang()
  const [form, setForm] = useState({ nimi: '', email: '', kuupaev: '', sonum: '' })
  const [saadetud, setSaadetud] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Backendit pole — avame kasutaja e-posti kliendi eeltäidetud sõnumiga.
    const m = t.contact.mail
    const subject = encodeURIComponent(`${m.subject} — ${form.nimi}`)
    const body = encodeURIComponent(
      `${m.nameLabel}: ${form.nimi}\n${m.emailLabel}: ${form.email}\n${m.dateLabel}: ${form.kuupaev || '—'}\n\n${form.sonum}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSaadetud(true)
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="section-subtitle">{t.contact.subtitle}</p>

          <div className="contact-channels">
            <a
              className="contact-channel"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.contact.mail.subject)}`}
            >
              <div className="label">{t.contact.emailLabel}</div>
              <div className="value">{EMAIL}</div>
            </a>
            <div className="contact-channel">
              <div className="label">{t.contact.locationLabel}</div>
              <div className="value">{t.contact.locationValue}</div>
            </div>
            <ul className="footer-social" style={{ marginTop: '0.5rem' }}>
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    aria-disabled="true"
                    title={t.contact.soonTitle}
                    tabIndex={-1}
                    onClick={(e) => e.preventDefault()}
                    style={{ opacity: 0.5, cursor: 'default' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img
            className="contact-photo"
            src="/galerii/rauno-portree.jpg"
            alt={t.contact.imgAlt}
          />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nimi">{t.contact.form.name}</label>
            <input
              id="nimi"
              name="nimi"
              type="text"
              value={form.nimi}
              onChange={handleChange}
              required
              placeholder={t.contact.form.namePh}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.form.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder={t.contact.form.emailPh}
            />
          </div>

          <div className="form-group">
            <label htmlFor="kuupaev">{t.contact.form.date}</label>
            <input
              id="kuupaev"
              name="kuupaev"
              type="date"
              value={form.kuupaev}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sonum">{t.contact.form.message}</label>
            <textarea
              id="sonum"
              name="sonum"
              rows="5"
              value={form.sonum}
              onChange={handleChange}
              required
              placeholder={t.contact.form.messagePh}
            />
          </div>

          <button type="submit" className="btn">
            {t.contact.form.submit}
          </button>

          {saadetud && <p className="form-note">{t.contact.form.sent}</p>}
        </form>
      </div>
    </section>
  )
}
