"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { Calendar, ChevronDown, ChevronUp, ExternalLink, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- DATOS DE EJEMPLO (MOCK DATA) ---
// Aquí luego conectarás tu CMS o base de datos.
const NOTICIAS = [
    {
        id: "1",
        titulo: "¡Se acerca la Semana MAPIS 2026!",
        fecha: "06 Feb, 2026",
        categoria: "Vida Escolar",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1770297767/logo_semana_mapis-1_dfrnnh.png",
        descripcionCorta: "Prepárate para la semana más emocionante del año. Las 6 alianzas están listas para competir.",
        descripcionLarga: "La Semana MAPIS es una tradición que une a toda nuestra comunidad. Este año contaremos con competencias deportivas, retos intelectuales y muestras artísticas donde Guayacanes, Frailejones, Iguanas, Chipi-Chipis, Cóndores y Truchas darán lo mejor de sí. ¡No olvides traer tu camisa del color de tu alianza!",
        enlaceExterno: "https://instagram.com/colegiomapis",
        textoEnlace: "Ver en Instagram"
    },
    {
        id: "2",
        titulo: "Inicio del Mundialito de Fútbol",
        fecha: "10 Feb, 2026",
        categoria: "Deportes",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769951828/fondo_logo_vu42iq.jpg", // Placeholder
        descripcionCorta: "El evento deportivo más esperado arranca este martes con el desfile inaugural.",
        descripcionLarga: "Invitamos a todos los padres y representantes a acompañarnos en la inauguración del Mundialito MAPIS 2026. Veremos desfilar a nuestros futuros campeones en una jornada llena de energía y pasión por el deporte. El primer partido será entre 4to y 5to grado.",
        enlaceExterno: "https://www.mapis.com.ve",
        textoEnlace: "Ver Cronograma"
    },
    {
        id: "3",
        titulo: "Jornada de Admisiones Abierta",
        fecha: "01 Feb, 2026",
        categoria: "Institucional",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769951195/mascota_cuerpo_completo_yyms95.png",
        descripcionCorta: "Ya puedes solicitar tu cupo para el año escolar 2025-2026.",
        descripcionLarga: "Queremos que formes parte de la familia MAPIS. Nuestro proceso de admisión ya está activo a través de nuestra página web. Conoce nuestro modelo educativo y agenda una visita guiada para descubrir por qué somos más que un colegio.",
        enlaceExterno: "/admisiones",
        textoEnlace: "Ir a Admisiones"
    }
]

export default function EventosPage() {
    // Estado para controlar qué noticia está expandida
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            
            {/* 1. HEADER */}
            <section className="bg-mapis-blue text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/logo.png')] bg-repeat bg-[length:300px]" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
                            Noticias y Eventos
                        </h1>
                        <p className="text-xl text-blue-100 font-medium">
                            Entérate de todo lo que sucede en nuestra comunidad educativa.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. LISTA DE NOTICIAS (Vertical) */}
            <div className="max-w-4xl mx-auto px-4 mt-12 space-y-8">
                {NOTICIAS.map((noticia, idx) => {
                    const isExpanded = expandedId === noticia.id

                    return (
                        <FadeIn key={noticia.id} delay={idx * 100}>
                            <article 
                                className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ${isExpanded ? 'shadow-xl ring-2 ring-mapis-blue/10' : 'hover:shadow-md'}`}
                            >
                                <div className="flex flex-col md:flex-row">
                                    
                                    {/* A. IMAGEN (Izquierda en Desktop, Arriba en Móvil) */}
                                    <div className="relative w-full md:w-1/3 h-56 md:h-auto md:min-h-[250px]">
                                        <Image 
                                            src={noticia.imagen} 
                                            alt={noticia.titulo}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase text-mapis-blue flex items-center gap-1 shadow-sm">
                                            <Tag className="w-3 h-3" />
                                            {noticia.categoria}
                                        </div>
                                    </div>

                                    {/* B. CONTENIDO */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                        
                                        {/* Fecha */}
                                        <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase mb-3">
                                            <Calendar className="w-4 h-4 text-mapis-orange" />
                                            {noticia.fecha}
                                        </div>

                                        {/* Título */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-mapis-blue mb-3 leading-tight">
                                            {noticia.titulo}
                                        </h2>

                                        {/* Descripción Corta */}
                                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                            {noticia.descripcionCorta}
                                        </p>

                                        {/* --- CONTENIDO EXPANDIBLE --- */}
                                        <div 
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="pt-4 border-t border-gray-100">
                                                <p className="text-gray-700 leading-relaxed mb-6">
                                                    {noticia.descripcionLarga}
                                                </p>
                                                
                                                {/* Botón Enlace Externo */}
                                                <Button asChild className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold w-full md:w-auto shadow-sm">
                                                    <Link href={noticia.enlaceExterno} target="_blank" rel="noopener noreferrer">
                                                        {noticia.textoEnlace} <ExternalLink className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Botón Expandir/Contraer */}
                                        <button 
                                            onClick={() => toggleExpand(noticia.id)}
                                            className="flex items-center gap-2 text-mapis-orange font-bold uppercase tracking-widest text-sm hover:text-orange-700 transition-colors group w-max"
                                        >
                                            {isExpanded ? (
                                                <>Leer menos <ChevronUp className="w-4 h-4" /></>
                                            ) : (
                                                <>Leer noticia completa <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
                                            )}
                                        </button>

                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    )
                })}
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
                    <Button asChild variant="outline" className="border-2 border-mapis-blue text-mapis-blue hover:bg-mapis-blue hover:text-white font-bold px-8 py-6 rounded-full transition-all">
                        <Link href="/">
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" /> Volver al Inicio
                        </Link>
                    </Button>
            </div>

        </div>
    )
}