import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'rv-lang'
const LanguageContext = createContext(null)

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'et' || saved === 'en') return saved
  } catch {
    /* localStorage pole saadaval — kasuta vaikekeelt */
  }
  return 'et'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* vaikne — kirjutamine võib privaatrežiimis ebaõnnestuda */
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang peab olema LanguageProvideri sees')
  return ctx
}
