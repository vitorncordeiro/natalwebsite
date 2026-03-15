"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageIcon } from "@/components/language-icon"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const navigation = [
    { name: t.navigation.home, href: "#" },
    { name: t.navigation.services, href: "#services" },
    { name: t.navigation.work, href: "#work" },
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.contact, href: "#contact" },
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div 
          className={`flex lg:flex-1 transition-all duration-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Natal Sites<span className="text-primary">.</span>
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden gap-2">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:text-primary transition-colors"
            onClick={() => setLanguage(language === "en" ? "ptbr" : "en")}
            title={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
          >
            <LanguageIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium text-muted-foreground transition-all duration-500 hover:text-primary ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div 
          className={`hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4 transition-all duration-500 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setLanguage(language === "en" ? "ptbr" : "en")}
            title={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
          >
            <LanguageIcon className="h-5 w-5" />
            
          </button>
          <Button asChild>
            <Link href="#contact">{t.hero.ctaPrimary}</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Natal Sites<span className="text-primary">.</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-all duration-300 ${
                      mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div 
                className={`py-6 transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: mobileMenuOpen ? "250ms" : "0ms" }}
              >
                <Button asChild className="w-full">
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    {t.hero.ctaPrimary}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
