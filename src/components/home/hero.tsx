"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HeroImageSlider } from "@/components/home/hero-image-slider"

export function HomeHero() {
    return (
        // 1. CONTENEDOR PRINCIPAL
        <div className="relative bg-mapis-blue min-h-[600px] lg:min-h-[700px] flex items-center">
            
            {/* --- CAPA DE FONDO --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                
                {/* A. IMAGEN DE FONDO (Diseño Oficial) */}
                <Image 
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769951828/fondo_logo_vu42iq.jpg" 
                    alt="Fondo Institucional MAPIS"
                    fill
                    className="object-cover"
                    priority
                />

                {/* B. CAPAS DE LEGIBILIDAD (CORREGIDAS) */}
                
                {/* 1. Tinte azul muy suave general (20%) para unificar, sin tapar el diseño */}
                <div className="absolute inset-0 bg-mapis-blue/20" /> 

                {/* 2. Gradiente Lateral Izquierdo: Oscuro detrás del texto, transparente hacia la derecha */}
                {/* Esto es clave: Permite leer el título pero deja ver el logo de fondo a la derecha */}
                <div className="absolute inset-0 bg-gradient-to-r from-mapis-blue/95 via-mapis-blue/60 to-transparent lg:w-3/4" />

                {/* 3. Gradiente Inferior: Para suavizar la unión con la siguiente sección */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mapis-blue to-transparent" />
            </div>

            {/* --- CONTENIDO DEL HERO --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA */}
                    <FadeIn delay={200} className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-mapis-yellow border border-mapis-yellow/30 text-sm   backdrop-blur-md shadow-sm">
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

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Button asChild size="xl" className="bg-mapis-orange text-white hover:bg-orange-600   shadow-lg shadow-orange-900/20 transition-all hover:scale-105 hover:-translate-y-1 text-lg px-8 h-14">
                                <Link href="/admisiones">
                                    Admisiones <ArrowRight className="ml-2 h-6 w-6" />
                                </Link>
                            </Button>
                            <Button asChild size="xl" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white   bg-transparent transition-all hover:scale-105 text-lg h-14 px-8">
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

            {/* --- MASCOTA FLOTANTE --- */}
            <div className="absolute bottom-0 right-4 lg:right-[10%] z-20 hidden md:block group cursor-pointer">
                 {/* Globo de Texto */}
                    <div className="absolute -top-16 -right-6 bg-white text-mapis-blue text-sm font-extrabold px-6 py-3 rounded-2xl rounded-bl-none shadow-xl animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-bottom-left border-2 border-mapis-orange">
                        ¡Hola! Bienvenidos a MAPIS 👋
                    </div>

                    {/* Imagen Mascota */}
                    <div className="relative w-40 h-40 lg:w-56 lg:h-80 transition-transform duration-300 hover:-translate-y-4 hover:scale-105">
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