import { useState } from 'react'

const EMAIL = 'rauno.vaher@example.com'

export default function Kontakt() {
  const [form, setForm] = useState({ nimi: '', email: '', sonum: '' })
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
      `Nimi: ${form.nimi}\nE-post: ${form.email}\n\n${form.sonum}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSaadetud(true)
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-subtitle">
          Broneeri esinemine või küsi pakkumist. Vastan tavaliselt 1–2 päeva jooksul.
        </p>

        <div className="contact-grid">
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
              <label htmlFor="sonum">Sõnum</label>
              <textarea
                id="sonum"
                name="sonum"
                rows="5"
                value={form.sonum}
                onChange={handleChange}
                required
                placeholder="Räägi oma üritusest — kuupäev, koht ja soovid."
              />
            </div>

            <button type="submit" className="btn">
              Saada sõnum
            </button>

            {saadetud && (
              <p className="form-note">
                Aitäh! Avasime sinu e-posti kliendi — vajuta seal „Saada", et päring
                ära saata.
              </p>
            )}
          </form>

          <aside className="contact-aside">
            <h3>Otsekontakt</h3>
            <p>Eelistad e-kirja? Kirjuta otse — ootan sinust kuulda.</p>
            <a
              className="btn btn-outline"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Esinemise päring')}`}
            >
              Kirjuta e-kiri
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
