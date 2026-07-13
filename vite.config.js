import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ALL_PATHS } from './src/lib/routes-i18n.js'

const ICAL_URL =
  '/calendar/ical/d9cce29fd9a35d1e85009d71566d5539aa94bb969f6f252f8057cfd64f2635a7%40group.calendar.google.com/public/basic.ics'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Prerender (vite-react-ssg): genereeri kõik keele-URL-id kaustastiilis
  // (nt /galerii/index.html) — sobib nginx `try_files $uri $uri/` skeemiga.
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => ALL_PATHS,
  },
  server: {
    // Dev-proxy, et /kalender.ics töötaks ilma CORS'ita (prod'is teeb sama nginx)
    proxy: {
      '/kalender.ics': {
        target: 'https://calendar.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => ICAL_URL,
      },
    },
  },
})
