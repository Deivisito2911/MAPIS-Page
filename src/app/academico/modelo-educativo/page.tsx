import { Metadata } from "next"
import Image from "next/image"
import { Target } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Modelo Educativo | U.E. Mariano Picón Salas",
    description: "Nuestros objetivos y filosofía educativa.",
}

const OBJETIVOS = [
    {
        title: "Formación Integral, Innovación y Competencias para el Futuro",
        description: "Brindar formación integral e innovadora que desarrolle el talento, fortalezca el carácter y promueva competencias multilingües, tecnológicas y científicas para los desafíos del futuro.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538478/innovacion_dqwnyi.jpg",
        badge: "Innovación & Futuro"
    },
    {
        title: "Pensamiento Crítico",
        description: "Fortalecer el pensamiento crítico y las habilidades para resolver problemas, promoviendo un aprendizaje activo y colaborativo.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538508/ajedrez_bt3oju.jpg",
        badge: "Habilidades Cognitivas"
    },
    {
        title: "Desarrollo Artístico y Cultural",
        description: "Promover la apreciación artística y cultural para formar una conciencia estética.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538497/talento_mapis_bbzsob.jpg",
        badge: "Arte & Cultura"
    },
    {
        title: "Cultura Deportiva",
        description: "Promover la práctica deportiva dentro de una cultura de juego limpio, disciplina, respeto y trabajo en equipo.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538509/baloncesto_gj5pm6.jpg",
        badge: "Deporte & Disciplina"
    },
    {
        title: "Identidad y Arraigo",
        description: "Cultivar el sentido de pertenencia, orgullo y arraigo hacia Nueva Esparta y Venezuela, valorando su historia, cultura, tradiciones y patrimonio.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538526/direccion_fniszi.jpg",
        badge: "Identidad & Tradición"
    },
    {
        title: "Educación Inclusiva y Convivencia",
        description: "Promover una educación inclusiva que respete la diversidad (física, cultural y religiosa), favoreciendo el respeto mutuo y la sana convivencia.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538495/respeto_xf9u9u.jpg",
        badge: "Inclusión & Convivencia"
    },
    {
        title: "Sostenibilidad y Ciudadanía Global",
        description: "Fomentar la conciencia ambiental y el compromiso con el desarrollo sostenible, formando ciudadanos responsables y con visión global.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538489/mun_blzlju.jpg",
        badge: "Medio Ambiente & Mundo"
    },
    {
        title: "Compromiso Social",
        description: "Fomentar el compromiso social y la vocación de servicio, promoviendo acciones que contribuyan positivamente al desarrollo de la comunidad margariteña.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538515/compromiso_ov8utq.jpg",
        badge: "Vocación de Servicio"
    },
    {
        title: "Ciudadanía Digital Responsable",
        description: "Desarrollar competencias digitales y comunicativas que preparen a los estudiantes a participar de manera ética, crítica, responsable y segura en un mundo interconectado.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538496/robotica_e017xw.jpg",
        badge: "Tecnología Ética"
    },
    {
        title: "Alianza Familia - Colegio",
        description: "Fortalecer la alianza entre la Familia y Mapis, promoviendo la corresponsabilidad en la formación integral de cada estudiante, bajo el criterio “Educar es regla de tres”.",
        iconImage: "https://res.cloudinary.com/dnwyno39r/image/upload/v1771538485/mision_ayqry0.jpg",
        badge: "Comunidad MAPIS"
    }
]

export default function ModeloEducativoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* HERO */}
        <section className="relative bg-mapis-blue text-black py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-50">
            <Image src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771538547/fondo_pagina_web_BEIGE_xk6c1x.jpg" alt="Modelo Educativo" fill className="object-cover" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 bg-black backdrop-blur-sm px-4 py-2 rounded-full text-mapis-yellow mb-6 border border-white/20">
                <Target className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Nuestra Misión</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Objetivos Institucionales</h1>
                <p className="text-xl text-black max-w-3xl mx-auto font-light leading-relaxed !text-center">
                Ser reconocidos como una Institución de calidad académica por nuestro aporte integral a la comunidad margariteña.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* LISTA DE OBJETIVOS (MASONRY FLUIDO - SIN ESPACIOS VACÍOS) */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="columns-1 md:columns-2 gap-6">
                    {OBJETIVOS.map((objetivo, idx) => (
                        <FadeIn 
                            key={idx} 
                            delay={idx * 40} 
                            className="break-inside-avoid mb-6 bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-mapis-yellow/50 transition-all duration-300 flex flex-col gap-4 group"
                        >
                            <div className="flex items-center justify-between gap-4">
                                {/* --- CONTENEDOR CIRCULAR DEL ICONO DE MARCA (Cloudinary) --- */}
                                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-sm flex-shrink-0 border-2 border-mapis-yellow/40 bg-mapis-blue transition-transform duration-300 group-hover:scale-110">
                                    <Image 
                                        src={objetivo.iconImage}
                                        alt={`Icono ${objetivo.title}`}
                                        fill
                                        className="object-cover scale-110"
                                    />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                    {objetivo.badge}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-mapis-blue uppercase mb-2 leading-snug group-hover:text-mapis-orange transition-colors">
                                    {objetivo.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    {objetivo.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
        </div>
    )
}