"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import { translations } from "@/lib/translations"

type Language = "en" | "ptbr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const defaultValue: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: translations.en,
}

const LanguageContext = createContext<LanguageContextType>(defaultValue)

export function LanguageProvider({ 
  children, 
  initialLocale = "en" 
}: { 
  children: ReactNode
  initialLocale?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLocale)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Extract locale from pathname
  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean)
    const localeFromPath = segments[0] as Language

    if (localeFromPath === "en" || localeFromPath === "ptbr") {
      if (localeFromPath !== language) {
        setLanguageState(localeFromPath)
      }
    }
    setMounted(true)
  }, [pathname, language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    
    // Update URL to reflect language change
    const segments = pathname.split('/').filter(Boolean)
    segments[0] = lang // Replace locale in URL
    const newPath = '/' + segments.join('/')
    router.push(newPath)
  }

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations.en,
    }),
    [language]
  )

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
