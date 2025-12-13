import { Metadata } from "next"
import { TeamCarousel } from "@/components/nosotros/team-carrusel"
import { FadeIn } from "@/components/animations/fade-in"

// Importaciones de los nuevos componentes
import { AboutHero } from "@/components/nosotros/hero"
import { HistorySection } from "@/components/nosotros/history"
import { IdentitySection } from "@/components/nosotros/identity"
import { ValuesSection } from "@/components/nosotros/values"
import { ProfilesSection } from "@/components/nosotros/profiles"
import { AnthemSection } from "@/components/nosotros/anthem"
import { LocationSection } from "@/components/nosotros/location"

export const metadata: Metadata = {
    title: "Nosotros | U.E. Mariano Picón Salas",
    description: "Conoce nuestra historia, cultura y los perfiles que definen a la familia MAPIS.",
}

export default function NosotrosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-cream">
        
        {/* 1. Hero */}
        <AboutHero />

        {/* 2. Historia */}
        <HistorySection />

        {/* 3. Identidad (Propósito, Misión, Visión) */}
        <IdentitySection />

        {/* 4. Valores */}
        <ValuesSection />

        {/* 5. Perfiles (Docente / Alumno) */}
        <ProfilesSection />

        {/* 6. Equipo Directivo */}
        <section className="py-20 bg-warm-cream">
            <FadeIn className="text-center mb-12 px-4">
            <h2 className="text-3xl font-bold text-mapis-blue mb-4">Liderazgo que Inspira</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Profesionales guiando el camino hacia la excelencia.
            </p>
            </FadeIn>
            <TeamCarousel />
        </section>

        {/* 7. Himno */}
        <AnthemSection />

        {/* 8. Ubicación */}
        <LocationSection />

        </div>
    )
}