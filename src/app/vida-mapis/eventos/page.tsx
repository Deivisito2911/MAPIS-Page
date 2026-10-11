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
        titulo: "MAPIS ROBOTIC TEAM: 2do Lugar Nacional",
        fecha: "30 May, 2026",
        categoria: "Robótica",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1782932329/IMG-20260531-WA0107_gfp8lf.jpg",
        descripcionCorta: "El Mapis Robotic Team obtuvo el 2do lugar en la Olimpiada Regional de Robótica y clasificó a la Final Nacional por segundo año consecutivo.",
        descripcionLarga: "El Mapis Robotic Team obtuvo el 2do lugar en la Olimpiada Regional de Robótica, organizada por el Mincyt en Maturín, clasificando a la Final Nacional por segundo año consecutivo en la Competencia Sigue Líneas Creativas (Categoría Aventura). Felicitaciones a Arantza, Isabella y Adriel junto a sus preparadores Deivith y Lérida, y al equipo Mapis Mechatronic Team (Dhana, Dámaso y Martín) por ubicarse entre los 10 mejores.",
        enlaceExterno: "https://www.instagram.com/p/DY0yG4ZFrYA/?srtk=MzRlODBiNWFlZA==",
        textoEnlace: "Ver en Instagram"
    },
    {
        id: "2",
        titulo: "¡Caracas fue testigo de nuestra historia! SIMUN 2026 ✨",
        fecha: "17 May, 2026",
        categoria: "Cultura",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1791681016/702144565_18605250697024807_8934291634055523870_n_neyc42.webp",
        descripcionCorta: "Histórica participación de nuestra delegación MAPIS MUN en SIMUN 2026 en el Colegio San Ignacio de Loyola con destacados reconocimientos.",
        descripcionLarga: "Del 15 al 17 de mayo, la delegación MAPIS MUN brilló en el Colegio San Ignacio de Loyola (Caracas), obteniendo Mención Verbal para Mariam Maklad (CDH), Mención Honorífica para Sofía Clavijo (Corte) y Mejor Delegado para Isabella Escalona (Corte), junto al notable desempeño de toda la delegación y su Faculty Advisor Manuel Corcida.",
        enlaceExterno: "https://www.instagram.com/p/DYgR6iAMrR4/?psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        textoEnlace: "Ver en Instagram"
    },
    {
        id: "3",
        titulo: "¡Margarita se conecta con el futuro universitario! PDU UNIMET 🎓",
        fecha: "Abr 2026",
        categoria: "Académico",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1782932507/Screenshot_2026-07-01_150131_w2vybg.png",
        descripcionCorta: "Recibimos en la UE Mariano Picón Salas a estudiantes de Nueva Esparta para la Prueba de Ubicación (PDU) de la Universidad Metropolitana.",
        descripcionLarga: "Como colegio asociado a la UNIMET, fuimos sede para que estudiantes de 5to año de destacadas instituciones de la isla presentaran la Prueba de Ubicación (PDU) en áreas cuantitativa, verbal e inglés, reafirmando nuestro compromiso de ser el centro regional de referencia académica.",
        enlaceExterno: "https://www.instagram.com/p/DV3ky8_AD7c/?rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        textoEnlace: "Ver en Instagram"
    },
    {
        id: "4",
        titulo: "¡Mapis a la Vanguardia en Robótica! Medalla de Bronce 🥉🤖",
        fecha: "22 Mar, 2026",
        categoria: "Robótica",
        imagen: "https://res.cloudinary.com/dnwyno39r/image/upload/v1791681209/IMG-20260322-WA0181_g5gmx7.jpg",
        descripcionCorta: "Nuestras estudiantes hicieron historia obteniendo medalla de bronce en la Final Nacional del Robotics For Good Youth Challenge.",
        descripcionLarga: "Nuestras estudiantes Tiana, Ana Elvira, Miranda y Marinetti obtuvieron medalla de bronce en la Final Nacional del Robotics For Good Youth Challenge con su robot diseñado para procesos agrícolas, demostrando que el talento y el liderazgo femenino no tienen límites.",
        enlaceExterno: "https://www.instagram.com/reel/DX9wfDpSgLd/?srtk=MzRlODBiNWFlZA==",
        textoEnlace: "Ver en Instagram"
    }
]

const CATEGORIAS = ["Todas", "Robótica", "Cultura", "Académico"] as const

export default function EventosPage() {
    // Estado para categoría activa
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todas")
    // Estado para controlar qué noticia está expandida
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const noticiasFiltradas = categoriaSeleccionada === "Todas"
        ? NOTICIAS
        : NOTICIAS.filter(n => n.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase())

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
                        <p className="text-xl text-blue-100 font-medium !text-center">
                            Entérate de todo lo que sucede en nuestra comunidad educativa.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. FILTRO POR CATEGORÍAS */}
            <section className="max-w-4xl mx-auto px-4 mt-10">
                <FadeIn>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {CATEGORIAS.map((cat) => {
                            const isActive = categoriaSeleccionada === cat
                            const count = cat === "Todas" 
                                ? NOTICIAS.length 
                                : NOTICIAS.filter(n => n.categoria.toLowerCase() === cat.toLowerCase()).length

                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setCategoriaSeleccionada(cat)
                                        setExpandedId(null)
                                    }}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                                        isActive
                                            ? "bg-mapis-blue text-white shadow-md shadow-blue-900/20 scale-105"
                                            : "bg-white text-gray-600 hover:text-mapis-blue hover:border-mapis-blue/40 border border-gray-200"
                                    }`}
                                >
                                    <span>{cat}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </FadeIn>
            </section>

            {/* 3. LISTA DE NOTICIAS (Vertical) */}
            <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">
                {noticiasFiltradas.length === 0 ? (
                    <FadeIn>
                        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                            <p className="text-gray-500 font-medium">
                                No hay noticias disponibles en esta categoría por el momento.
                            </p>
                        </div>
                    </FadeIn>
                ) : (
                    noticiasFiltradas.map((noticia, idx) => {
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
                                            unoptimized
                                            sizes="(max-width: 768px) 100vw, 33vw"
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
                }))}
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