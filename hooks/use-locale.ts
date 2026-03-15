import { usePathname } from "next/navigation"

export function useLocale() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const locale = (segments[0] as 'en' | 'ptbr') || 'en'
  return locale
}
