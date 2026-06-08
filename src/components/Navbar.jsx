import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/galerii', label: t.nav.gallery },
    { to: '/esinemised', label: t.nav.events },
    { to: '/kontakt', label: t.nav.contact },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="dot" aria-hidden="true" />
          Rauno Vaher
        </NavLink>

        <div className="navbar-right">
          <ul id="navbar-menu" className={`navbar-links ${open ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className="lang-switch"
            role="group"
            aria-label={t.nav.langLabel}
          >
            <button
              type="button"
              className={lang === 'et' ? 'active' : ''}
              aria-pressed={lang === 'et'}
              onClick={() => setLang('et')}
            >
              ET
            </button>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <button
            className="navbar-toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="navbar-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
