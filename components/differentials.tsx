"use client"

import { Cpu, TrendingUp, Zap, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const differentials = [
  {
    icon: Cpu,
    title: "Engineering mindset",
    description: "Systems are built with structure, not improvisation.",
  },
  {
    icon: TrendingUp,
    title: "Scalable architecture",
    description: "Every solution is designed to grow with your business.",
  },
  {
    icon: Zap,
    title: "Modern technology",
    description: "Using reliable and up-to-date tools.",
  },
  {
    icon: Target,
    title: "Focused on results",
    description: "Technology that actually solves problems.",
  },
]

export function Differentials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: itemsRef, isVisible: itemsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Differentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Why work with me
          </h2>
        </div>
        
        <div ref={itemsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
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
                <item.icon className="w-6 h-6" />
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
