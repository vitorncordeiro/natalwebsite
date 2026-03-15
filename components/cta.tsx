"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Ready to build something that actually works?
          </h2>
          
          <p 
            className={`mt-6 text-lg text-accent-foreground/70 max-w-xl mx-auto transition-all duration-700 ease-out delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Tell me what you need. I'll respond in less than 24 hours with an honest assessment of whether I can help.
          </p>
          
          <div 
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium group"
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 px-8 py-6 text-base font-medium"
            >
              See my work
            </Button>
          </div>

          <p 
            className={`mt-8 text-sm text-accent-foreground/50 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            No forms with 20 fields. No "schedule a call to learn more." Just a direct line.
          </p>
        </div>
      </div>
    </section>
  )
}
