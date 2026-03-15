import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { Differentials } from "@/components/differentials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Process />
      <Projects />
      <Differentials />
      <CTA />
      <Footer />
    </main>
  )
}
