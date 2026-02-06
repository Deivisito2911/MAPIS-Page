"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HeroImageSlider } from "@/components/home/hero-image-slider"

export function HomeHero() {
    const [showBubble, setShowBubble] = useState(false)

    return (
        // 1. CONTENEDOR PRINCIPAL
        <div className="relative bg-mapis-blue min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
            
            {/* --- CAPA DE FONDO --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image 
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769951828/fondo_logo_vu42iq.jpg" 
                    alt="Fondo Institucional MAPIS"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-mapis-blue/20" /> 
                <div className="absolute inset-0 bg-gradient-to-r from-mapis-blue/95 via-mapis-blue/70 to-transparent lg:w-3/4" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mapis-blue to-transparent" />
            </div>

            {/* --- CONTENIDO DEL HERO --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA */}
                    <FadeIn delay={200} className="space-y-8 relative z-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-mapis-yellow border border-mapis-yellow/30 text-sm font-bold backdrop-blur-md shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-mapis-yellow mr-3 animate-pulse shadow-[0_0_10px_#FEBF0F]" />
                            INSCRIPCIONES ABIERTAS 2025-2026
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-xl tracking-tight">
                            17 AÑOS FORMANDO CIUDADANOS <span className="text-mapis-yellow relative inline-block">
                                EJEMPLARES
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-mapis-orange opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed font-medium drop-shadow-md">
                            En la U.E. Mariano Picón Salas, cultivamos una mentalidad de crecimiento, curiosidad y un compromiso inquebrantable con la excelencia académica y humana.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-0">
                            <Button asChild size="xl" className="bg-mapis-orange text-white hover:bg-orange-600 font-bold shadow-lg shadow-orange-900/20 transition-all hover:scale-105 hover:-translate-y-1 text-lg px-8 h-14">
                                <Link href="/admisiones">
                                    Admisiones <ArrowRight className="ml-2 h-6 w-6" />
                                </Link>
                            </Button>
                            <Button asChild size="xl" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-bold bg-transparent transition-all hover:scale-105 text-lg h-14 px-8">
                                <Link href="/academico/modelo-educativo">Nuestro Modelo</Link>
                            </Button>
                        </div>
                    </FadeIn>

                    {/* COLUMNA DERECHA: Slider */}
                    <FadeIn delay={400} direction="left" className="relative hidden lg:block h-[500px]">
                        <HeroImageSlider />
                    </FadeIn>
                </div>
            </div>

            {/* --- MASCOTA FLOTANTE INTERACTIVA --- */}
            <div 
                className="absolute bottom-0 -right-4 md:right-4 lg:right-[10%] z-20 block group cursor-pointer"
                onClick={() => setShowBubble(!showBubble)} 
            >
                 
                 {/* Globo de Texto */}
                 {/* CORRECCIÓN: Eliminado 'md:right-auto' para evitar conflicto CSS */}
                 <div className={`
                    absolute 
                    -top-12 right-12 
                    md:-top-16 md:-right-6
                    
                    bg-white text-mapis-blue text-sm font-extrabold px-4 py-2 
                    
                    rounded-2xl rounded-br-none md:rounded-br-2xl md:rounded-bl-none
                    
                    shadow-xl border-2 border-mapis-orange 
                    transition-all duration-300 transform 
                    origin-bottom-right md:origin-bottom-left
                    
                    ${showBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'} 
                    md:opacity-0 md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:translate-y-0
                    
                    z-30 whitespace-nowrap
                 `}>
                    <span className="md:hidden">Bienvenido</span>
                    <span className="hidden md:inline">¡Hola! Bienvenidos a MAPIS 👋</span>
                 </div>

                 {/* Imagen Mascota */}
                 <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-80 transition-transform duration-300 hover:-translate-y-4 hover:scale-105 active:scale-95">
                     <Image 
                        src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769951195/mascota_cuerpo_completo_yyms95.png" 
                        alt="Mascota MAPIS" 
                        fill
                        className="object-contain drop-shadow-2xl filter brightness-105"
                        priority
                     />
                 </div>
            </div>

        </div>
    )
}