"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#work" },
    { name: "Process", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

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
              Digital<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Building systems that actually work. Modern websites, automation, and AI infrastructure for businesses that want to operate smarter.
            </p>
          </div>

          {/* Navigation */}
          <div 
            className={`transition-all duration-700 ease-out delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
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
              Connect
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
              hello@digital.dev
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
            {currentYear} Digital Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
