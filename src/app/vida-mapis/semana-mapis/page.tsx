"use client"

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowDown } from "lucide-react"

// Configuración de las Alianzas
const ALIANZAS = [
    {
        id: "chipichipi",
        name: "CHIPI-CHIPI",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698615/mascotas_chipichipi_zosj1i.png", 
        color: "#333ccc", 
        textColor: "text-white",
        description: "Pequeños pero inquebrantables. Representan la unión y la constancia. Como las olas del mar, su fuerza reside en mantenerse juntos ante cualquier marea."
    },
    {
        id: "frailejones",
        name: "FRAILEJONES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698624/mascotas_frailejones_ltoc5n.png", 
        color: "#bef154", 
        textColor: "text-green-900",
        description: "Guardianes de la vida. Simbolizan la resiliencia y calidez en las alturas. Su misión es proteger, crecer y mantenerse firmes pase lo que pase."
    },
    {
        id: "condor",
        name: "CÓNDOR",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698622/mascotas_condor_jjsfom.png", 
        color: "#5b04ab", 
        textColor: "text-white",
        description: "Los reyes de las alturas. Vuelan con visión estratégica y majestuosidad. Su liderazgo y perspectiva amplia los llevan siempre a conquistar la cima."
    },
    {
        id: "truchas",
        name: "TRUCHAS",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698632/mascotas_trucha_xpomjl.png", 
        color: "#fb5b04", 
        textColor: "text-white",
        description: "Agilidad contra la corriente. No temen a los desafíos; avanzan con energía, adaptabilidad y una velocidad que sorprende a todos sus rivales."
    },
    {
        id: "guayacanes",
        name: "GUAYACANES",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698612/guayacanes__1_-removebg-preview_zcycur.png", 
        color: "#fcbc37", 
        textColor: "text-orange-900",
        description: "Fuerza que florece. Como el árbol milenario, tienen raíces profundas y cuando llega su momento, brillan más que nadie con su color dorado."
    },
    {
        id: "iguanas",
        name: "IGUANAS",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769698631/mascotas_iguana_hnjyaw.png", 
        color: "#ed04b4", 
        textColor: "text-white",
        description: "Maestros de la adaptación. Saben cuándo esperar y cuándo actuar. Su paciencia es su armadura y su velocidad de reacción, su mejor ataque."
    },
]

export default function SemanaMapisPage() {
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        // CORREGIDO: Eliminé 'font-sans' para que herede la fuente Inter del layout
        <div className="min-h-screen bg-slate-950 flex flex-col">
            
            {/* 1. HEADER */}
            <section className="pt-20 pb-12 text-center px-4 relative z-10">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase drop-shadow-lg">
                        Semana <span className="text-mapis-yellow">MAPIS</span>
                    </h1>
                    <div className="h-1 w-20 bg-mapis-yellow mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-gray-400 font-medium tracking-widest uppercase">
                        Conoce nuestras alianzas
                    </p>
                </FadeIn>
            </section>

            {/* 2. ESTANDARTES (Mejorados con texturas y luces) */}
            <section className="px-4 pb-20 overflow-x-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-full">
                        {ALIANZAS.map((alianza, idx) => (
                            <FadeIn key={idx} delay={idx * 100} className="h-full">
                                <div 
                                    onClick={() => scrollToSection(alianza.id)} 
                                    className="relative group h-[400px] md:h-[500px] w-full transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-white/10 cursor-pointer overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                                        backgroundColor: alianza.color
                                    }}
                                >
                                    {/* Texturas */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none mix-blend-overlay" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
                                    <div 
                                        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                                        }}
                                    />

                                    {/* Contenido */}
                                    <div className="h-full flex flex-col items-center pt-8 pb-20 px-2 relative z-10">
                                        <h2 className={`text-lg md:text-xl font-bold uppercase tracking-wider text-center mb-6 drop-shadow-md ${alianza.textColor}`}>
                                            {alianza.name}
                                        </h2>
                                        
                                        <div className="relative w-full flex-1 flex items-center justify-center">
                                            <div className="relative w-28 h-28 md:w-40 md:h-40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]">
                                                <Image 
                                                    src={alianza.image} 
                                                    alt={`Escudo ${alianza.name}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white animate-bounce">
                                            <ArrowDown className="w-5 h-5 drop-shadow-md" />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DETALLE DE CADA ALIANZA (Zig-Zag con Tipografía Normalizada) */}
            <div className="flex flex-col w-full">
                {ALIANZAS.map((alianza, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <section 
                            key={idx} 
                            id={alianza.id} 
                            className={`min-h-[60vh] flex flex-col-reverse ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative scroll-mt-20`}
                        >
                            {/* LADO DEL TEXTO */}
                            <div 
                                className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
                                style={{ backgroundColor: alianza.color }}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none mix-blend-overlay" />
                                <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                                <FadeIn direction={isEven ? "right" : "left"}>
                                    <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight drop-shadow-sm ${alianza.textColor}`}>
                                        {alianza.name}
                                    </h2>
                                    <div className={`h-1.5 w-16 mb-6 rounded-full ${alianza.textColor === 'text-white' ? 'bg-white/80' : 'bg-black/20'}`} />
                                    <p className={`text-base md:text-lg font-medium leading-relaxed max-w-lg ${alianza.textColor}`}>
                                        {alianza.description}
                                    </p>
                                </FadeIn>
                            </div>

                            {/* LADO DE LA IMAGEN */}
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto bg-slate-900 overflow-hidden group">
                                <Image 
                                    src={alianza.image} 
                                    alt={`Fondo ${alianza.name}`}
                                    fill
                                    className="object-cover opacity-20 blur-xl scale-110"
                                />

                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <FadeIn delay={200} className="relative w-full h-full max-w-sm max-h-sm flex items-center justify-center">
                                        <Image 
                                            src={alianza.image} 
                                            alt={`Banner ${alianza.name}`}
                                            fill
                                            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </FadeIn>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>

            <div className="h-24 bg-slate-950" />

        </div>
    )
}