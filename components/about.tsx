"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Technology built with precision.
            </h2>
          </div>
          
          <div 
            className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <p>
              I'm a technology developer focused on building reliable digital systems for modern businesses.
            </p>
            <p>
              My work combines software engineering, automation, and artificial intelligence to create tools that simplify operations, improve efficiency, and support growth.
            </p>
            <p>
              From high-performance websites to complex automated workflows and AI infrastructure, every project is designed with clarity, scalability, and long-term value in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
