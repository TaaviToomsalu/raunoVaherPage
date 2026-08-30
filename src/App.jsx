import { useEffect, useRef } from 'react'
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

// Snipcarti modal elab väljaspool Reacti (#root'ist allpool) ja jääks SPA
// lehevahetusel lahti seisma. Kui kasutaja navigeerib navbari kaudu, sulge
// avatud cart/checkout — ostukorvi sisu jääb Snipcarti sessiooni meelde.
function CloseSnipcartOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    const layout = document.querySelector('.snipcart-layout')
    if (!layout || layout.offsetParent === null) return
    const btn =
      document.querySelector('.rv-cart-close') ||
      document.querySelector('.snipcart-modal__close')
    if (btn) btn.click()
  }, [pathname])
  return null
}

// Globaalne scroll-triggered reveal: elemendid klassiga .reveal
// saavad .is-visible, kui nad vaatevälja jõuavad. Üks ühine
// IntersectionObserver kogu rakenduse jaoks, taaskäivitatakse
// iga route'i vahetuse järel, et uute lehtede elemendid haarata.
function useReveal() {
  const { pathname } = useLocation()
  const ioRef = useRef(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    ioRef.current = io

    const run = () => {
      io.disconnect()
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }
    run()
    // Andmeline viide, et hiljem kaldteel lisanduvaid elemente haarata (nt laisk pildid).
    const mo = new MutationObserver(() => run())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [pathname])
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
  useReveal()
  return (
    <LanguageProvider>
      <div className="app">
        <ScrollToTop />
        <CloseSnipcartOnNavigate />
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
