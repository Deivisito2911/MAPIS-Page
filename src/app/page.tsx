import { HomeHero } from "@/components/home/hero"
import { StatsBar } from "@/components/home/stats"
import { EducationalOffer } from "@/components/home/educational-offer"
// 1. IMPORTAMOS EL COMPONENTE QUE FALTABA
import { SelectionsShowcase } from "@/components/home/selections-showcase" 
import { AboutSummary } from "@/components/home/about-summary"
import { EventsCarousel } from "@/components/home/events-carousel"
import { CallToAction } from "@/components/home/cta"
import { FadeIn } from "@/components/animations/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <StatsBar />
      <EducationalOffer />

      {/* 2. AQUÍ AGREGAMOS EL CARRUSEL DE SELECCIONES */}
      <SelectionsShowcase />
      
      {/* Carrusel con fondo cálido */}
      <FadeIn delay={200} className="py-20 bg-warm-cream">
        <EventsCarousel />
      </FadeIn>

      <AboutSummary />
      <CallToAction />
    </div>
  )
}