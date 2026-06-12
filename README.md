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

## Deploy (nginx)

Build tehakse lokaalselt ja `dist/` sisu serveeritakse nginx-iga:

```bash
npm run build      # tekitab dist/ kausta
```

Kopeeri `dist/` sisu serveri veebijuurikasse. nginx server block peab
SPA jaoks suunama kõik teed `index.html`-ile:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

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
