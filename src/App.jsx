import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Avaleht from './pages/Avaleht.jsx'
import Galerii from './pages/Galerii.jsx'
import Esinemised from './pages/Esinemised.jsx'
import Kontakt from './pages/Kontakt.jsx'
import { useLang } from './i18n.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { t } = useLang()

  return (
    <div className="app">
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        {t.skip}
      </a>
      <Navbar />
      <main className="main" id="main-content">
        <Routes>
          <Route path="/" element={<Avaleht />} />
          <Route path="/galerii" element={<Galerii />} />
          <Route path="/esinemised" element={<Esinemised />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route
            path="*"
            element={
              <section className="section">
                <div
                  className="container"
                  style={{ textAlign: 'center', paddingTop: '4rem' }}
                >
                  <h2 className="section-title">{t.notFound.title}</h2>
                  <p
                    className="section-subtitle"
                    style={{ margin: '0 auto 2rem' }}
                  >
                    {t.notFound.text}
                  </p>
                  <Link to="/" className="btn">
                    {t.notFound.btn}
                  </Link>
                </div>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
