import { useState } from 'react'
import { useLang } from '../i18n.jsx'

const EMAIL = 'vaher.rauno@gmail.com'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/matslaav/' },
  { label: 'Facebook', href: 'https://www.facebook.com/matslaav' },
]

const FORM_NAME = 'kontakt'

function encode(data) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
}

export default function Kontakt() {
  const { t } = useLang()
  const [form, setForm] = useState({ nimi: '', email: '', sonum: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...form }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        setStatus('sent')
        setForm({ nimi: '', email: '', sonum: '' })
      })
      .catch(() => setStatus('error'))
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
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
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

        <form
          className="form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Netlify vajab vormi nime peidetud väljana ka päris vormis */}
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p hidden>
            <label>
              Ära täida seda välja: <input name="bot-field" />
            </label>
          </p>

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

          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
          </button>

          {status === 'sent' && <p className="form-note">{t.contact.form.sent}</p>}
          {status === 'error' && (
            <p className="form-note">{t.contact.form.error}</p>
          )}
        </form>
      </div>
    </section>
  )
}
