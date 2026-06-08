import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Avaleht', end: true },
  { to: '/galerii', label: 'Galerii' },
  { to: '/esinemised', label: 'Esinemised' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="dot" aria-hidden="true" />
          Rauno Vaher
        </NavLink>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Sulge menüü' : 'Ava menüü'}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

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
      </div>
    </nav>
  )
}
