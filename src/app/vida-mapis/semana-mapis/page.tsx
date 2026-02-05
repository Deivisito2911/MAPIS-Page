"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { Camera, Sparkles, X, ZoomIn, Heart, Shield, Users, Trophy, Lightbulb, Target } from "lucide-react"

// URL DE LA IMAGEN GRUPAL
const GROUP_IMAGE = "https://res.cloudinary.com/dnwyno39r/image/upload/v1770297767/logo_semana_mapis-1_dfrnnh.png" 

// --- TEXTOS OFICIALES (SIN ALTERACIONES) ---
const VALORES = [
    { 
        title: "Propósito en común e integración", 
        icon: Users, 
        text: "Fomentamos el compañerismo, el sentido de pertenencia y el orgullo de ser parte de Mapis. La participación de las familias es clave y ayuda a las alianzas a ganar puntos importantes. Ellos son el motor que las impulsa.", 
        color: "text-blue-400", 
        border: "hover:border-blue-400" 
    },
    { 
        title: "Sentido de pertenencia", 
        icon: Heart, 
        text: "Nos unimos en 6 alianzas que simbolizan elementos propios de la flora y fauna de nuestro estado y del estado Mérida, cuna de Don Mariano Picón Salas.", 
        color: "text-red-400", 
        border: "hover:border-red-400" 
    },
    { 
        title: "Liderazgo", 
        icon: Shield, 
        text: "Cada alianza cuenta con sus líderes y reyes, quienes impulsan a sus compañeros a darlo todo en cada competencia.", 
        color: "text-purple-400", 
        border: "hover:border-purple-400" 
    },
    { 
        title: "Desafíos positivos", 
        icon: Trophy, 
        // Formateado para que se vea bien en la tarjeta manteniendo el texto original
        text: "Desarrollamos juegos y competencias para los miembros de las alianzas, que ponen a prueba las capacidades: Físicas, Intelectuales, Artísticas e Ingeniosas.", 
        color: "text-yellow-400", 
        border: "hover:border-yellow-400" 
    },
    { 
        title: "Alta motivación", 
        icon: Lightbulb, 
        text: "Las alianzas van acumulando puntos por su participación en cada una de las pruebas y al final de la semana se entregan premios a las alianzas que más se destacaron.", 
        color: "text-orange-400", 
        border: "hover:border-orange-400" 
    },
    { 
        title: "Compromiso", 
        icon: Target, 
        text: "Cada integrante asume dar lo mejor de sí en pro de su alianza. ¡TODOS SOMOS IMPORTANTES Y NECESARIOS!", 
        color: "text-green-400", 
        border: "hover:border-green-400" 
    },
]

const ALIANZAS = [
    {
        id: "guayacanes",
        name: "GUAYACANES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png", 
        color: "bg-[#fcbc37]", 
        textColor: "text-blue-900",
        description: "Representa la fortaleza y la belleza del árbol que florece con esplendor en las tierras cálidas de la Isla de Margarita.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png"
        ]
    },
    {
        id: "frailejones",
        name: "FRAILEJONES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png", 
        color: "bg-[#bef154]", 
        textColor: "text-green-900",
        description: "Simboliza la sabiduría y protección de los llamados “guardianes del páramo”, por ser plantas vitales para el ciclo del agua en las alturas.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png"
        ]
    },
    {
        id: "iguanas",
        name: "IGUANAS",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png", 
        color: "bg-[#ed04b4]", 
        textColor: "text-white", 
        description: "Refleja la energía, la paciencia y la capacidad de adaptación de este emblemático reptil de nuestro clima tropical, en peligro de extinción.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png"
        ]
    },
    {
        id: "chipichipi",
        name: "CHIPI-CHIPI",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png", 
        color: "bg-[#333ccc]", 
        textColor: "text-white", 
        description: "Evoca la esencia de las costas neoespartanas y la fuerza que surge cuando muchos elementos pequeños se unen en una gran comunidad.",
        gallery: [
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png",
            "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png"
        ] 
    },
    {
        id: "condor",
        name: "CÓNDOR",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698622/mascotas_condor_jjsfom.png", 
        color: "bg-[#5b04ab]", 
        textColor: "text-white", 
        description: "Representa la majestuosidad, el liderazgo y el espíritu de libertad que vuela sobre las cumbres más altas de Mérida.",
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
        textColor: "text-white", 
        description: "Simboliza la agilidad, la pureza y la perseverancia de quienes nadan con determinación en las corrientes cristalinas de la montaña.",
        gallery: [
             "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png",
             "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png"
        ]
    },
]

export default function SemanaMapisPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-white font-sans">
            
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-mapis-blue text-white overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat opacity-5 bg-[length:400px_400px] pointer-events-none mix-blend-overlay" />
                
                <FadeIn className="text-center z-10 px-4 max-w-5xl mx-auto mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-mapis-yellow text-mapis-blue text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(254,191,15,0.6)] animate-pulse">
                        ¡Una tradición que nació con el colegio!
                    </span>
                    <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter uppercase leading-none mb-6 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
                        SEMANA <br className="md:hidden"/> MAPIS
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
                        La semana más divertida y esperada por todos los miembros de la comunidad escolar MAPIS. ¡Es una tradición que se celebra año tras año!
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
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-20" />
            </section>

            {/* 2. NUESTRA ESENCIA (TEXTOS OFICIALES) */}
            <section className="py-24 px-4 bg-slate-900 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 tracking-tight">
                            ¿Qué nos mueve?
                        </h2>
                        <p className="text-gray-400 text-lg uppercase tracking-widest">Nuestros 6 Pilares</p>
                    </FadeIn>

                    {/* GRID DE TARJETAS */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VALORES.map((valor, idx) => (
                            <FadeIn key={idx} delay={idx * 100} className={`bg-slate-800/50 p-8 rounded-3xl border-2 border-slate-700 hover:bg-slate-800 transition-all duration-300 group flex flex-col h-full ${valor.border}`}>
                                
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shadow-inner ${valor.color}`}>
                                        <valor.icon className="w-7 h-7" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-4xl font-black text-slate-700 group-hover:text-slate-600 transition-colors select-none opacity-50">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white uppercase mb-4 group-hover:translate-x-1 transition-transform min-h-[3rem]">
                                    {valor.title}
                                </h3>
                                
                                <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                                    {valor.text}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SECCIONES DE ALIANZAS */}
            <div className="flex flex-col">
                <div className="text-center py-20 bg-gray-50 border-b border-gray-200">
                    <span className="text-mapis-orange font-bold uppercase tracking-widest text-sm mb-2 block">Conoce a los equipos</span>
                    <h2 className="text-5xl md:text-8xl font-black text-mapis-blue uppercase tracking-tighter">Nuestras Alianzas</h2>
                </div>
                
                {ALIANZAS.map((alianza, idx) => (
                    <section key={idx} className={`py-24 relative overflow-hidden ${alianza.color}`}>
                        
                        <div className="absolute inset-0 opacity-10 bg-[url('/images/logo.png')] bg-repeat bg-[length:150px] mix-blend-multiply pointer-events-none" />

                        <div className="max-w-7xl mx-auto px-4 relative z-10">
                            
                            {/* CABECERA ALIANZA */}
                            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
                                <FadeIn className="relative shrink-0 order-1 lg:order-none">
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 backdrop-blur-md p-6 shadow-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 border-4 border-white/30">
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={alianza.image} 
                                                alt={alianza.name}
                                                fill
                                                className="object-contain drop-shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </FadeIn>

                                <div className="text-center lg:text-left flex-1 order-2 lg:order-none">
                                    <FadeIn delay={100} className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50">
                                        <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-slate-900`}>
                                            {alianza.name}
                                        </h2>
                                        <div className={`h-2 w-20 mb-6 rounded-full ${alianza.color} brightness-75 mx-auto lg:mx-0`} />
                                        <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed">
                                            {alianza.description}
                                        </p>
                                    </FadeIn>
                                </div>
                            </div>

                            {/* CARRUSEL */}
                            <FadeIn delay={200} className="relative">
                                <div className="flex items-center gap-2 mb-4 text-white/80 font-bold uppercase text-xs tracking-widest">
                                    <Camera className="w-4 h-4" />
                                    Galería de Momentos
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                                    {alianza.gallery.map((imgSrc, photoIdx) => (
                                        <div 
                                            key={photoIdx} 
                                            onClick={() => setSelectedImage(imgSrc)}
                                            className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden relative shadow-lg group cursor-zoom-in border-4 border-white/20 bg-black/10"
                                        >
                                            <Image 
                                                src={imgSrc}
                                                alt={`Foto ${photoIdx + 1} de ${alianza.name}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-bold uppercase tracking-widest border-2 border-white px-6 py-2 rounded-full backdrop-blur-md flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                                    <ZoomIn className="w-4 h-4" /> Ampliar
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                        </div>
                        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/10 to-transparent" />
                    </section>
                ))}
            </div>

            {/* CTA FINAL */}
            <section className="py-24 bg-mapis-blue text-white text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/logo.png')] bg-repeat bg-[length:200px]" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">¿Listo para apoyar a tu alianza?</h2>
                    <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
                        La Semana MAPIS es más que ganar trofeos, es ganar amigos y experiencias para toda la vida.
                    </p>
                </div>
            </section>

            {/* VISOR (LIGHTBOX) */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-mapis-yellow transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div 
                        className="relative w-full max-w-6xl h-[85vh] animate-in zoom-in-95 duration-300"
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

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    )
}