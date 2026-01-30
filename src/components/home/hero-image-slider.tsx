"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [ // imagenes de transición
    "https://res.cloudinary.com/dnwyno39r/image/upload/v1769815493/IMG_20260130_084408_pfjou6.jpg",
    "https://res.cloudinary.com/dnwyno39r/image/upload/v1769815585/IMG_20260130_105950_l7jdye.jpg",
    "https://res.cloudinary.com/dnwyno39r/image/upload/v1769815822/IMG_20260129_113447_s0yxnc.jpg",
    "https://res.cloudinary.com/dnwyno39r/image/upload/v1769815590/IMG_20260129_113415_mzebjh.jpg",
    "https://res.cloudinary.com/dnwyno39r/image/upload/v1769815591/IMG_20260129_113403_r2zybw.jpg",
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
        // Agregamos 'isolate' para crear un contexto de apilamiento nuevo
        <div className="relative h-[500px] w-full rounded-[2rem] shadow-2xl group bg-mapis-blue isolate">
        
        {images.map((src, index) => (
            <Image
            key={src}
            src={src}
            alt={`Imagen MAPIS ${index + 1}`}
            fill
            className={cn(
                // AQUÍ ESTÁ EL TRUCO: Le ponemos rounded a la imagen también
                "rounded-[2rem] object-cover transition-opacity duration-1000 ease-in-out", 
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            priority={index === 0}
            />
        ))}

        {/* Capa de Borde Estática (z-30) */}
        <div className="absolute inset-0 rounded-[2rem] border-8 border-white/20 z-30 pointer-events-none"></div>

        {/* Badge Flotante */}
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur text-mapis-blue p-4 rounded-xl shadow-lg max-w-[200px] z-20 animate-bounce-slow">
            <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-5 w-5 text-mapis-yellow" />
            <span className="font-bold text-sm">Excelencia</span>
            </div>
            <p className="text-xs text-gray-600">Reconocidos por nuestro alto nivel académico.</p>
        </div>
        
        {/* Capa oscura sutil (con rounded también para asegurar) */}
        <div className="absolute inset-0 bg-mapis-blue/10 z-10 pointer-events-none mix-blend-overlay rounded-[2rem]"></div>
        </div>
    )
}