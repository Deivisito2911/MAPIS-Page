"use client"

import { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { Heart, Users, Star, Shield, Zap, Target } from "lucide-react" // Usamos estos por mientras llegan los de la diseñadora

const VALORES = [
    { 
        id: 1, 
        titulo: "Excelencia", 
        icon: Star, 
        descripcion: "Buscamos la calidad superior en cada actividad académica y humana, superando las expectativas día a día." 
    },
    { 
        id: 2, 
        titulo: "Integridad", 
        icon: Shield, 
        descripcion: "Actuamos con honestidad, transparencia y coherencia entre lo que decimos y hacemos." 
    },
    { 
        id: 3, 
        titulo: "Innovación", 
        icon: Zap, 
        descripcion: "Abrazamos el cambio y la tecnología como herramientas para potenciar el aprendizaje." 
    },
    { 
        id: 4, 
        titulo: "Respeto", 
        icon: Users, 
        descripcion: "Valoramos la diversidad y fomentamos un trato digno para todos los miembros de la comunidad." 
    },
    { 
        id: 5, 
        titulo: "Compromiso", 
        icon: Heart, 
        descripcion: "Nos entregamos con pasión a la formación de ciudadanos ejemplares para Venezuela." 
    },
    { 
        id: 6, 
        titulo: "Liderazgo", 
        icon: Target, 
        descripcion: "Formamos líderes capaces de influir positivamente en su entorno y generar cambios." 
    },
]

    export function ValuesSection() {
    // Estado para saber cuál valor está seleccionado
    const [activeValue, setActiveValue] = useState<number | null>(null)

    return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-mapis-blue uppercase mb-4">Valores que nos unen</h2>
            <p className="text-gray-600 !text-center">Haz clic en cada valor para descubrir su significado</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {VALORES.map((valor, idx) => (
                <FadeIn key={valor.id} delay={idx * 100}>
                <div 
                    onClick={() => setActiveValue(activeValue === valor.id ? null : valor.id)}
                    className={`
                    cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 group
                    ${activeValue === valor.id 
                        ? 'bg-mapis-blue text-white border-mapis-blue shadow-xl scale-105 z-10' 
                        : 'bg-white text-gray-600 border-gray-100 hover:border-mapis-yellow hover:shadow-md'}
                    `}
                >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                    <valor.icon className={`w-10 h-10 mb-4 transition-colors ${activeValue === valor.id ? 'text-mapis-yellow' : 'text-mapis-blue'}`} />
                    
                    <h3 className={`text-xl font-bold uppercase mb-2 ${activeValue === valor.id ? 'text-white' : 'text-gray-800'}`}>
                        {valor.titulo}
                    </h3>

                    {/* Descripción Desplegable */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeValue === valor.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <p className={`text-sm leading-relaxed ${activeValue === valor.id ? 'text-blue-100' : 'text-gray-500'}`}>
                        {valor.descripcion}
                        </p>
                    </div>

                    {/* Indicador visual si está cerrado */}
                    {activeValue !== valor.id && (
                        <span className="text-xs text-mapis-orange font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        + Ver más
                        </span>
                    )}
                    </div>
                </div>
                </FadeIn>
            ))}
            </div>
        </div>
        </section>
    )
}