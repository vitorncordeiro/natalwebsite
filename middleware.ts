import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'ptbr']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to default locale if no locale is present
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    )
  }

  // For other paths, add the default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\..*).*)']
}
