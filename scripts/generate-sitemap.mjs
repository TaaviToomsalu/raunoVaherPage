// Genereerib dist/sitemap.xml route-tabeli põhjal (src/lib/routes-i18n.js).
// Käivitatakse peale prerender-buildi (vt package.json "build"), nii et
// sitemap püsib alati URL-idega sünkroonis. Iga URL loetleb oma keele-
// alternatiivid (hreflang) — Google seob nii ET ja EN versioonid kokku.
import { writeFileSync } from 'node:fs'
import { PAGES, LANGS, SITE_URL } from '../src/lib/routes-i18n.js'

const abs = (path) => SITE_URL + path

function alternates(page) {
  const links = LANGS.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page.paths[l])}"/>`
  )
  // x-default osutab eesti (vaike)versioonile.
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page.paths.et)}"/>`
  )
  return links.join('\n')
}

const urls = PAGES.flatMap((page) =>
  LANGS.map(
    (lang) => `  <url>
    <loc>${abs(page.paths[lang])}</loc>
${alternates(page)}
  </url>`
  )
).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`

writeFileSync(new URL('../dist/sitemap.xml', import.meta.url), xml)
console.log(`[sitemap] dist/sitemap.xml — ${PAGES.length * LANGS.length} URL-i`)
