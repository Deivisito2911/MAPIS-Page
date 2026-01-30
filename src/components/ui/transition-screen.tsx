"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function TransitionScreen() {
    const [show, setShow] = useState(true)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        // 1. Detectar si es la primera visita para controlar la DURACIÓN
        const hasVisited = sessionStorage.getItem("hasVisited")

        if (!hasVisited) {
        sessionStorage.setItem("hasVisited", "true")
        
        // Primera visita: Duración más larga (3s) para apreciar el efecto
        setTimeout(() => startExit(), 3000)
        } else {
        // Navegación normal: Duración corta (0.8s) para fluidez
        setTimeout(() => startExit(), 800)
        }

        // Función para iniciar el desvanecimiento
        const startExit = () => {
        setIsFading(true)
        setTimeout(() => setShow(false), 500) // Espera a que termine el fade-out
        }
    }, [])

    if (!show) return null

    return (
        <div
        className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500",
            // Fondo Cálido
            "bg-warm-cream", 
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        >
            {/* Decoración de Fondo (Círculo sutil) */}
            <div className="absolute w-[500px] h-[500px] bg-mapis-yellow/20 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10 flex flex-col items-center">
                <div className={cn(
                    "relative w-48 h-48 md:w-64 md:h-64 transition-transform",
                    "animate-heartbeat" // <--- AHORA SIEMPRE PALPITA
                )}>
                    <Image 
                        src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769776600/somo_mapis_redimensionado_cvugmc.png" 
                        alt="Somos MAPIS" 
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}