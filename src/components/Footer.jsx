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
        <ul className="footer-social">
          {social.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-copy">
          © {new Date().getFullYear()} Rauno Vaher. Kõik õigused kaitstud.
        </p>
      </div>
    </footer>
  )
}
