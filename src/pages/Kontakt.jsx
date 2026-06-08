import { useState } from 'react'

const EMAIL = 'rauno.vaher@example.com'

const socials = ['Instagram', 'Spotify', 'YouTube']

export default function Kontakt() {
  const [form, setForm] = useState({ nimi: '', email: '', kuupaev: '', sonum: '' })
  const [saadetud, setSaadetud] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Backendit pole — avame kasutaja e-posti kliendi eeltäidetud sõnumiga.
    const subject = encodeURIComponent(`Esinemise päring — ${form.nimi}`)
    const body = encodeURIComponent(
      `Nimi: ${form.nimi}\nE-post: ${form.email}\nSündmuse kuupäev: ${form.kuupaev || '—'}\n\n${form.sonum}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSaadetud(true)
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Ühendus</p>
          <h1 className="page-title">Kontakt</h1>
          <p className="section-subtitle">
            Broneeringud, koostööd, salvestused, sessioonid — kirjuta julgelt.
            Vastan tavaliselt 1–2 päeva jooksul.
          </p>

          <div className="contact-channels">
            <a
              className="contact-channel"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Esinemise päring')}`}
            >
              <div className="label">E-post</div>
              <div className="value">{EMAIL}</div>
            </a>
            <div className="contact-channel">
              <div className="label">Asukoht</div>
              <div className="value">Eesti</div>
            </div>
            <ul className="footer-social" style={{ marginTop: '0.5rem' }}>
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    aria-disabled="true"
                    title="Peagi saadaval"
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
            alt="Rauno Vaher lähivaates"
          />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimi"
              name="nimi"
              type="text"
              value={form.nimi}
              onChange={handleChange}
              required
              placeholder="Sinu nimi"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="sinu@email.ee"
            />
          </div>

          <div className="form-group">
            <label htmlFor="kuupaev">Sündmuse kuupäev</label>
            <input
              id="kuupaev"
              name="kuupaev"
              type="date"
              value={form.kuupaev}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sonum">Sõnum</label>
            <textarea
              id="sonum"
              name="sonum"
              rows="5"
              value={form.sonum}
              onChange={handleChange}
              required
              placeholder="Räägi oma üritusest või ideest — kuupäev, koht ja soovid."
            />
          </div>

          <button type="submit" className="btn">
            Saada sõnum
          </button>

          {saadetud && (
            <p className="form-note">
              Aitäh! Avasime sinu e-posti kliendi — vajuta seal „Saada", et
              päring ära saata.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
