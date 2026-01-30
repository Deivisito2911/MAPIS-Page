"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HeroImageSlider } from "@/components/home/hero-image-slider"

export function HomeHero() {
    return (
        // 1. QUITAMOS 'overflow-hidden' del contenedor principal para que la mascota no se corte si asoma
        // 2. Usamos 'bg-mapis-blue' aquí como base
        <div className="relative bg-mapis-blue">
            
            {/* --- CAPA DE FONDO (Aquí sí usamos overflow-hidden) --- */}
            {/* Esta capa contiene el patrón y los gradientes. Al estar separada, no afecta a la mascota */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Patrón de Logos (Marca de Agua) */}
                <div className="absolute inset-0 bg-mapis-pattern opacity-100" />
                
                {/* Gradientes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/90 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <FadeIn direction="none" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* TEXTO Y BOTONES */}
                    <FadeIn delay={200} className="space-y-8 relative">
                         {/* Badge */}
                         <div className="inline-flex items-center px-3 py-1 rounded-full bg-mapis-yellow/20 text-mapis-yellow border border-mapis-yellow/30 text-sm font-medium backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-mapis-yellow mr-2 animate-pulse" />
                            Inscripciones Abiertas 2025-2026
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                            17 años Formando Ciudadanos <span className="text-mapis-yellow">Ejemplares</span>
                        </h1>

                        <p className="text-lg text-blue-100 max-w-xl leading-relaxed font-medium drop-shadow-md">
                            En la U.E. Mariano Picón Salas, cultivamos una mentalidad de crecimiento, curiosidad y un compromiso inquebrantable con la excelencia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
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

                    {/* SLIDER DE IMÁGENES */}
                    <FadeIn delay={400} direction="left" className="relative hidden lg:block h-full min-h-[400px]">
                        <HeroImageSlider />
                    </FadeIn>
                </div>

                {/* --- MASCOTA FLOTANTE (Ahora dentro del contenedor relativo pero fuera del grid) --- */}
                {/* Ajusté la posición a 'bottom-0' exacto para que se apoye en la línea del suelo */}
                <div className="absolute bottom-0 right-4 lg:right-0 lg:translate-x-8 z-20 w-32 lg:w-48 hidden md:block transition-transform hover:-translate-y-2 duration-300 cursor-pointer group">
                    {/* Globo de Texto */}
                    <div className="absolute -top-12 -right-4 bg-white text-mapis-blue text-xs font-extrabold px-4 py-2 rounded-t-xl rounded-bl-xl shadow-xl animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30">
                        ¡Hola! 👋
                    </div>

                    <Image 
                        src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769779371/images-removebg-preview_zdqe1f.png" 
                        alt="Mascota MAPIS Saludando" 
                        width={300} 
                        height={300} 
                        className="object-contain drop-shadow-2xl filter brightness-110"
                        priority
                    />
                </div>
            </FadeIn>
        </div>
    )
}