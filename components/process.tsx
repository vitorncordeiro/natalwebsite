"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business, your processes, and your technical needs.",
  },
  {
    number: "02", 
    title: "Architecture",
    description: "Designing a scalable system that supports both your current operations and future growth.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building the solution using modern technologies and engineering best practices.",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Launching, testing, and ensuring stability and performance.",
  },
]

export function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How I work
          </h2>
        </div>
        
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`relative transition-all duration-500 ease-out ${
                stepsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div 
                  className={`hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0 transition-all duration-700 origin-left ${
                    stepsVisible ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary bg-background transition-all duration-500 ${
                      stepsVisible ? "scale-100" : "scale-75"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 100}ms` }}
                  >
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
