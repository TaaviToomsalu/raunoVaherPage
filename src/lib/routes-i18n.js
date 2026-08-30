// Keele-teadlik URL-skeem. Eesti keel elab juurtasandil, inglise keel /en all
// tõlgitud slug'idega. See fail on ainus koht, kus URL-slug'e defineeritakse —
// nii Navbar, sisemised lingid, hreflang kui sitemap loevad siit.

export const LANGS = ['et', 'en']
export const DEFAULT_LANG = 'et'

// Saidi kanooniline päritolu (ilma lõpukaldkriipsuta). Kasutatakse canonical-,
// hreflang-, OG-URL-ide ja sitemapi ehitamiseks.
export const SITE_URL = 'https://raunovaher.com'

// Iga lehe slug mõlemas keeles. `key` on stabiilne sisemine identifikaator.
export const PAGES = [
  { key: 'home', paths: { et: '/', en: '/en' } },
  { key: 'gallery', paths: { et: '/galerii', en: '/en/gallery' } },
  { key: 'events', paths: { et: '/esinemised', en: '/en/events' } },
  { key: 'contact', paths: { et: '/kontakt', en: '/en/contact' } },
]

// Kõik URL-id lamedas nimekirjas (sitemap + prerender-crawler kasutavad).
export const ALL_PATHS = PAGES.flatMap((p) => LANGS.map((l) => p.paths[l]))

// Eemaldab lõpukaldkriipsu (v.a juur), et võrdlus oleks stabiilne.
function normalize(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

// Keel URL-i põhjal. Töötab nii brauseris kui prerender-ajal (localStorage puudub SSG-s).
export function getLang(pathname) {
  const p = normalize(pathname)
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'et'
}

// Lehe `key` URL-i põhjal, või null (nt 404).
export function keyFor(pathname) {
  const p = normalize(pathname)
  const page = PAGES.find((x) => x.paths.et === p || x.paths.en === p)
  return page ? page.key : null
}

// URL antud lehe + keele jaoks.
export function pathFor(key, lang) {
  const page = PAGES.find((p) => p.key === key)
  if (!page) return lang === 'en' ? '/en' : '/'
  return page.paths[lang]
}

// Sama lehe URL teises keeles (keelevalija + hreflang kasutavad).
// Tundmatu tee (404) → sihtkeele avaleht.
export function alternatePath(pathname, targetLang) {
  const key = keyFor(pathname)
  if (key) return pathFor(key, targetLang)
  return targetLang === 'en' ? '/en' : '/'
}
