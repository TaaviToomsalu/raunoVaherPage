import './styles/index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'

// Sama route-tabel toidab nii kliendi hüdreerimise kui prerenderi.
// ViteReactSSG ehitab routeri, mount'ib kliendil ja genereerib buildis
// igale route'ile staatilise HTML-i (õige meta + sisu crawlerile).
export const createRoot = ViteReactSSG({ routes })
