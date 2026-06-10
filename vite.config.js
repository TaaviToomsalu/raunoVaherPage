import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ICAL_URL =
  '/calendar/ical/d9cce29fd9a35d1e85009d71566d5539aa94bb969f6f252f8057cfd64f2635a7%40group.calendar.google.com/public/basic.ics'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
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
