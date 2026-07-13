import { Head } from 'vite-react-ssg'
import { useLang } from '../i18n.jsx'
import { SITE_URL, pathFor } from '../lib/routes-i18n.js'

// Vaikepilt jagamisel (OG/Twitter). Lehed võivad selle üle kirjutada.
const DEFAULT_IMAGE = '/images/raunolilledes.jpg'

// Per-lehe meta: title, description, canonical, hreflang, OG ja Twitter.
// `Head` (vite-react-ssg) kirjutab need nii prerender-HTML-i kui kliendi <head>-i.
export default function Seo({ pageKey, image = DEFAULT_IMAGE }) {
  const { lang, t } = useLang()
  const meta = t.seo[pageKey]

  const canonical = SITE_URL + pathFor(pageKey, lang)
  const imageUrl = image.startsWith('http') ? image : SITE_URL + image
  const ogLocale = lang === 'en' ? 'en_US' : 'et_EE'

  // Sama leht mõlemas keeles + x-default (eesti = vaikekeel).
  const alternates = [
    { hl: 'et', href: SITE_URL + pathFor(pageKey, 'et') },
    { hl: 'en', href: SITE_URL + pathFor(pageKey, 'en') },
    { hl: 'x-default', href: SITE_URL + pathFor(pageKey, 'et') },
  ]

  return (
    <Head>
      <html lang={lang} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      {alternates.map((a) => (
        <link key={a.hl} rel="alternate" hrefLang={a.hl} href={a.href} />
      ))}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rauno Vaher" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  )
}
