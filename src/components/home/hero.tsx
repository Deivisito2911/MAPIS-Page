"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HeroImageSlider } from "@/components/home/hero-image-slider"

export function HomeHero() {
    return (
        <FadeIn direction="none" className="relative bg-mapis-blue text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={200} className="space-y-8">
                {/* Colores originales restaurados en el badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-mapis-yellow/20 text-mapis-yellow border border-mapis-yellow/30 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-mapis-yellow mr-2 animate-pulse" />
                Inscripciones Abiertas 2025-2026
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Formando el futuro con <span className="text-mapis-yellow">Excelencia</span>
                </h1>

                <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
                En la U.E. Mariano Picón Salas, cultivamos una mentalidad de crecimiento, curiosidad y un compromiso inquebrantable con la excelencia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                {/* Botones con hovers fuertes originales */}
                <Button asChild size="xl" className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-500 font-bold shadow-lg transition-transform hover:scale-105">
                    <Link href="/admisiones">
                    Admisiones <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white/10 font-medium bg-transparent transition-transform hover:scale-105">
                    <Link href="/academico/modelo-educativo">Nuestro Modelo</Link>
                </Button>
                </div>
            </FadeIn>

            {/* Slider */}
            <FadeIn delay={400} direction="left" className="relative hidden lg:block h-full">
                <HeroImageSlider />
            </FadeIn>
            </div>
        </div>
        </FadeIn>
    )
}