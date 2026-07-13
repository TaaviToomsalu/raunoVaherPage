import App from './App.jsx'
import Avaleht from './pages/Avaleht.jsx'
import Galerii from './pages/Galerii.jsx'
import Esinemised from './pages/Esinemised.jsx'
import Kontakt from './pages/Kontakt.jsx'
import NotFound from './pages/NotFound.jsx'

// Route-tabel andmestruktuurina — sama nimekiri toidab nii react-routerit
// kui prerenderit (vite-react-ssg). ET juurtasandil, EN /en all tõlgitud
// slug'idega. Slug'id on defineeritud src/lib/routes-i18n.js failis.
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Avaleht /> },
      { path: 'galerii', element: <Galerii /> },
      { path: 'esinemised', element: <Esinemised /> },
      { path: 'kontakt', element: <Kontakt /> },
      { path: 'en', element: <Avaleht /> },
      { path: 'en/gallery', element: <Galerii /> },
      { path: 'en/events', element: <Esinemised /> },
      { path: 'en/contact', element: <Kontakt /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
