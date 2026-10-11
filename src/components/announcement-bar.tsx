"use client"

import { Bell, CalendarDays } from "lucide-react"

export function AnnouncementBar() {
    const anuncios = [
        "👨‍🍳 Viernes 16/10 Final III Masterchef Challenge MAPIS",
        "🌟 22 y 23/10 Show & Tell Week",
        "🚨 Miércoles 28/10 Simulacro de Desalojo Institucional",
        "🎭 Viernes 30/10 Fun Friday: Freakout Friday",
        "📝 26 al 30/10 Unit 1 Assessment Week (Elementary)"
    ]

    return (
        // 1. COLOR AZUL Y FUENTES
        // Usamos 'bg-mapis-blue'
        <div className="bg-mapis-blue text-white overflow-hidden py-2 relative z-40 border-b border-blue-800">
            <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
                
                {/* 2. ETIQUETA "AVISOS" */}
                {/* Fuente 'font-heading' (Bebas) y color Amarillo para resaltar sobre el azul */}
                <div className="flex-shrink-0 bg-mapis-yellow text-mapis-blue px-3 py-1 rounded-sm flex items-center gap-2 shadow-sm">
                    <Bell className="w-3.5 h-3.5 fill-current animate-pulse" />
                    <span className="font-heading tracking-wider text-sm pt-0.5">AVISOS</span>
                </div>

                {/* 3. TEXTO DESLIZANTE */}
                {/* Fuente 'font-heading' para que coincida con el estilo del sitio */}
                <div className="flex-1 overflow-hidden relative h-6">
                    <div className="absolute whitespace-nowrap animate-marquee flex gap-16 items-center h-full">
                        {[...anuncios, ...anuncios, ...anuncios].map((anuncio, index) => (
                            <span key={index} className="font-heading tracking-wide text-sm flex items-center gap-2 uppercase text-blue-100">
                                <CalendarDays className="w-4 h-4 text-mapis-yellow" />
                                {anuncio}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}