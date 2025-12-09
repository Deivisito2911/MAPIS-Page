"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Calendar, ChevronLeft, ChevronRight, Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos de eventos actualizados con la noticia de Robótica
const EVENTS = [
    {
        title: "Mapis Robotic Team: 3er Lugar Nacional",
        category: "Robótica",
        date: "Ene 2025",
        image: "/kids-learning.jpg", // Placeholder ideal para robótica
        description: "3er Lugar en la Categoría Aventura, Sigue Líneas en la Final Nacional de Robótica Creativa.",
        fullDescription: "Recordamos la exitosa participación del Mapis Robotic Team en la final nacional de la Olimpiada de Robótica Creativa, organizada por el Ministerio de Ciencia y Tecnología (MinCyT), logrando el 🥉 tercer lugar en la Categoría Aventura, Sigue Líneas. ¡Ustedes son un orgullo para nuestro colegio y el estado Nueva Esparta! #somosmapis #orgullomapis #innovacioneducativa",
        instagramUrl: "https://www.instagram.com/reel/DOeW7J9jwTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
    },
    {
        title: "Festival de Navidad MAPIS",
        category: "Cultura",
        date: "01 Dic, 2024",
        image: "/happy-students-in-school-uniforms-studying.jpg",
        description: "Una noche mágica llena de música, teatro y tradiciones navideñas.",
        fullDescription: "Nuestro tradicional encendido de luces estuvo acompañado por el coro de voces blancas y la obra de teatro 'Navidad en Margarita', escrita y dirigida por nuestros docentes de cultura. Más de 500 padres asistieron al evento.",
        instagramUrl: "https://instagram.com/colegiomapis"
    }
]

export function EventsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
    const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative max-w-7xl mx-auto px-4">
            {/* Cabecera del Carrusel */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <span className="text-mapis-yellow font-bold tracking-widest uppercase text-sm">Actualidad</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mt-2">Eventos y Logros</h2>
                </div>
                {/* Botones de navegación (Escritorio) */}
                <div className="hidden md:flex gap-2">
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={scrollPrev} 
                        className="rounded-full hover:bg-mapis-blue hover:text-white border-gray-300"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={scrollNext} 
                        className="rounded-full hover:bg-mapis-blue hover:text-white border-gray-300"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Carrusel */}
            <div className="overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
                <div className="flex -ml-6">
                    {EVENTS.map((event, index) => (
                    <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-6 min-w-0">
                        <div 
                            onClick={() => setSelectedEvent(event)}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col group cursor-pointer"
                        >
                            {/* Imagen */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-mapis-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {event.category}
                                </div>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Contenido */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-gray-400 text-sm mb-3 gap-4">
                                    <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-mapis-yellow" />
                                    <span>{event.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mapis-blue transition-colors line-clamp-2">
                                {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                {event.description}
                                </p>
                                <div className="pt-4 border-t border-gray-100">
                                    <span className="text-mapis-blue font-semibold text-sm flex items-center gap-2 hover:underline">
                                        Ver detalles <ChevronRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
            {/* Botones móviles (se muestran abajo en pantallas pequeñas) */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
                    <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
                    <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
                    <ChevronRight className="h-5 w-5" />
                    </Button>
            </div> 

            {/* MODAL DE DETALLE (POPUP) */}
            {selectedEvent && (
            <div 
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setSelectedEvent(null)}
            >
                <div 
                    className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Botón Cerrar */}
                    <button 
                        onClick={() => setSelectedEvent(null)}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {/* Imagen del Modal (Mitad Izquierda/Arriba) */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src={selectedEvent.image}
                            alt={selectedEvent.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <span className="bg-mapis-yellow text-mapis-blue text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                                    {selectedEvent.category}
                                </span>
                                <p className="font-medium flex items-center gap-2 text-sm opacity-90">
                                    <Calendar className="h-4 w-4" /> {selectedEvent.date}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Información (Mitad Derecha/Abajo) */}
                    <div className="p-8 w-full md:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-bold text-mapis-blue mb-4 leading-tight">
                            {selectedEvent.title}
                        </h3>
                        
                        <div className="prose text-gray-600 text-sm leading-relaxed flex-grow overflow-y-auto max-h-[300px] pr-2">
                            <p>{selectedEvent.fullDescription}</p>
                        </div>

                        {/* Botones de Acción */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                            {selectedEvent.instagramUrl && (
                                <a 
                                    href={selectedEvent.instagramUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white gap-2">
                                        <Instagram className="h-4 w-4" />
                                        Ver fotos en Instagram
                                    </Button>
                                </a>
                            )}
                            <Button 
                                onClick={() => setSelectedEvent(null)}
                                variant="outline"
                                className="w-full border-gray-200"
                            >
                                Cerrar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            )}   
        </div>
    )
}