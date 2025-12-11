import Image from "next/image"
import { Metadata } from "next"
import { FadeIn } from "@/components/animations/fade-in"
import { Palette, Dumbbell, Heart, Book, Music, Calculator, Coffee, Stethoscope } from "lucide-react"

export const metadata: Metadata = {
    title: "Nuestras Instalaciones | U.E. Mariano Picón Salas",
    description: "Un recorrido por los espacios donde tus hijos crecen, aprenden y son felices.",
}

// Categorizamos los espacios para facilitar la lectura
    const SPACES = [
    {
        category: "Arte, Ciencia y Tecnología",
        items: [
        { name: "Salón Maker", desc: "Laboratorio de robótica, programación y STEM donde las ideas cobran vida.", icon: Calculator, image: "/kids-learning.jpg" },
        { name: "Teatrino", desc: "Espacio mágico para artes plásticas y manualidades.", icon: Palette, image: "/kids-learning.jpg" },
        { name: "Salón de Música", desc: "Donde desarrollamos el oído y el talento artístico.", icon: Music, image: "/kids-learning.jpg" },
        { name: "El HUB", desc: "Más que una biblioteca, un espacio libre de encuentro y lectura.", icon: Book, image: "/kids-learning.jpg" },
        { name: "Aulas de Clase", desc: "Espacios iluminados y cómodos para el aprendizaje diario.", icon: Book, image: "/kids-learning.jpg" },
        ]
    },
    {
        category: "Deporte y Recreación",
        items: [
        { name: "Cancha de Fútbol", desc: "El corazón de nuestra pasión deportiva.", icon: Dumbbell, image: "/school-building-architecture-modern.jpg" },
        { name: "Cancha Techada", desc: "Espacio polideportivo protegido del sol y la lluvia.", icon: Dumbbell, image: "/school-building-architecture-modern.jpg" },
        { name: "Cancha de Pickleball", desc: "Innovando con nuevos deportes de tendencia.", icon: Dumbbell, image: "/school-building-architecture-modern.jpg" },
        { name: "Cancha de Kikinball", desc: "Para la diversión y competencia sana.", icon: Dumbbell, image: "/school-building-architecture-modern.jpg" },
        { name: "Patio Central", desc: "El lugar de encuentro, juegos y amistades.", icon: Heart, image: "/school-building-architecture-modern.jpg" },
        ]
    },
    {
        category: "Bienestar y Servicios",
        items: [
        { name: "Salón DOBE", desc: "Departamento de Orientación y Bienestar Estudiantil. Atención especializada (TDA, TDH).", icon: Heart, image: "/kids-learning.jpg" },
        { name: "Comedor", desc: "Alimentación balanceada en un ambiente higiénico y familiar.", icon: Coffee, image: "/kids-learning.jpg" },
        { name: "Enfermería", desc: "Atención primaria inmediata para la seguridad de todos.", icon: Stethoscope, image: "/kids-learning.jpg" },
        ]
    }
    ]

    export default function FacilitiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FFFDF7]"> {/* Fondo Crema Cálido */}
        
        {/* Hero Section */}
        <section className="relative bg-mapis-blue text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/school-building-architecture-modern.jpg')] bg-cover bg-center opacity-10" />
            <FadeIn className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-mapis-yellow text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/20">
                Nuestro Campus
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Espacios para <span className="text-mapis-yellow">Crecer Feliz</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                Cada rincón del MAPIS está diseñado para inspirar, proteger y potenciar el talento de tus hijos.
            </p>
            </FadeIn>
        </section>

        {/* Galería de Espacios */}
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
            {SPACES.map((section, idx) => (
            <section key={idx}>
                <FadeIn direction="up" delay={100}>
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-10 w-2 bg-mapis-yellow rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue">{section.category}</h2>
                </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIdx) => (
                    <FadeIn key={itemIdx} delay={itemIdx * 100} className="group h-full">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 h-full flex flex-col">
                        {/* Imagen con Zoom suave */}
                        <div className="relative h-56 overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-mapis-blue">
                            <item.icon className="h-5 w-5" />
                        </div>
                        </div>
                        
                        {/* Texto */}
                        <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mapis-blue transition-colors">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                        </div>
                    </div>
                    </FadeIn>
                ))}
                </div>
            </section>
            ))}
        </div>

        {/* Call to Action Familiar */}
        <section className="bg-mapis-yellow/10 py-20 border-y border-mapis-yellow/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
                <h2 className="text-3xl font-bold text-mapis-blue mb-4">¿Te gustaría conocerlos en persona?</h2>
                <p className="text-gray-700 mb-8 text-lg">
                Nada se compara con recorrer nuestros pasillos y sentir la energía del MAPIS.
                </p>
                <a href="/admisiones" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-mapis-blue rounded-full shadow-lg hover:bg-blue-900 hover:scale-105 hover:shadow-xl">
                Agendar Visita Guiada
                </a>
            </FadeIn>
            </div>
        </section>
        </div>
    )
}