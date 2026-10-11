"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Calendar, ChevronLeft, ChevronRight, Instagram, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const EVENTS = [
    {
        title: "MAPIS ROBOTIC TEAM: 2do Lugar Nacional",
        category: "Robótica",
        date: "30 May, 2026",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1782932329/IMG-20260531-WA0107_gfp8lf.jpg", 
        description: "El Mapis Robotic Team obtuvo el 2do lugar en la Olimpiada Regional de Robótica y clasificó a la Final Nacional por segundo año consecutivo.",
        fullDescription: `🤖¡RUMBO A LA FINAL NACIONAL!

El Mapis Robotic Team obtuvo el 2do lugar en la Olimpiada Regional de Robótica, organizada por el Mincyt en la ciudad de Maturín, y clasificó a la Final Nacional por segundo año consecutivo! 🥈

El Equipo se midió ante los mejores de la Región Oriental en la Competencia Sigue Líneas Creativas, Categoría Aventura y ahora formará parte de la delegación del Oriente del país 💥

🎉 Felicidades para Arantza, Isabella y Adriel, junto a sus preparadores Deivith y Lérida.

Mención especial al equipo Mapis Mechatronic Team conformado por Dhana, Dámaso y Martín, por una extraordinaria participación que los llevó a ubicarse entre los 10 mejores equipos en la categoría desafío👏🏻👏🏻

Déjales un comentario de apoyo a estos cracks de la robótica🤖👇🏻

✈️Caracas, allá vamos!!!!`,
        instagramUrl: "https://www.instagram.com/p/DY0yG4ZFrYA/?srtk=MzRlODBiNWFlZA=="
    },
    {
        title: "¡Caracas fue testigo de nuestra historia! ✨",
        category: "Cultura",
        date: "17 May, 2026",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1791681016/702144565_18605250697024807_8934291634055523870_n_neyc42.webp", 
        description: "Histórica participación de nuestra delegación MAPIS MUN en SIMUN 2026 en el Colegio San Ignacio de Loyola con destacados reconocimientos.",
        fullDescription: `¡Caracas fue testigo de nuestra historia! ✨

El primer viaje académico siempre es un hito, pero lo vivido en SIMUN 2026 @sanignaciomun superó todas las expectativas. Del 15 al 17 de mayo, la delegación se trasladó a las instalaciones del Colegio San Ignacio de Loyola para asumir un reto enorme, y la respuesta fue sencillamente extraordinaria. Ver cada debate, cada estrategia y todo el esfuerzo construido tomar vida en escenarios tan competitivos ha sido una de las experiencias más significativas hasta la fecha.

El compromiso se sintió con fuerza en cada rincón del modelo:

🛡️ DISEC: Excelente representación y constancia por parte de Ana Benítez y Camila Naranjo.
🌍 CDH: Un desempeño impecable liderado por Mariam Maklad.
💥 Crisis Unicameral: Adrenalina pura y agilidad mental con Mathias Briceño y Fabiana Navarro.
⚖️ Corte: Argumentación técnica y firmeza jurídica con Isabella Escalona y Sofía Clavijo.
⚔️ Crisis Bicameral: Estrategia y planificación de ataques de la mano de Moisés Reyes, Maximiliano Navarro y Juan Alzurutt.

El esfuerzo y la preparación rindieron frutos, reflejándose en importantes reconocimientos para la delegación:

🏅 Mención Verbal: Mariam Maklad
🎖️ Mención Honorífica: Sofía Clavijo
🏆 Mejor Delegado: Isabella Escalona

Se regresa a casa con el corazón lleno de orgullo, con valiosos aprendizajes y con la certeza de que este es apenas el primer paso de nuevos logros que alcanzar.

¡Felicidades a toda la delegación por dejar una huella tan impecable! 💼🌟 No habría sido posible sin el apoyo de nuestro colegio @colegiomapis y nuestro Faculty Advisor @manuelcorcida por siempre estar presente como figuras fijas de apoyo.

#mapismun`,
        instagramUrl: "https://www.instagram.com/p/DYgR6iAMrR4/?psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
        title: "¡Margarita se conecta con el futuro universitario! ✨🎓",
        category: "Académico",
        date: "Abr 2026",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1782932507/Screenshot_2026-07-01_150131_w2vybg.png", 
        description: "Recibimos en la UE Mariano Picón Salas a estudiantes de Nueva Esparta para la Prueba de Ubicación (PDU) de la Universidad Metropolitana.",
        fullDescription: `✨🎓 ¡Margarita se conecta con el futuro universitario!

🙌🏻 Nos llena de orgullo haber recibido en la UE Mariano Picón Salas a estudiantes de diversas instituciones de Nueva Esparta para la presentación de la Prueba de Ubicación (PDU) de la Universidad Metropolitana.

Como colegio asociado a la UNIMET, reafirmamos nuestro compromiso de ser el centro regional de referencia para que los jóvenes de nuestra isla den su primer paso hacia la excelencia académica sin tener que salir de casa.✨

👨🏻💻📓En esta jornada, recibimos a un grupo de alumnos de 5to año provenientes de 3 destacados colegios de la Isla, quienes pusieron a prueba sus habilidades y aptitudes en las áreas: cuantitativa, verbal e inglés para determinar su preparación para iniciar estudios universitarios.

¡Felicidades a todos los aspirantes por este gran paso!👏🏻👏🏻

#somosmapis
#UNIMET
#innovacioneducativa`,
        instagramUrl: "https://www.instagram.com/p/DV3ky8_AD7c/?rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
        title: "¡Mapis a la Vanguardia en Robótica! 🥉🤖",
        category: "Robótica",
        date: "22 Mar, 2026",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1791681209/IMG-20260322-WA0181_g5gmx7.jpg",
        description: "Nuestras estudiantes hicieron historia obteniendo medalla de bronce en la Final Nacional del Robotics For Good Youth Challenge.",
        fullDescription: `¡Mapis a la Vanguardia en Robótica! 🥉🤖

Nuestras estudiantes Tiana, Ana Elvira, Miranda y Marinetti hicieron historia en la Final Nacional del Robotics For Good Youth Challenge.

Con su robot diseñado para procesos agrícolas, demostraron que el liderazgo femenino en la tecnología no tiene límites.

¡Felicidades al equipo y a su instructora Lérida Marcano por este merecido bronce! 🌟

✨ El Mapis Robotic Team nos sigue dando motivos de orgullo y alegría.

Estén atentos a los próximos retos que tenemos por venir💪🏻💪🏻

#somosmapis
#innovacioneducativa
#colegiosdemargarita`,
        instagramUrl: "https://www.instagram.com/reel/DX9wfDpSgLd/?srtk=MzRlODBiNWFlZA=="
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
                        className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col md:flex-row border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedEvent(null)}
                            // CORRECCIÓN: Botón simple, sin blur
                            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors duration-200 z-20"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative w-full md:w-2/5 h-48 sm:h-56 md:h-auto shrink-0">
                            <Image
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-6 md:p-8">
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

                        <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col bg-white">
                            <h3 className="text-xl md:text-3xl font-black text-mapis-blue mb-4 md:mb-6 leading-tight">
                                {selectedEvent.title}
                            </h3>
                            
                            <div className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow overflow-y-auto max-h-[220px] md:max-h-[300px] pr-2 md:pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                <p className="whitespace-pre-line">{selectedEvent.fullDescription}</p>
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