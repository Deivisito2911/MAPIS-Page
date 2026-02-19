"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Calendar, ChevronLeft, ChevronRight, Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const EVENTS = [
    {
        title: "Mapis Robotic Team: 3er Lugar Nacional",
        category: "Robótica",
        date: "Ene 2025",
        image: "/kids-learning.jpg", 
        description: "3er Lugar en la Categoría Aventura, Sigue Líneas en la Final Nacional de Robótica Creativa.",
        fullDescription: "Recordamos la exitosa participación del Mapis Robotic Team en la final nacional de la Olimpiada de Robótica Creativa, organizada por el Ministerio de Ciencia y Tecnología (MinCyT), logrando el 🥉 tercer lugar en la Categoría Aventura, Sigue Líneas. ¡Ustedes son un orgullo para nuestro colegio y el estado Nueva Esparta! #somosmapis #orgullomapis #innovacioneducativa",
        instagramUrl: "https://www.instagram.com/reel/DOeW7J9jwTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },{
        title: "Concierto navidad",
        category: "Cultura",
        date: "Dic 2024",
        image: "/happy-students-in-school-uniforms-studying.jpg", 
        description: "Una noche mágica llena de música, teatro y tradiciones navideñas.",
        fullDescription: "Nuestro tradicional encendido de luces estuvo acompañado por el coro de voces blancas y la obra de teatro 'Navidad en Margarita', escrita y dirigida por nuestros docentes de cultura. Más de 500 padres asistieron al evento.",
        instagramUrl: "https://instagram.com/colegiomapis"
    },
    {
        title: "Feria Científica 2024",
        category: "Académico",
        date: "15 Nov, 2024",
        image: "/kids-learning.jpg", 
        description: "Nuestros estudiantes presentaron proyectos innovadores de robótica y ecología.",
        fullDescription: "La Feria Científica de este año rompió récords de participación. Desde robots hechos con material reciclado hasta soluciones de energía solar, nuestros alumnos de Primaria y Bachillerato demostraron que el futuro está en buenas manos. El jurado estuvo compuesto por ingenieros de la UDO y Unimar.",
        instagramUrl: "https://instagram.com/colegiomapis"
    },
    {
        title: "Campeones Estadales de Futsal",
        category: "Deporte",
        date: "20 Oct, 2024",
        image: "/school-building-architecture-modern.jpg",
        description: "La selección Sub-15 trajo la copa a casa tras una final emocionante.",
        fullDescription: "En un partido cardíaco contra el Colegio Guayamurí, nuestra selección Sub-15 se impuso 3-2 en los penales. Este triunfo nos clasifica directamente a los nacionales escolares. ¡Orgullo MAPIS!",
        instagramUrl: "https://instagram.com/colegiomapis"
    }
]

export function EventsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", duration: 20 })
    const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        // 1. FONDO BEIGE BASE EN EL CONTENEDOR (Evita bordes vacíos)
        <section className="relative py-24 w-full overflow-hidden bg-[#Fdfbf7]"> 
            
            {/* 2. PATRÓN REPETITIVO (Súper ligero, no usa <Image> para evitar lag) */}
            <div 
                className="absolute inset-0 z-0 mix-blend-multiply opacity-50"
                style={{
                    // Pedimos la imagen en tamaño original (pequeña) y optimizada
                    backgroundImage: `url('https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto/v1771538547/fondo_pagina_web_BEIGE_xk6c1x.jpg')`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <span className="text-mapis-orange font-bold tracking-widest uppercase text-sm">Actualidad</span>
                        <h2 className="text-4xl md:text-5xl font-black text-mapis-blue mt-2 tracking-tight uppercase">Eventos y Logros</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full bg-white hover:bg-mapis-blue hover:text-white border-gray-200 shadow-sm transition-colors duration-200">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full bg-white hover:bg-mapis-blue hover:text-white border-gray-200 shadow-sm transition-colors duration-200">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
                    <div className="flex -ml-6">
                        {EVENTS.map((event, index) => (
                        <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-6 min-w-0">
                            <div 
                                onClick={() => setSelectedEvent(event)}
                                // CORRECCIÓN: Se eliminó bg-white/90 y backdrop-blur. Ahora es bg-white puro. Cero lag.
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col group cursor-pointer"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    {/* CORRECCIÓN: Eliminado blur del badge */}
                                    <div className="absolute top-4 left-4 z-10 bg-mapis-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                                        {event.category}
                                    </div>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimización de carga
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-mapis-blue/0 group-hover:bg-mapis-blue/5 transition-colors duration-300" />
                                </div>
                                
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="flex items-center text-gray-500 text-sm font-semibold mb-4 gap-2">
                                        <Calendar className="h-4 w-4 text-mapis-orange" />
                                        <span>{event.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mapis-blue transition-colors duration-200 line-clamp-2 leading-snug">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {event.description}
                                    </p>
                                    <div className="pt-4 border-t border-gray-100">
                                        <span className="text-mapis-orange font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                            Leer noticia <ChevronRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex md:hidden justify-center gap-4 mt-8">
                        <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full bg-white shadow-sm border-gray-200 h-12 w-12 transition-colors duration-200">
                            <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full bg-white shadow-sm border-gray-200 h-12 w-12 transition-colors duration-200">
                            <ChevronRight className="h-6 w-6 text-gray-600" />
                        </Button>
                </div> 

                {/* MODAL DE DETALLE (POPUP) */}
                {selectedEvent && (
                <div 
                    // CORRECCIÓN: Fondo negro puro con opacidad (bg-slate-900/95). Eliminado backdrop-blur-md que trababa el navegador al abrirlo.
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 animate-in fade-in duration-200"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div 
                        className="bg-white rounded-[2rem] max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col md:flex-row border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedEvent(null)}
                            // CORRECCIÓN: Botón simple, sin blur
                            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors duration-200 z-20"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                            <Image
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <span className="bg-mapis-yellow text-mapis-blue text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-sm">
                                        {selectedEvent.category}
                                    </span>
                                    <p className="font-semibold flex items-center gap-2 text-sm opacity-90">
                                        <Calendar className="h-4 w-4" /> {selectedEvent.date}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col bg-white">
                            <h3 className="text-2xl md:text-3xl font-black text-mapis-blue mb-6 leading-tight">
                                {selectedEvent.title}
                            </h3>
                            
                            <div className="text-gray-700 text-base leading-relaxed flex-grow overflow-y-auto max-h-[300px] pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                <p>{selectedEvent.fullDescription}</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                {selectedEvent.instagramUrl && (
                                    <a 
                                        href={selectedEvent.instagramUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold h-12 shadow-md transition-transform duration-200 hover:-translate-y-0.5 gap-2">
                                            <Instagram className="h-5 w-5" />
                                            Ver publicación
                                        </Button>
                                    </a>
                                )}
                                <Button 
                                    onClick={() => setSelectedEvent(null)}
                                    variant="outline"
                                    className="flex-1 border-gray-200 hover:bg-gray-50 font-bold h-12 text-gray-600 transition-colors duration-200"
                                >
                                    Cerrar ventana
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                )}   
            </div>
        </section>
    )
}