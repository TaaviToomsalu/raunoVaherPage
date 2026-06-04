# Rauno Vaher — Portfoolio

Trummari Rauno Vaheri portfoolio veebisait. Ehitatud **Vite + React**-iga, eesti keeles.

## Arendus

```bash
npm install
npm run dev
```

Sait avaneb aadressil http://localhost:5173

## Tootmisversioon

```bash
npm run build      # build kausta dist/
npm run preview    # eelvaade tootmisversioonist
```

## Lehed

- **Avaleht** — hero sektsioon, tutvustus, CTA ja YouTube video
- **Galerii** — responsive pildigrid (placeholder pildid)
- **Esinemised** — tulevased ja varasemad esinemised
- **Kontakt** — kontaktivorm (mailto, backendita)

## Netlify deploy

Projekt on kohe deployitav:

- Build käsk: `npm run build`
- Publish kaust: `dist`
- SPA redirect on seadistatud failides `netlify.toml` ja `public/_redirects`
  (`/* /index.html 200`)

Lohista projekt Netlify'sse või ühenda Git repo — seadistust pole vaja muuta.

## Struktuur

```
src/
  assets/       # pildid ja meedia
  components/   # Navbar, Footer, VideoEmbed
  pages/        # Avaleht, Galerii, Esinemised, Kontakt
  styles/       # index.css
```

## Kohandamine

- **Video**: muuda `videoId` failis `src/pages/Avaleht.jsx`
- **E-post**: muuda `EMAIL` failis `src/pages/Kontakt.jsx`
- **Galerii pildid**: asenda placeholderid failis `src/pages/Galerii.jsx`
- **Sotsiaalmeedia lingid**: muuda `src/components/Footer.jsx`
