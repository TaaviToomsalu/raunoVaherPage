import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Avaleht from './pages/Avaleht.jsx'
import Galerii from './pages/Galerii.jsx'
import Esinemised from './pages/Esinemised.jsx'
import Kontakt from './pages/Kontakt.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Avaleht />} />
          <Route path="/galerii" element={<Galerii />} />
          <Route path="/esinemised" element={<Esinemised />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
