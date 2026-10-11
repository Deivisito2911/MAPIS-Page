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
    name: "Lic. Gisella Menoni",
    role: "Directora General",
    image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769774001/Gisella_Minoni_lpv5lq.jpg",
    shortBio: "Magíster en Educación con más de dos décadas de trayectoria en gestión escolar.",
    fullBio: "La Lic. Gisella Menoni es una líder educativa con más de dos décadas de experiencia en gestión escolar. Su trayectoria se centra en la mejora continua del proceso formativo y el fortalecimiento de la cultura institucional en Nueva Esparta. Ha liderado proyectos innovadores en el ámbito pedagógico y es ampliamente reconocida por su compromiso con la excelencia académica y la formación integral de los estudiantes."
},
{
    name: "Lic. Bárbara Hernández",
    role: "Directiva y Finanzas ANDIEP",
    image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769773917/Barbara_Hernandez_cmw8an.jpg",
    shortBio: "Directiva de MAPIS y Directora de Finanzas de ANDIEP Nueva Esparta (2025-2027).",
    fullBio: "Destacada educadora, administradora y líder gremial venezolana. Ejerce funciones directivas en la Unidad Educativa Mariano Picón Salas y es la Directora de Finanzas de la Asociación Nacional de Institutos Educativos Privados (ANDIEP) Seccional Nueva Esparta (período 2025-2027). Su gestión se enfoca en la innovación de soluciones financieras y métodos de pago flexibles, la defensa de estructuras de costos justas y equilibradas para las familias, y la garantía de la continuidad del calendario escolar y la sostenibilidad institucional."
},
{
    name: "Lic. Carolina Real",
    role: "Coord. de Relaciones Interinstitucionales",
    image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769774001/Carolina_Real_cn0jhj.jpg",
    shortBio: "Directora del C.E.I. Garabatos y Coordinadora de Relaciones Interinstitucionales de MAPIS.",
    fullBio: "Directiva educativa con amplia visión estratégica, especializada en desarrollo infantil temprano y el establecimiento de alianzas institucionales de alto impacto en Nueva Esparta. Como Directora del Centro de Educación Inicial Garabatos lidera la innovación pedagógica en primera infancia con más de 21 años de trayectoria. En MAPIS, coordina los vínculos estratégicos con la comunidad, entes gremiales e instituciones internacionales, facilitando proyectos de alto perfil como intercambios lingüísticos y torneos de robótica."
},
{
    name: "Dr. Luis Santiago Perera",
    role: "Socio Fundador",
    image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1791726295/FOTO-SANTIAGO-PERERA-2026_vlzdwc.jpg",
    shortBio: "Socio fundador de MAPIS, Director Fundador del Colegio Guayamurí y Secretario General de la UNIMET.",
    fullBio: "Educador, investigador y estratega de la innovación curricular. Es socio y miembro fundador de la U.E. Mariano Picón Salas, asesorando su creación desde 2006 y diseñando su estructura legal, financiera y proyecto pedagógico original. Licenciado en Educación (UCAB), posee Maestría en Tecnología Educativa (Universidad de Hartford, EE. UU.) y Doctorado en Innovación Educativa (Universidad de Córdoba, España). Es Director Fundador del Colegio Guayamurí, actual Secretario General de la Universidad Metropolitana (UNIMET), consultor del BID y asesor de la red internacional de escuelas transformadoras Ashoka."
},
{
    name: "Lic. Jaime Picón",
    role: "Socio Fundador",
    image: "/images/logo.png",
    shortBio: "Socio Fundador y Miembro de la Junta Directiva de la U.E. Mariano Picón Salas.",
    fullBio: "Socio Fundador y miembro de la Junta Directiva de la Unidad Educativa Mariano Picón Salas. Formó parte del grupo originario de ciudadanos y educadores que conceptualizaron y sentaron las bases legales e institucionales para el nacimiento del plantel en Los Robles en el año 2008. Su gestión inicial y continua ha estado vinculada a la viabilidad institucional, el desarrollo de la infraestructura y el respaldo a la visión de excelencia educativa integral del colegio."
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
                    className={member.image.includes("logo") ? "object-contain p-3 bg-white" : "object-cover group-hover:scale-110 transition-transform duration-500"}
                />
                </div>
                <h3 className="text-xl font-bold text-mapis-blue mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                <p className="text-sm font-bold text-mapis-yellow mb-4 uppercase tracking-wide !text-center">{member.role}</p>
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
                    className={selectedMember.image.includes("logo") ? "object-contain p-4 bg-white" : "object-cover"}
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