// Ajutine klient-navigatsiooni test (Playwright, headless chromium).
// Käivitab preview-serveri all ja kontrollib: hüdreerimine, keelevahetus,
// nav-lingid, tõlgitud sisu, konsooli-vead. See fail on ühekordne — kustuta pärast.
import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:4173'
const results = []
let failed = 0

function check(name, cond, detail = '') {
  results.push(`${cond ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`)
  if (!cond) failed++
}

const browser = await chromium.launch()
const page = await browser.newPage()

const consoleErrors = []
page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()))
page.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message))

// 1. ET avaleht laeb + hüdreerib
await page.goto(BASE + '/', { waitUntil: 'networkidle' })
check('ET avaleht: <html lang>', (await page.getAttribute('html', 'lang')) === 'et')
check('ET avaleht: title', (await page.title()).includes('trummar'), await page.title())
check(
  'ET avaleht: nav näitab "Galerii"',
  await page.getByRole('link', { name: 'Galerii', exact: true }).isVisible()
)

// 2. Keelevahetus ET → EN (peab jääma avalehele, URL /en)
await page.getByRole('button', { name: 'EN' }).click()
await page.waitForURL('**/en')
// title uueneb react-helmet-async kaudu asünkroonselt — oota seda
await page
  .waitForFunction(() => document.title.includes('Drummer'), { timeout: 3000 })
  .catch(() => {})
check('Keelevahetus → /en URL', page.url().endsWith('/en'), page.url())
check('EN avaleht: <html lang>', (await page.getAttribute('html', 'lang')) === 'en')
check('EN avaleht: title inglise', (await page.title()).includes('Drummer'), await page.title())
check(
  'EN avaleht: nav näitab "Gallery"',
  await page.getByRole('link', { name: 'Gallery', exact: true }).isVisible()
)

// 3. Nav-link EN keeles: Gallery → /en/gallery
await page.getByRole('link', { name: 'Gallery', exact: true }).click()
await page.waitForURL('**/en/gallery')
check('EN nav → /en/gallery', page.url().endsWith('/en/gallery'), page.url())
check(
  'EN galerii sisu inglise',
  (await page.locator('h1.page-title').textContent())?.trim() === 'Gallery'
)

// 4. Keelevahetus galeriil EN → ET (peab jääma galeriile: /galerii)
await page.getByRole('button', { name: 'ET' }).click()
await page.waitForURL('**/galerii')
check('Keelevahetus galeriil → /galerii (sama leht)', page.url().endsWith('/galerii'), page.url())
check(
  'ET galerii sisu eesti',
  (await page.locator('h1.page-title').textContent())?.trim() === 'Galerii'
)

// 5. Sisemine CTA-link avalehelt: ava avaleht, kliki "Võta ühendust" → /kontakt
await page.goto(BASE + '/', { waitUntil: 'networkidle' })
await page.getByRole('link', { name: 'Võta ühendust' }).first().click()
await page.waitForURL('**/kontakt')
check('ET sisemine link → /kontakt', page.url().endsWith('/kontakt'), page.url())

// 6. 404 tundmatul teel
await page.goto(BASE + '/mittemidagi', { waitUntil: 'networkidle' })
const notFoundRobots = await page.getAttribute('meta[name="robots"]', 'content').catch(() => null)
check('404: noindex robots', notFoundRobots === 'noindex', String(notFoundRobots))

// 7. Konsooli-vead
check('Konsool ilma vigadeta', consoleErrors.length === 0, consoleErrors.join(' | '))

await browser.close()

console.log('\n' + results.join('\n'))
console.log(`\n${failed === 0 ? 'KÕIK OK' : failed + ' TESTI KUKKUS'}`)
process.exit(failed === 0 ? 0 : 1)
