import { useLang } from '../i18n.jsx'

const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/matslaav/' },
  { label: 'Facebook', href: 'https://www.facebook.com/matslaav' },
]

export default function Footer() {
  const { t } = useLang()

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
                    title={t.contact.soonTitle}
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
          © {new Date().getFullYear()} — TaaviCode
        </p>
      </div>
    </footer>
  )
}
