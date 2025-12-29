"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        // Agregamos rootMargin para que empiece a cargar un poco antes de que el usuario llegue
        rootMargin: "-50px 0px", 
    })

    const directionClasses = {
        up: "animate-in fade-in slide-in-from-bottom-8",
        down: "animate-in fade-in slide-in-from-top-8",
        left: "animate-in fade-in slide-in-from-right-8",
        right: "animate-in fade-in slide-in-from-left-8",
        none: "animate-in fade-in",
    }

    return (
        <div
            ref={ref}
            className={cn(
                // Eliminamos transition-all para evitar conflictos
                // Usamos 'duration-700' que tailwindcss-animate entiende para la animación
                "duration-700 fill-mode-forwards",
                inView ? directionClasses[direction] : "invisible", // Usamos invisible en lugar de opacity-0 manual
                className
            )}
            style={{ 
                // Aplicamos el delay solo a la animación
                animationDelay: `${delay}ms`, 
                animationFillMode: 'both' 
            }}
        >
            {children}
        </div>
    )
}