"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const projects = [
  {
    title: "Aquazen Spas",
    category: "Website & Automation",
    description: "Plataforma completa de e-commerce para uma empresa de tecnologia em crescimento. Inclui sistema de gestao de pedidos automatizado, integracao com gateways de pagamento, e painel administrativo em tempo real. Resultou em 40% de reducao no tempo de processamento de pedidos.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Webhooks"],
    image: "https://media.discordapp.net/attachments/662375257591513088/1482816525231456438/image.png?ex=69b85401&is=69b70281&hm=d3e5c7a744b1e88fbd0d633bc200c28bf40477297463fab68ebaea7c2048cfba&=&format=webp&quality=lossless&width=774&height=527",
  },
  {
    title: "Alegria Pet Care",
    category: "Website",
    description: "Institutional website for a pet care company, featuring a modern design, responsive layout, and easy-to-navigate interface. The site includes sections for services, team, and contact information, resulting in a 25% increase in online inquiries.",
    tags: ["Landing Page", "Website"],
    image: "/projects/pet.png",
  },
  {
    title: "AI Support Agent",
    category: "AI Infrastructure",
    description: "AI Support Agent that integrates with OpenAI's API to provide real-time customer support. The agent uses Retrieval-Augmented Generation (RAG) techniques to access a knowledge base and generate accurate responses, resulting in a 30% reduction in response time and improved customer satisfaction.",
    tags: ["Sales", "CRM", "AI", "Integration"],
    image: "/projects/dashboard.png",
  },
  {
    title: "Electrical Engineering Company",
    category: "Website",
    description: "Institutional website for an electrical engineering company, featuring a modern design, responsive layout, and easy-to-navigate interface. The site includes sections for services, team, and contact information, resulting in a 25% increase in online inquiries.",
    tags: ["Landing Page", "Website"],
    image: "/projects/screen.png",
  },
    {
    title: "SolarTech Energy",
    category: "Website",
    description: "Institutional website for a Solar Energy Company, with a modern look and a calculator that simulates the customer's savings over the years if they buy solar panels",
    tags: ["Calculation", "Website", "Economic Simulation"],
    image: "/projects/solar.png",
  },
]

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="work" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Selected Work
          </h2>
        </div>
        
        <div 
          ref={carouselRef}
          className={`transition-all duration-700 ease-out ${
            carouselVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="m-0">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="pl-0">
                  <div className="group relative bg-background border border-border rounded-lg overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8 items-center">
                      {/* Project Image */}
                      <div className="aspect-video lg:aspect-4/3 relative overflow-hidden rounded-md bg-muted shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-primary mb-3">
                          {project.category}
                        </span>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Button variant="outline" className="w-fit group/btn" asChild>
                          <Link href="wa.me/5541987144723" target="_blank" rel="noopener noreferrer">
                            Contact Me
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />

            {/* Dots Indicator - Mobile Friendly */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className="h-2 rounded-full transition-all duration-300 bg-muted hover:bg-primary/50"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
