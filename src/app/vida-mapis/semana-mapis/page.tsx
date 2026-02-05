"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { Camera, Sparkles, X, ZoomIn } from "lucide-react"

// URL DE LA IMAGEN GRUPAL (Logo Semana Mapis)
const GROUP_IMAGE = "https://res.cloudinary.com/dnwyno39r/image/upload/v1770297767/logo_semana_mapis-1_dfrnnh.png" 

const ALIANZAS = [
    {
        id: "chipichipi",
        name: "CHIPI-CHIPI",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png", 
        color: "bg-[#333ccc]", 
        lightColor: "bg-[#333ccc]/10",
        description: "Unión y constancia ante cualquier marea.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png"
        ] 
    },
    {
        id: "frailejones",
        name: "FRAILEJONES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png", 
        color: "bg-[#bef154]", 
        lightColor: "bg-[#bef154]/10",
        description: "Resiliencia y calidez en las alturas.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png"
        ]
    },
    {
        id: "condor",
        name: "CÓNDOR",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698622/mascotas_condor_jjsfom.png", 
        color: "bg-[#5b04ab]", 
        lightColor: "bg-[#5b04ab]/10",
        description: "Liderazgo y visión estratégica.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698622/mascotas_condor_jjsfom.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698622/mascotas_condor_jjsfom.png"
        ]
    },
    {
        id: "truchas",
        name: "TRUCHAS",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png", 
        color: "bg-[#fb5b04]", 
        lightColor: "bg-[#fb5b04]/10",
        description: "Agilidad y energía contra la corriente.",
        gallery: [
             "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png",
             "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png"
        ]
    },
    {
        id: "guayacanes",
        name: "GUAYACANES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png", 
        color: "bg-[#fcbc37]", 
        lightColor: "bg-[#fcbc37]/10",
        description: "Fuerza y raíces profundas.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png"
        ]
    },
    {
        id: "iguanas",
        name: "IGUANAS",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png", 
        color: "bg-[#ed04b4]", 
        lightColor: "bg-[#ed04b4]/10",
        description: "Adaptabilidad y velocidad de reacción.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png"
        ]
    },
]

export default function SemanaMapisPage() {
    // Estado para el visor de imágenes (Lightbox)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-white font-sans">
            
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-mapis-blue text-white overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat opacity-5 bg-[length:400px_400px] pointer-events-none mix-blend-overlay" />
                
                <FadeIn className="text-center z-10 px-4 max-w-5xl mx-auto mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-mapis-yellow text-mapis-blue text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(254,191,15,0.6)] animate-pulse">
                        ¡La semana más esperada!
                    </span>
                    <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter uppercase leading-none mb-6 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
                        SEMANA <br className="md:hidden"/> MAPIS
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
                        Una celebración de talento, deporte y compañerismo donde nuestras 6 alianzas demuestran que juntos somos más fuertes.
                    </p>
                </FadeIn>

                {/* IMAGEN GRUPAL FLOTANTE */}
                <FadeIn delay={200} direction="up" className="relative w-full max-w-5xl h-[400px] md:h-[600px] z-10">
                    <div className="relative w-full h-full animate-float flex items-center justify-center"> 
                        <Image 
                            src={GROUP_IMAGE} 
                            alt="Mascotas MAPIS Unidas"
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            priority
                        />
                    </div>
                </FadeIn>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
            </section>

            {/* 2. INTRODUCCIÓN */}
            <section className="py-20 px-4 text-center bg-white relative z-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-mapis-blue uppercase mb-6">
                        El Espíritu de la Competencia
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Durante esta semana, el colegio se transforma. Cada estudiante, docente y representante se une a su alianza para competir sanamente, crear recuerdos inolvidables y celebrar los valores que nos unen como familia MAPIS.
                    </p>
                </div>
            </section>

            {/* 3. SECCIONES DE ALIANZAS (CARRUSELES) */}
            {/* CORREGIDO: Eliminado 'pb-24' para quitar espacio blanco final */}
            <div className="flex flex-col">
                {ALIANZAS.map((alianza, idx) => (
                    <section key={idx} className={`py-24 relative overflow-hidden ${alianza.lightColor}`}>
                        
                        {/* Elementos Decorativos de Fondo */}
                        <div className={`absolute top-0 right-0 w-64 h-64 ${alianza.color} rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2`} />
                        <div className={`absolute bottom-0 left-0 w-96 h-96 ${alianza.color} rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2`} />

                        <div className="max-w-7xl mx-auto px-4 relative z-10">
                            
                            {/* CABECERA DE ALIANZA */}
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <FadeIn className="relative shrink-0">
                                    <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${alianza.color} p-4 shadow-lg flex items-center justify-center transform hover:rotate-6 transition-transform duration-300`}>
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={alianza.image} 
                                                alt={alianza.name}
                                                fill
                                                className="object-contain drop-shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white text-yellow-500 p-2 rounded-full shadow-md animate-pulse">
                                        <Sparkles className="w-6 h-6 fill-current" />
                                    </div>
                                </FadeIn>

                                <div className="text-center md:text-left">
                                    <FadeIn delay={100}>
                                        <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500`}>
                                            {alianza.name}
                                        </h2>
                                        <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-xl">
                                            {alianza.description}
                                        </p>
                                    </FadeIn>
                                </div>
                            </div>

                            {/* CARRUSEL DE FOTOS (Scroll Horizontal) */}
                            <FadeIn delay={200} className="relative">
                                <div className="flex items-center gap-2 mb-4 text-gray-400 font-bold uppercase text-xs tracking-widest">
                                    <Camera className="w-4 h-4" />
                                    Galería de Momentos
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                                    {alianza.gallery.map((imgSrc, photoIdx) => (
                                        <div 
                                            key={photoIdx} 
                                            onClick={() => setSelectedImage(imgSrc)}
                                            className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden relative shadow-lg group cursor-zoom-in"
                                        >
                                            <div className={`absolute inset-0 ${alianza.color} opacity-20`} />
                                            <Image 
                                                src={imgSrc}
                                                alt={`Foto ${photoIdx + 1} de ${alianza.name}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            
                                            {/* Overlay al hacer hover */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-bold uppercase tracking-widest border border-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                                                    <ZoomIn className="w-4 h-4" /> Ampliar
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                        </div>
                    </section>
                ))}
            </div>

            {/* CTA FINAL (Sin botón) */}
            <section className="py-24 bg-mapis-blue text-white text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/logo.png')] bg-repeat bg-[length:200px]" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">¿Listo para apoyar a tu alianza?</h2>
                    <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
                        La Semana MAPIS es más que ganar trofeos, es ganar amigos y experiencias para toda la vida.
                    </p>
                </div>
            </section>

            {/* --- VISOR DE IMÁGENES (LIGHTBOX) --- */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-mapis-yellow transition-colors p-2 bg-white/10 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div 
                        className="relative w-full max-w-5xl h-[80vh] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={selectedImage}
                            alt="Visor de imagen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Estilos Globales */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}