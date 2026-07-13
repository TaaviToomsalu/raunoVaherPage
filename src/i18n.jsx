import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { translations } from './translations.js'
import { getLang, pathFor } from './lib/routes-i18n.js'

const LanguageContext = createContext(null)

// Keel tuletatakse URL-ist (mitte localStorage'ist) — nii on iga keel oma
// stabiilse indekseeritava URL-iga ja prerender annab õige keele HTML-i.
export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const lang = getLang(pathname)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = {
    lang,
    t: translations[lang],
    // Keele-teadlik sisemine link: to('contact') → '/kontakt' või '/en/contact'.
    to: (key) => pathFor(key, lang),
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang peab olema LanguageProvideri sees')
  return ctx
}
