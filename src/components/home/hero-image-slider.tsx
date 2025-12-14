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
        // 1. Quitamos la clase 'border-8' del contenedor principal.
        <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group bg-mapis-blue">
        
        {/* Imágenes rotativas */}
        {images.map((src, index) => (
            <Image
            key={src}
            src={src}
            alt={`Imagen MAPIS ${index + 1}`}
            fill
            className={cn(
                "object-cover transition-opacity duration-1000 ease-in-out",
                // Aseguramos que la imagen saliente se mantenga visible hasta que la entrante esté lista
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            priority={index === 0}
            />
        ))}

        {/* 2. NUEVO: Capa de Borde Estática (La solución al parpadeo)
            Esta capa está fija encima de todo (z-30) y solo dibuja el borde. */}
        <div className="absolute inset-0 rounded-[2rem] border-8 border-white/20 z-30 pointer-events-none"></div>

        {/* Badge Flotante (Colores originales restaurados) */}
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur text-mapis-blue p-4 rounded-xl shadow-lg max-w-[200px] z-20 animate-bounce-slow">
            <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-5 w-5 text-mapis-yellow" />
            <span className="font-bold text-sm">Excelencia</span>
            </div>
            <p className="text-xs text-gray-600">Reconocidos por nuestro alto nivel académico.</p>
        </div>
        </div>
    )
}