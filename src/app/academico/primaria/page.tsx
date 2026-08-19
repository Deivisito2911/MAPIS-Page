"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { CurvedArrow } from "@/components/ui/curved-arrow"
import { Button } from "@/components/ui/button"
import { 
    BookOpen, 
    Brain, 
    Users, 
    Heart, 
    Sun, 
    Palette, 
    Cpu, 
    Globe,
    UserCheck,
    Clock,
    Trophy,
    Award,
    Lightbulb,
    Shield,
    Zap,
    Rocket
} from "lucide-react"

// Agregamos títulos cortos y colores (border y bg) a cada punto para que la línea de tiempo se vea increíble
const UNIQUE_FEATURES = [
    { title: "🌟 Jornadas Inspiradoras", color: "bg-yellow-400", border: "border-yellow-400", icon: Sun, text: "En MAPIS, cada jornada está cuidadosamente diseñada para inspirar, retar y transformar a nuestros estudiantes." },
    { title: "⏰ Programa Integral", color: "bg-blue-500", border: "border-blue-500", icon: Clock, text: "Ofrecemos un programa integral, de 8:00 a.m a 3:45 p.m., diseñado para equilibrar el aprendizaje y el bienestar, a través de experiencias significativas." },
    { title: "🌎 Programa Bilingüe", color: "bg-purple-500", border: "border-purple-500", icon: Globe, text: "Nuestro Programa Bilingüe abarca 8 horas semanales de inglés, para fortalecer las competencias comunicativas: reading, writing, speaking & listening." },
    { title: "⚽ Deporte y Recreación", color: "bg-green-500", border: "border-green-500", icon: Trophy, text: "La práctica deportiva es muy importante dentro de nuestro programa como parte de la recreación y el trabajo en equipo. Nuestro slogan: Juega Limpio, Juega Mejor, resume a la perfección el enfoque que le damos." },
    { title: "🤖 Maker Space & STEAM", color: "bg-orange-500", border: "border-orange-500", icon: Cpu, text: "Contamos con un MAKER SPACE, en el que la robótica, tecnología y programación convergen bajo el enfoque STEAM. De 1ro a 6to Grado, todos participan y quienes destacan pueden unirse a la Selección de Robótica MAPIS y representar al colegio en competencias de alto nivel." },
    { title: "🎨 Apreciación Artística", color: "bg-pink-500", border: "border-pink-500", icon: Palette, text: "La apreciación artística es clave para formar individuos sensibles, es por ello que de 1ro a 3er Grado nuestros estudiantes reciben clases de artes plásticas, lenguaje musical, flauta dulce y cuatro y de 4to a 6to Grado, los estudiantes eligen Clubes según intereses y aptitudes. Nuestra oferta incluye Canto y Voces, Cuatro, Teatro y Baile un abanico de posibilidades para fortalecer sus talentos." },
    { title: "📚 Habilidades Esenciales", color: "bg-teal-500", border: "border-teal-500", icon: BookOpen, text: "Fortalecemos las habilidades lingüísticas y matemáticas esenciales para comprender, expresar, analizar y resolver." },
    { title: "🏆 Mejora Continua", color: "bg-red-500", border: "border-red-500", icon: Award, text: "Promovemos una cultura de mejora continua, mediante desafíos y concursos académicos que impulsan y fortalecen la confianza, el esfuerzo y el deseo de superación." },
    { title: "💡 Ambientes Especializados", color: "bg-indigo-500", border: "border-indigo-500", icon: Lightbulb, text: "Ofrecemos ambientes especializados de aprendizaje como el Math Lab, el Global Studies Center, Maker Space o el Mapis HUB que invitan a explorar, crear y pensar de forma crítica." },
    { title: "🛡️ Desarrollo del Carácter", color: "bg-emerald-500", border: "border-emerald-500", icon: Shield, text: "Promovemos hábitos positivos, autocontrol, responsabilidad y educación financiera, a través de nuestro Programa de Desarrollo del Carácter que enseña a nuestros estudiantes el valor del esfuerzo, el ahorro y la toma de decisiones responsables." }
]

const WHY_MAPIS = [
    { title: "ATENCIÓN PERSONALIZADA", icon: UserCheck, text: "Mapis es una comunidad cercana, conocemos a cada estudiante y a su familia. Eso nos permite identificar sus fortalezas, atender sus necesidades y favorecer su desarrollo pleno, potenciando sus talentos." },
    { title: "HABILIDADES PARA LA VIDA", icon: Brain, text: "Desarrollamos competencias personales, sociales y emocionales que permiten a nuestros estudiantes liderar, colaborar, comunicarse efectivamente y afrontar con éxito los desafíos de la vida." },
    { title: "APRENDIZAJE ACTIVO", icon: Zap, text: "Nuestros estudiantes aprenden haciendo, explorando, creando y resolviendo problemas reales. Así se construye un aprendizaje significativo y duradero." },
    { title: "BIENESTAR SOCIOEMOCIONAL", icon: Heart, text: "Promovemos un ambiente seguro y cercano donde cada estudiante se siente visto, valorado y acompañado. Cuidamos el desarrollo emocional tanto como el académico." },
    { title: "PREPARACIÓN PARA EL FUTURO", icon: Rocket, text: "Formamos a nuestros estudiantes con herramientas académicas, humanas y tecnológicas necesarias para desenvolverse con éxito en un mundo en constante evolución." },
    { title: "COMUNIDAD QUE EDUCA EN CONJUNTO", icon: Users, text: "Trabajamos en alianza con las familias, acompañado de manera cercana el desarrollo integral de cada estudiante." },
]

export default function PrimariaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-cream">
        
        {/* 1. HERO: EMOCIONAL Y FAMILIAR */}
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <Image
            src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771538547/fondo_pagina_web_BEIGE_xk6c1x.jpg"
            alt="Fondo utiles MAPIS"
            fill
            className="object-cover brightness-50"
            priority
            />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
            <FadeIn>
                <span className="inline-block py-1 px-4 rounded-full bg-mapis-yellow text-mapis-blue text-sm font-bold tracking-widest uppercase mb-4 shadow-lg border border-white/20">
                Etapa Primaria (1º a 6º Grado)
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg leading-tight uppercase">
                La tierra fértil para <br/>
                <span className="text-mapis-yellow italic uppercase">plantar el futuro</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-blue-50 max-w-2xl mx-auto !text-center">
                Más que materias, enseñamos a pensar, crear y convivir en un ambiente seguro y estimulante.
                </p>
            </FadeIn>
            </div>
            
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-warm-cream"></path>
            </svg>
            </div>
        </section>

        {/* 2. ENFOQUE */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right">
                <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
                    <Image src="/happy-students-in-school-uniforms-studying.jpg" alt="Primaria MAPIS" fill className="object-cover" />
                </div>
                </FadeIn>
                
                <FadeIn direction="left" className="space-y-6">
                <h2 className="text-3xl font-bold text-mapis-blue leading-tight uppercase">
                    CRECIMIENTO INTEGRAL <br/>
                    <span className="text-mapis-yellow">Y GLOBAL</span>
                </h2>
                <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
                    <p>
                    En la etapa de Educación Primaria acompañamos a nuestros estudiantes en el desarrollo de competencias, habilidades y valores que les permitan crecer como personas íntegras, curiosas y comprometidas con su entorno. 
                    </p>
                    <p>
                    Mediante experiencias de aprendizaje significativas, promovemos el <strong>pensamiento crítico</strong>, la <strong>creatividad</strong>, la <strong>colaboración</strong> y la <strong>autonomía</strong>, integrando las distintas áreas del conocimiento.
                    </p>
                    <p>
                    Completamos este proceso con la formación artística, deportiva, tecnológica y el aprendizaje de idiomas, formando niños preparados para aprender durante toda la vida y desenvolverse con confianza en un entorno local y global.
                    </p>
                </div>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* FLECHA CONECTORA */}
        <CurvedArrow direction="right" className="text-mapis-yellow/50" />

        {/* 3. LÍNEA DE TIEMPO: QUÉ HACE ÚNICA A NUESTRA PRIMARIA */}
        <section className="py-16 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <span className="text-mapis-yellow font-bold uppercase tracking-widest text-sm">Nuestro Día a Día</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mt-2">¿Qué hace única a nuestra Primaria?</h2>
                    <p className="text-gray-600 mt-2 !text-center">10 pilares fundamentales que transforman la experiencia educativa.</p>
                </FadeIn>

                <div className="relative">
                    {/* Línea central */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mapis-yellow/20 via-mapis-yellow to-mapis-yellow/20 -translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {UNIQUE_FEATURES.map((item, idx) => {
                            // Alternar entre izquierda y derecha basado en el índice
                            const isEven = idx % 2 === 0;
                            
                            return (
                                <FadeIn 
                                    key={idx} 
                                    direction="up" 
                                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-8 relative`}
                                >
                                    {/* Tarjeta de Contenido */}
                                    <div className={`md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border-t-4 ${item.border} text-center ${isEven ? 'md:text-right' : 'md:text-left'} hover:-translate-y-1 transition-transform`}>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                    
                                    {/* Ícono central flotante */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 ${item.color} rounded-full items-center justify-center text-white shadow-lg z-10 hover:scale-110 transition-transform`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    
                                    {/* Espaciador vacío para el otro lado */}
                                    <div className="md:w-5/12" />
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* 4. POR QUÉ ELEGIR MAPIS */}
        <section className="py-24 px-4 bg-warm-cream border-t border-gray-100/50">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <span className="text-mapis-yellow font-bold uppercase tracking-widest text-sm mb-2 block">Nuestra Promesa</span>
                    <h2 className="text-4xl font-bold text-mapis-blue">¿Por qué elegir Mapis?</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_MAPIS.map((item, idx) => (
                        <FadeIn 
                            key={idx} 
                            delay={idx * 100} 
                            className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border-t-4 border-mapis-yellow transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-mapis-blue mb-6 group-hover:rotate-12 transition-transform">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.text}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. CTA FINAL */}
        <section className="bg-mapis-blue py-16 px-4 text-center mt-auto">
            <FadeIn>
            <Heart className="w-12 h-12 text-mapis-yellow mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-6">
                Queremos conocer a tu familia
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg !text-center">
                Te invitamos a recorrer nuestras instalaciones y ver en persona cómo aprenden nuestros alumnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold text-lg px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <Link href="/admisiones">Solicitar Información</Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-mapis-blue bg-transparent font-bold text-lg px-8 rounded-full">
                <Link href="/instalaciones">Ver Instalaciones</Link>
                </Button>
            </div>
            </FadeIn>
        </section>

        </div>
    )
}