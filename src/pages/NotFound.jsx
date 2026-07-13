import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { useLang } from '../i18n.jsx'

export default function NotFound() {
  const { t, to } = useLang()

  return (
    <section className="section">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div
        className="container"
        style={{ textAlign: 'center', paddingTop: '4rem' }}
      >
        <h2 className="section-title">{t.notFound.title}</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
          {t.notFound.text}
        </p>
        <Link to={to('home')} className="btn">
          {t.notFound.btn}
        </Link>
      </div>
    </section>
  )
}
