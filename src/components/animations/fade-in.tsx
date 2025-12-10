"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number // Retraso opcional para efectos en cascada
    direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  // useInView detecta cuando el elemento entra en la pantalla
  // triggerOnce: true asegura que la animación solo ocurra la primera vez que se ve
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    })

    // Definimos las animaciones de entrada basadas en tailwindcss-animate
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
        // Si inView es true, aplicamos la clase de animación. Si no, lo mantenemos invisible (opacity-0)
        className={cn(
            "transition-all duration-700 ease-out",
            inView ? directionClasses[direction] : "opacity-0 translate-y-8", // Estado inicial: invisible y desplazado
            className
        )}
        style={{ animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` }}
        >
        {children}
        </div>
    )
}