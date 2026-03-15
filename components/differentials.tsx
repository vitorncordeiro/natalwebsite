"use client"

import { Cpu, TrendingUp, Zap, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function Differentials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: itemsRef, isVisible: itemsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.differentials.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t.differentials.title}
          </h2>
        </div>
        
        <div ref={itemsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.differentials.items.map((item, index) => (
            <div 
              key={item.title} 
              className={`group transition-all duration-500 ease-out ${
                itemsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`mb-4 flex items-center justify-center w-14 h-14 rounded-lg bg-foreground text-background transition-all duration-300 group-hover:bg-primary group-hover:scale-110 ${
                  itemsVisible ? "scale-100" : "scale-75"
                }`}
                style={{ transitionDelay: `${index * 100 + 150}ms` }}
              >
                {index === 0 && <Cpu className="w-6 h-6" />}
                {index === 1 && <TrendingUp className="w-6 h-6" />}
                {index === 2 && <Zap className="w-6 h-6" />}
                {index === 3 && <Target className="w-6 h-6" />}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
