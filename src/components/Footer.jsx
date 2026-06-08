const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Spotify', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          Rauno <span className="accent">Vaher</span>
        </div>
        <ul className="footer-social">
          {social.map((item) => {
            const ready = item.href && item.href !== '#'
            return (
              <li key={item.label}>
                {ready ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <a
                    href="#"
                    aria-disabled="true"
                    title="Peagi saadaval"
                    tabIndex={-1}
                    onClick={(e) => e.preventDefault()}
                    style={{ opacity: 0.45, cursor: 'default' }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
        <p className="footer-copy">
          © {new Date().getFullYear()} — Rütm metsast kosmoseni.
        </p>
      </div>
    </footer>
  )
}
