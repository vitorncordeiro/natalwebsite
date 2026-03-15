"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { Globe, Workflow, Brain, Plug } from "lucide-react"

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.services.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t.services.title}
          </h2>
        </div>
        
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-background border border-border rounded-lg p-8 transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-lg ${
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary">
                  {index === 0 && <Globe className="w-6 h-6" />}
                  {index === 1 && <Workflow className="w-6 h-6" />}
                  {index === 2 && <Brain className="w-6 h-6" />}
                  {index === 3 && <Plug className="w-6 h-6" />}
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
