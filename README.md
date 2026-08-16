# Rauno Vaher — Portfolio

Portfolio site for Rauno Vaher, drummer, musician and ritual facilitator.
Built with **Vite + React**, statically pre-rendered with `vite-react-ssg`
and bilingual (Estonian as the default language, English under `/en` with
translated slugs).

The site is production-ready: every page is pre-rendered to HTML (for SEO
and speed), hydrated on the client, and served as static files behind nginx.

## Development

```bash
npm install
npm run dev
```

The site opens at http://localhost:5173 — in Estonian.
The English version lives at http://localhost:5173/en.

### Dev proxy

`vite.config.js` proxies `/kalender.ics` to a Google Calendar ICS feed so the
Events page works locally without CORS issues. In production nginx does the same.

## Production build

```bash
npm run build      # pre-renders all pages into dist/ + sitemap.xml
npm run preview    # preview of the production build
```

During build:

- `vite-react-ssg` generates a static HTML file for every language URL
  (folder style — e.g. `/galerii/index.html`, `/en/gallery/index.html`)
- `scripts/generate-sitemap.mjs` writes `dist/sitemap.xml` (all URLs included)

## Pages

- **Home** — hero section, bio, offerings grid ("My Path"), the Mats Laav
  music project, testimonials, a local showcase video and a CTA.
  Each offering card has a "Request a quote" link that pre-fills the service
  in the contact form.
- **Gallery** — masonry grid of real photos and videos from the site's own
  media. Row heights are computed on the client from actual element heights.
- **Events** — calendar data is fetched from a Google Calendar ICS feed.
  SSG pre-renders the page and the client refreshes it after hydration (no flash).
- **Contact** — a Formspree form with fields for service, date, location,
  number of attendees and message. The booking process is shown as a short
  guide. CTA links (`#vorm`) scroll the form into view on mobile.

## Languages and i18n

- Languages: Estonian (`/`) and English (`/en` …), URL-based, **not** from
  localStorage.
- All slugs are defined in a single place: [`src/lib/routes-i18n.js`](src/lib/routes-i18n.js).
- The language switch keeps the current page and navigates to the translated URL.
- Texts must keep an identical structure across both languages
  ([`src/translations.js`](src/translations.js)).

## SEO

- Each page gets its own `<title>`, meta description, canonical, hreflang
  (et / en / x-default), OpenGraph and Twitter Card tags
  ([`src/components/Seo.jsx`](src/components/Seo.jsx)).
- The home page adds Schema.org Person JSON-LD (Google knowledge panel).
- `sitemap.xml` is generated during the build from all defined URLs.

## Events calendar

- Google Calendar ICS feed → parsed in [`src/lib/calendar.js`](src/lib/calendar.js).
- On the server / during SSG the public Google URL is used directly
  (Node has no CORS restrictions).
- In the browser the same-origin path `/kalender.ics` is used
  (dev: Vite proxy, prod: nginx proxy).
- If the calendar is unreachable the page falls back to an empty list (the
  page never breaks).

## Accessibility

- Skip-to-content link.
- Visible keyboard focus styles (`:focus-visible`).
- Semantic headings and labelled form fields.
- `prefers-reduced-motion` is respected (reveal animations are disabled).

## Deploy

### Docker

The container builds the static site and serves it with nginx:

```bash
docker compose up --build
```

The site listens on port 80. [`Dockerfile`](Dockerfile) and [`compose.yaml`](compose.yaml)
hold the configuration. [`nginx.conf`](nginx.conf) routes unknown paths to
`/index.html` (SPA fallback) for both the Estonian and English folders.

### To a server

If Docker is not used, build locally and copy the contents of `dist/` into the
server's web root. Nginx must route every path to an existing file or to
`/index.html` (`try_files $uri $uri/ /index.html;`).

## Structure

```
src/
  assets/        # local images and media (when imported directly)
  components/    # Navbar, Footer, Seo, VideoEmbed
  i18n.jsx       # language context (URL-based)
  lib/
    routes-i18n.js   # slugs, language detection, URL building
    calendar.js      # ICS parser and fetchGigs()
  pages/         # Avaleht, Galerii, Esinemised, Kontakt, NotFound
  routes.jsx     # React Router configuration
  styles/        # index.css (charcoal + ember design)
  translations.js   # all texts in Estonian and English
scripts/
  generate-sitemap.mjs   # sitemap.xml after build
public/
  images/        # photos (gallery, hero, bio, CTA…)
  videos/        # short videos for the gallery
  esitlusvideo.mp4   # home showcase video (local, not YouTube)
vite.config.js   # SSG + language URLs + calendar dev proxy
```

## Editing content

- **All site texts** must keep an identical structure across both languages
  and live in [`src/translations.js`](src/translations.js). Change Estonian
  and English strings from a single place. Editing a text in one language
  without the other breaks the page.
- **URL slugs / pages**: [`src/lib/routes-i18n.js`](src/lib/routes-i18n.js),
  the `PAGES` array. Stable `key`s (e.g. `contact`) link components and URLs.
- **Email**: `EMAIL` in [`src/pages/Kontakt.jsx`](src/pages/Kontakt.jsx).
- **Formspree endpoint**: `fetch('https://formspree.io/f/…')` in the same file.
- **Social media links**: the `socials` array in
  [`src/pages/Kontakt.jsx`](src/pages/Kontakt.jsx) and
  [`src/components/Footer.jsx`](src/components/Footer.jsx).
- **Gallery media**: the `items` array in [`src/pages/Galerii.jsx`](src/pages/Galerii.jsx)
  (images in `/images/`, videos in `/videos/`). Captions (`t.gallery.captions`)
  must match the array order exactly.
- **Showcase video**: `<VideoEmbed … />` in
  [`src/pages/Avaleht.jsx`](src/pages/Avaleht.jsx); the file lives at
  `public/esitlusvideo.mp4` (+ `esitlusvideo-poster.jpg`).
- **Google Calendar ICS feed**: `CAL_URL` in
  [`src/lib/calendar.js`](src/lib/calendar.js) and the dev proxy in
  `vite.config.js`. Use the same URL in both places.
- **Testimonial quotes**: `t.testimonials.quotes` in
  [`src/translations.js`](src/translations.js) (currently anonymous — see
  `rauno-kysimused.txt` for the plan to replace them with real reviews).

## Contact / booking

The booking flow is built so that any offering card (on the home page), the
"Book a date" button on the Events page and the hero/CTA buttons all lead
straight into the form — with the right service pre-selected and, on mobile,
scrolled into view (the `#vorm` anchor).

The contact form is sent via Formspree to email; a reply is promised within
1–2 days. Form fields are available in both Estonian and English.

## Muudatuste logi

### 2026-08-03 — taustapiltide ja üleminekute uuendus

- **Hero, Minu tee ja Inimeste sõnade** taustapildid asendatud
  `background-attachment: fixed` reeglist eraldi `position: fixed` pildikihiga,
  mida sektsioon lõikab `clip-path` / `mask-image` abil. Lahendab mobiilibrauseri
  URL-bari zoomimise probleemi (.Redmi / Android Chrome).
- **Hero** gradient-ülelävi (_hero-overlay_) eraldatud oma kihina, et pilt
  jääks fikseerituna extingu rulluiva efektiita.
- **Mats Laav** sektsiooni teravad `border-top` / `border-bottom` jooned
  eemaldatud; asendatud `mask-image` fadega, mis hägustab sujuvalt over
  "MATS LAAV" wordmarki.
- Kõigile pilditaustaga sektsioonidele lisatud `mask-image` gradient-fade
  (üleval ja all 6rem), et sektsioonide vahelised üleminekud oleksid sujuvad,
  mitte teravad jooned.
- Desktopil (`min-width: 721px`) **Minu tee** ja **Inimeste sõnade** taust
  kasutab endiselt native `background-attachment: fixed` (stabiilne ja
  kvaliteetsem); mobiilis `position: fixed` + `mask-image` kiht.

## Handoff

### 2026-08-16 — events refresh + past-list cap

- **Weekly rebuild workflow** ([`.github/workflows/refresh.yml`](.github/workflows/refresh.yml)):
  scheduled cron (Monday 01:00 UTC ≈ 04:00 EEST) plus a `workflow_dispatch`
  manual trigger. It SSHes into the server and runs the same
  `git pull && docker-compose up -d --build` as `deploy.yml`. Purpose is to
  keep the SSG-baked events snapshot (HTML + `static-loader-data`) fresh
  so the SEO payload doesn't go stale and there's no "old list → new"
  flash on hydration — the client-side `/kalender.ics` fetch already
  keeps the displayed list live between builds.
- **Past events capped at 10** ([`src/lib/calendar.js`](src/lib/calendar.js),
  `.slice(0, 10)` after the sort in `fetchGigs()`): the Events page now
  shows only the 10 most recent past events, since the past list was
  getting long.

### TODO — needs from Rauno

1. **More reliable info to the feedback/contact flow** — current
   testimonial quotes are anonymous placeholders (see
   `rauno-kysimused.txt`); real, attributable feedback is needed so they
   can replace the placeholders in `t.testimonials.quotes`
   ([`src/translations.js`](src/translations.js)).
2. **Move the Google Calendar to Rauno's own account** — the events ICS
   feed is currently hosted under the maintainer's Google account
   (`CAL_URL` in [`src/lib/calendar.js`](src/lib/calendar.js) and
   `ICAL_URL`/dev proxy in [`vite.config.js`](vite.config.js)). Once
   Rauno shares the public `.ics` URL from his own calendar, update both
   places (and the matching `location` in [`nginx.conf`](nginx.conf) if
   the proxy path changes). No code restructuring needed.