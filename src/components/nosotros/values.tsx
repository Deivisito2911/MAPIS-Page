"use client"

import Image from "next/image" // Importamos Image de Next.js
import { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"

const VALORES = [
    { 
        id: 1, 
        titulo: "Excelencia", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538531/excelencia_coxid3.jpg", // <--- PEGA AQUÍ EL LINK DEL ICONO
        descripcion: "Buscamos la calidad superior en cada actividad académica y humana, superando las expectativas día a día." 
    },
    { 
        id: 2, 
        titulo: "Integridad", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538481/integridad_cuwmhu.jpg", 
        descripcion: "Actuamos con honestidad, transparencia y coherencia entre lo que decimos y hacemos." 
    },
    { 
        id: 3, 
        titulo: "Innovación", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538478/innovacion_dqwnyi.jpg", // <--- PEGA AQUÍ EL LINK DEL ICONO
        descripcion: "Abrazamos el cambio y la tecnología como herramientas para potenciar el aprendizaje." 
    },
    { 
        id: 4, 
        titulo: "Respeto", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538495/respeto_xf9u9u.jpg", // <--- PEGA AQUÍ EL LINK DEL ICONO
        descripcion: "Valoramos la diversidad y fomentamos un trato digno para todos los miembros de la comunidad." 
    },
    { 
        id: 5, 
        titulo: "Compromiso", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538515/compromiso_ov8utq.jpg", // <--- PEGA AQUÍ EL LINK DEL ICONO
        descripcion: "Nos entregamos con pasión a la formación de ciudadanos ejemplares para Venezuela." 
    },
    { 
        id: 6, 
        titulo: "Liderazgo", 
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538484/liderazgo_jalkzj.jpg", // <--- PEGA AQUÍ EL LINK DEL ICONO
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
                    
                    {/* --- CONTENEDOR DEL ICONO CIRCULAR --- */}
                    <div className={`
                        relative w-14 h-14 mb-4 rounded-full overflow-hidden shadow-sm flex-shrink-0 
                        transition-transform duration-300 ${activeValue === valor.id ? 'scale-110 shadow-lg' : 'group-hover:scale-110'}
                    `}>
                        <Image
                            src={valor.iconImage}
                            alt={`Icono ${valor.titulo}`}
                            fill
                            className="object-cover scale-110" // object-cover y scale-110 aseguran que la imagen cuadrada llene el círculo
                        />
                    </div>
                    {/* -------------------------------------- */}
                    
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