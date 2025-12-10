"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, X, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Datos del equipo con biografía extendida
const TEAM_MEMBERS = [
{
    name: "Dra. María Rodríguez",
    role: "Directora General",
    image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1765393597/cld-sample-5.jpg",
    shortBio: "Magíster en Gerencia Educativa con 25 años de trayectoria.",
    fullBio: "La Dra. María Rodríguez es educadora de vocación y Magíster en Gerencia Educativa. Ha dedicado más de dos décadas a la transformación de procesos pedagógicos en Nueva Esparta. Su visión se centra en el aprendizaje humanista y la integración de la tecnología en el aula. Antes de unirse al MAPIS, lideró proyectos educativos regionales premiados por su innovación."
},
{
    name: "Lic. Carlos Pérez",
    role: "Coord. Académico",
    image: "/placeholder-user.jpg",
    shortBio: "Especialista en planificación curricular y evaluación.",
    fullBio: "Licenciado en Educación con mención en Ciencias Pedagógicas. Carlos es el arquitecto detrás de nuestro robusto plan de estudios. Su enfoque se basa en el desarrollo de competencias críticas y el aprendizaje basado en proyectos. Es un apasionado de la lectura y promotor de clubes de debate estudiantil."
},
{
    name: "Prof. Ana González",
    role: "Coord. de Primaria",
    image: "/placeholder-user.jpg",
    shortBio: "Dedicada a la formación integral en la primera infancia.",
    fullBio: "Con una especialización en Psicopedagogía, la profesora Ana vela por el bienestar emocional y académico de nuestros alumnos más jóvenes. Cree firmemente que 'un niño feliz aprende mejor'. Ha implementado programas de inteligencia emocional que son pilar fundamental de nuestra primaria."
},
{
    name: "Lic. Roberto Díaz",
    role: "Coord. de Deporte",
    image: "/placeholder-user.jpg",
    shortBio: "Entrenador certificado y promotor del deporte escolar.",
    fullBio: "Ex-atleta de selección nacional y Licenciado en Educación Física. Roberto ha llevado a nuestras selecciones a ganar múltiples campeonatos estadales. Para él, el deporte es la mejor escuela de valores como la disciplina, el trabajo en equipo y la resiliencia."
},
]

export function TeamCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
    const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

return (
    <>
    {/* CARRUSEL */}
    <div className="relative max-w-6xl mx-auto px-4">
    <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex -ml-4">
        {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0">
            <div 
                onClick={() => setSelectedMember(member)}
                className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full relative"
            >
                {/* Badge de "Ver más" al hacer hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-mapis-blue bg-blue-50 px-2 py-1 rounded-full">
                Ver Bio
                </div>

                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-mapis-yellow/50 transition-colors shadow-inner">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                </div>
                <h3 className="text-xl font-bold text-mapis-blue mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                <p className="text-sm font-bold text-mapis-yellow mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {member.shortBio}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>

    {/* Botones de Navegación */}
    <div className="flex justify-center gap-4 mt-4">
        <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="rounded-full h-12 w-12 border-2 hover:bg-mapis-blue hover:text-white hover:border-mapis-blue transition-all"
        >
        <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="rounded-full h-12 w-12 border-2 hover:bg-mapis-blue hover:text-white hover:border-mapis-blue transition-all"
        >
        <ChevronRight className="h-6 w-6" />
        </Button>
    </div>
    </div>

    {/* MODAL DE BIOGRAFÍA (POPUP) */}
    {selectedMember && (
    <div 
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setSelectedMember(null)}
    >
        <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
        >
        {/* Botón Cerrar */}
        <button 
            onClick={() => setSelectedMember(null)}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-900 transition-colors z-10"
        >
            <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-5 h-full">
            {/* Columna Foto (Izquierda o Arriba) */}
            <div className="bg-mapis-blue p-8 md:col-span-2 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-mapis-blue opacity-50 pattern-dots"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-lg mb-4 overflow-hidden">
                <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-lg font-bold leading-tight">{selectedMember.name}</h3>
            <p className="text-mapis-yellow text-sm font-medium mt-1">{selectedMember.role}</p>
            </div>

            {/* Columna Info (Derecha o Abajo) */}
            <div className="p-8 md:col-span-3 bg-white flex flex-col justify-center">
            <Quote className="w-10 h-10 text-gray-100 mb-4 rotate-180" />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Biografía Profesional</h4>
            <p className="text-gray-600 leading-relaxed text-base">
                {selectedMember.fullBio}
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <Button 
                onClick={() => setSelectedMember(null)}
                variant="outline"
                className="text-mapis-blue border-mapis-blue hover:bg-blue-50"
                >
                Cerrar
                </Button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )}
</>
)
}