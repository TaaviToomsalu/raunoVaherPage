import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { LanguageProvider, useLang } from './i18n.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function SkipLink() {
  const { t } = useLang()
  return (
    <a href="#main-content" className="skip-link">
      {t.skip}
    </a>
  )
}

// Juur-layout: keelekontekst (URL-ipõhine) + püsiv raamistik + route-sisu (Outlet).
export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <ScrollToTop />
        <SkipLink />
        <Navbar />
        <main className="main" id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
