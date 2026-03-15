import { usePathname } from "next/navigation"

export function useLocalizedRouter() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentLocale = (segments[0] as 'en' | 'ptbr') || 'en'

  const getLocalizedPath = (path: string, locale?: 'en' | 'ptbr') => {
    const targetLocale = locale || currentLocale
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    
    // If path already starts with a locale, replace it
    if (cleanPath.match(/^(en|ptbr)($|\/)/)) {
      return `/${targetLocale}/${cleanPath.replace(/^(en|ptbr)($|\/)/, '')}`
    }
    
    // Otherwise, prepend the locale
    return `/${targetLocale}/${cleanPath}`.replace(/\/$/, '')
  }

  return {
    currentLocale,
    getLocalizedPath,
  }
}
