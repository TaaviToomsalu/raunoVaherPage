import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { pathFor, alternatePath } from '../lib/routes-i18n.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, t } = useLang()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const links = [
    { to: pathFor('home', lang), label: t.nav.home, end: true },
    { to: pathFor('gallery', lang), label: t.nav.gallery },
    { to: pathFor('events', lang), label: t.nav.events },
    { to: pathFor('shop', lang), label: t.nav.shop },
    { to: pathFor('contact', lang), label: t.nav.contact },
  ]

  // Keelevahetus säilitab praeguse lehe, aga viib teise keele URL-ile.
  const switchLang = (target) => {
    if (target !== lang) navigate(alternatePath(pathname, target))
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink
          to={pathFor('home', lang)}
          end
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
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
              onClick={() => switchLang('et')}
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
              onClick={() => switchLang('en')}
            >
              EN
            </button>
          </div>

          {/* Snipcarti ostukorv — snipcart-checkout avab carti,
              snipcart-items-count uueneb automaatselt carti laadimisel. */}
          <button type="button" className="navbar-cart snipcart-checkout">
            {t.nav.cart}
            <span className="snipcart-items-count cart-count">0</span>
          </button>

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
