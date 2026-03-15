"use client"

import Link from "next/link"
import { ArrowUpRight, ShoppingCart, BarChart3, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "NovaTech E-commerce",
    category: "Website & Automation",
    description: "Plataforma completa de e-commerce para uma empresa de tecnologia em crescimento. Inclui sistema de gestao de pedidos automatizado, integracao com gateways de pagamento, e painel administrativo em tempo real. Resultou em 40% de reducao no tempo de processamento de pedidos.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Webhooks"],
    icon: ShoppingCart,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "FinDash Analytics",
    category: "Web Application",
    description: "Dashboard de analytics financeiros com visualizacoes em tempo real, gerenciamento de usuarios multi-tenant, e pipelines de relatorios automatizados. Sistema processa mais de 50.000 transacoes diarias com latencia sub-segundo.",
    tags: ["React", "Node.js", "Redis", "Charts"],
    icon: BarChart3,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "AI Support Agent",
    category: "AI Infrastructure",
    description: "Assistente de IA personalizado integrado com ferramentas internas da empresa, automatizando suporte ao cliente e processamento de dados. Reduziu tempo de resposta em 65% e liberou a equipe para tarefas de maior valor.",
    tags: ["OpenAI", "Python", "RAG", "API Integration"],
    icon: Bot,
    color: "bg-primary/10 text-primary",
  },
]

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

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
        
        <div ref={projectsRef} className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-background border border-border rounded-lg overflow-hidden transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-lg ${
                projectsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-[1fr,2fr] gap-6 p-6 lg:p-8">
                {/* Project Visual */}
                <div className="aspect-video lg:aspect-[4/3] bg-muted rounded-md overflow-hidden relative">
                  <div className="w-full h-full bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-xl ${project.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <project.icon className="w-10 h-10" />
                    </div>
                  </div>
                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-border">
                    <span className="text-sm font-bold text-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-primary mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
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
                    <Link href="#">
                      View Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
