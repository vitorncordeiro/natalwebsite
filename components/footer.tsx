"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const { t } = useLanguage()

  const social = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ]

  return (
    <footer ref={ref} className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div 
            className={`md:col-span-2 transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link href="/" className="text-xl font-bold tracking-tight">
              {t.footer.brand}<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div 
            className={`transition-all duration-700 ease-out delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t.footer.navigation.label}
            </h3>
            <ul className="space-y-3">
              {t.footer.navigation.items.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transition-all duration-500 ease-out ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <Link 
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div 
            className={`transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t.footer.connect.label}
            </h3>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${250 + index * 75}ms` }}
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t.footer.email}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className={`mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
