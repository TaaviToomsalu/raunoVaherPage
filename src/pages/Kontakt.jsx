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

async function handleSubmit(e) {
  e.preventDefault();
  setStatus("sending");

  const payload = {
    nimi: form.nimi,
    email: form.email,
    message: form.sonum
  };

  console.log("FORM STATE:", form);
  console.log("SENDING PAYLOAD:", payload);

  try {
    const res = await fetch("https://formspree.io/f/mkoabpgw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("RESPONSE STATUS:", res.status);
    console.log("RESPONSE OK:", res.ok);

    const data = await res.text();
    console.log("FORMSPREE RESPONSE:", data);

    if (!res.ok) throw new Error("Formspree error");

    setStatus("sent");
    setForm({ nimi: "", email: "", sonum: "" });

  } catch (err) {
    console.log("ERROR:", err);
    setStatus("error");
  }
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
