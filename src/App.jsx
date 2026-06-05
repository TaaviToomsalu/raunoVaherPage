import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Avaleht from './pages/Avaleht.jsx'
import Galerii from './pages/Galerii.jsx'
import Esinemised from './pages/Esinemised.jsx'
import Kontakt from './pages/Kontakt.jsx'

export default function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Jäta navigatsioon vahele
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
                  <h2 className="section-title">Lehte ei leitud</h2>
                  <p
                    className="section-subtitle"
                    style={{ margin: '0 auto 2rem' }}
                  >
                    Seda lehte ei eksisteeri. Naase avalehele.
                  </p>
                  <Link to="/" className="btn">
                    Avaleht
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
