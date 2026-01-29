"use client"

import { Bell, CalendarDays } from "lucide-react"

export function AnnouncementBar() {
    // AQUÍ EDITAS LOS ANUNCIOS DE LA SEMANA
    const anuncios = [
        "📅 Viernes 30/01 Fun Friday: Medias Locas",
        "⚽ Jueves 29/01 Evento MAPIS MUN",
        "📢 Coffe Talks de I y II Etapa"
    ]

    return (
        <div className="bg-mapis-blue text-white overflow-hidden py-2 relative z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
            
            {/* Etiqueta Fija "LO NUEVO" */}
            <div className="flex-shrink-0 bg-mapis-yellow text-mapis-blue text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <Bell className="w-3 h-3" />
            <span>AVISOS</span>
            </div>

            {/* Contenedor del Texto Deslizante (Marquee) */}
            <div className="flex-1 overflow-hidden relative h-6">
            <div className="absolute whitespace-nowrap animate-marquee flex gap-16 items-center h-full">
                {/* Repetimos los anuncios para el efecto infinito */}
                {[...anuncios, ...anuncios].map((anuncio, index) => (
                <span key={index} className="text-sm font-medium flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-mapis-yellow/80" />
                    {anuncio}
                </span>
                ))}
            </div>
            </div>

        </div>

        {/* Estilos de Animación (Tailwind Arbitrary Values) */}
        <style jsx>{`
            .animate-marquee {
            animation: marquee 25s linear infinite;
            }
            @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }
            /* Pausar al pasar el mouse para leer mejor */
            .animate-marquee:hover {
            animation-play-state: paused;
            }
        `}</style>
        </div>
    )
}