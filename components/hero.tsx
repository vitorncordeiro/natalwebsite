"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div 
                className={`transition-all duration-700 ease-out ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.hero.badge}</span>
                </div>
              </div>
              
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.1] transition-all duration-700 ease-out delay-100 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {t.hero.title.split(t.hero.titleHighlight)[0]}{" "}
                <span className="text-primary">{t.hero.titleHighlight}</span>
                {t.hero.title.split(t.hero.titleHighlight)[1]}
              </h1>
              
              <p 
                className={`text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 ease-out delay-200 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {t.hero.description}
              </p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button size="lg" asChild className="group">
                <Link href="#contact">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#work">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
          
          {/* Visual Element - Technical Grid */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative aspect-square">
              {/* Grid Background */}
              <div className="absolute inset-0 border border-border rounded-lg bg-muted/30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>
              
              {/* Floating Elements with staggered animations */}
              <div 
                className={`absolute top-8 left-8 w-32 h-24 bg-background border border-border rounded-md shadow-sm p-4 transition-all duration-700 ease-out delay-700 ${
                  isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
              >
                <div className="w-8 h-1 bg-primary rounded mb-2" />
                <div className="w-16 h-1 bg-muted-foreground/30 rounded mb-2" />
                <div className="w-12 h-1 bg-muted-foreground/30 rounded" />
              </div>
              
              <div 
                className={`absolute top-1/4 right-12 w-40 h-28 bg-background border border-border rounded-md shadow-sm p-4 transition-all duration-700 ease-out delay-[800ms] ${
                  isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-1.5">
                  <div className="w-full h-1 bg-muted-foreground/20 rounded" />
                  <div className="w-3/4 h-1 bg-muted-foreground/20 rounded" />
                  <div className="w-5/6 h-1 bg-muted-foreground/20 rounded" />
                </div>
              </div>
              
              <div 
                className={`absolute bottom-1/4 left-16 w-36 h-20 bg-foreground rounded-md shadow-lg p-4 transition-all duration-700 ease-out delay-[900ms] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="w-6 h-1 bg-primary rounded mb-2" />
                <div className="w-20 h-1 bg-background/30 rounded mb-1" />
                <div className="w-16 h-1 bg-background/30 rounded" />
              </div>
              
              <div 
                className={`absolute bottom-12 right-8 w-28 h-28 border-2 border-dashed border-primary/40 rounded-lg flex items-center justify-center transition-all duration-700 ease-out delay-[1000ms] ${
                  isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-md flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary rounded" />
                </div>
              </div>
              
              {/* Connection Lines */}
              <svg 
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 delay-[1100ms] ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`} 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="160" y1="120" x2="200" y2="180" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
                <line x1="300" y1="200" x2="180" y2="280" stroke="currentColor" strokeWidth="1" className="text-primary/40" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
