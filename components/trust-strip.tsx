"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const items = [
  "Websites",
  "Automation Systems", 
  "AI Infrastructure",
  "Custom Integrations",
  "Performance Focused",
]

export function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.5 })

  return (
    <section ref={ref} className="border-y border-border bg-muted/30 py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-16">
          {items.map((item, index) => (
            <div 
              key={item} 
              className={`flex items-center gap-3 transition-all duration-500 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
              )}
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
