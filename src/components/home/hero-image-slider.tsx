"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
    "/happy-students-in-school-uniforms-studying.jpg",
    "/kids-learning.jpg",
    "/school-building-architecture-modern.jpg"
]

export function HeroImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        // 1. ELIMINADO: Ya no ponemos 'border-8' aquí para evitar el bug visual
        <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group bg-mapis-blue">
        
        {/* Imágenes del Slider */}
        {images.map((src, index) => (
            <Image
            key={src}
            src={src}
            alt={`Imagen MAPIS ${index + 1}`}
            fill
            className={cn(
                "object-cover transition-opacity duration-1000 ease-in-out",
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            priority={index === 0}
            />
        ))}

        {/* 2. SOLUCIÓN: Capa Estática del Borde (z-30) 
            Este div dibuja el borde POR ENCIMA de las fotos. 
            Al ser estático, nunca parpadea ni se corta durante la transición. */}
        <div className="absolute inset-0 rounded-[2rem] border-8 border-white/20 z-30 pointer-events-none"></div>

        {/* Badge Flotante */}
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur text-mapis-blue p-4 rounded-xl shadow-lg max-w-[200px] z-20 animate-bounce-slow">
            <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-5 w-5 text-mapis-yellow" />
            <span className="font-bold text-sm">Excelencia</span>
            </div>
            <p className="text-xs text-gray-600">Reconocidos por nuestro alto nivel académico.</p>
        </div>
        
        {/* Capa oscura sutil para que el texto resalte más */}
        <div className="absolute inset-0 bg-mapis-blue/10 z-10 pointer-events-none mix-blend-overlay"></div>
        </div>
    )
}