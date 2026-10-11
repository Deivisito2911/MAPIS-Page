"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react" 
import { FadeIn } from "@/components/animations/fade-in"

export function EducationalOffer() {
    return (
        <section className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
                <span className="text-mapis-orange font-bold tracking-widest uppercase text-sm block mb-2">Formación Integral</span>
                <h2 className="text-3xl md:text-5xl font-black text-mapis-blue tracking-tight uppercase">Nuestra Oferta Educativa</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-3 !text-center">
                    Un ecosistema de aprendizaje integral diseñado para cada etapa del desarrollo.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Primaria */}
            <FadeIn delay={100} direction="up" className="h-full">
                <Link 
                    href="/academico/primaria" 
                    className="group relative block h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg hover:shadow-[0_25px_50px_rgba(17,14,66,0.25)] border-2 border-transparent hover:border-mapis-yellow/70 transition-all duration-500 hover:-translate-y-2.5 transform-gpu"
                >
                {/* Badge Superior */}
                <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/30 shadow-sm transition-colors duration-300 group-hover:bg-mapis-yellow group-hover:text-mapis-blue group-hover:border-mapis-yellow">
                        1º a 6º Grado
                    </span>
                </div>

                <Image 
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,c_scale,w_800/v1769692998/primaria_wo73tg.jpg" 
                    alt="Educación Primaria" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu" 
                />
                
                {/* Degradado envolvente */}
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue via-mapis-blue/50 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    {/* Ícono de marca circular */}
                    <div className="mb-4 relative h-16 w-16 rounded-full shadow-lg overflow-hidden border-2 border-mapis-yellow/50 bg-mapis-blue flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 transform-gpu">
                        <Image
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538490/primaria_k4niyt.jpg"
                            alt="Icono Primaria MAPIS"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>

                    <h3 className="mb-2 text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-mapis-yellow transition-colors duration-300">
                        Educación Primaria
                    </h3>
                    <p className="mb-6 text-blue-100/90 text-sm md:text-base leading-relaxed max-w-md">
                        Fomentamos la curiosidad y sentamos las bases del conocimiento integral y valores.
                    </p>
                    
                    {/* Botón CTA Interactivo */}
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 border border-white/20 group-hover:bg-mapis-yellow group-hover:text-mapis-blue group-hover:border-mapis-yellow group-hover:shadow-lg">
                        Ver programa 
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* 2. Bachillerato */}
            <FadeIn delay={200} direction="up" className="h-full">
                <Link 
                    href="/academico/bachillerato" 
                    className="group relative block h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg hover:shadow-[0_25px_50px_rgba(17,14,66,0.25)] border-2 border-transparent hover:border-mapis-yellow/70 transition-all duration-500 hover:-translate-y-2.5 transform-gpu"
                >
                {/* Badge Superior */}
                <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/30 shadow-sm transition-colors duration-300 group-hover:bg-mapis-yellow group-hover:text-mapis-blue group-hover:border-mapis-yellow">
                        1º a 5º Año
                    </span>
                </div>

                <Image 
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,c_scale,w_800/v1769693153/bachillerato_y8mtnk.jpg" 
                    alt="Bachillerato" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu" 
                />
                
                {/* Degradado envolvente */}
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue via-mapis-blue/50 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    {/* Ícono de marca circular */}
                    <div className="mb-4 relative h-16 w-16 rounded-full shadow-lg overflow-hidden border-2 border-mapis-yellow/50 bg-mapis-blue flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 transform-gpu">
                        <Image 
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538509/bachillerato_plzgwc.jpg" 
                            alt="Icono Bachillerato MAPIS"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>

                    <h3 className="mb-2 text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-mapis-yellow transition-colors duration-300">
                        Bachillerato
                    </h3>
                    <p className="mb-6 text-blue-100/90 text-sm md:text-base leading-relaxed max-w-md">
                        Formación pre-universitaria integral con enfoque en ciencias, idiomas y liderazgo.
                    </p>
                    
                    {/* Botón CTA Interactivo */}
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 border border-white/20 group-hover:bg-mapis-yellow group-hover:text-mapis-blue group-hover:border-mapis-yellow group-hover:shadow-lg">
                        Conocer más 
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* 3. Vida MAPIS */}
            <FadeIn delay={300} direction="up" className="md:col-span-2 h-full">
                <Link 
                    href="/vida-mapis/selecciones" 
                    className="group relative block h-[420px] md:h-[360px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg hover:shadow-[0_25px_50px_rgba(17,14,66,0.25)] border-2 border-transparent hover:border-mapis-yellow/70 transition-all duration-500 hover:-translate-y-2.5 transform-gpu"
                >
                {/* Badge Superior */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/30 shadow-sm transition-colors duration-300 group-hover:bg-mapis-yellow group-hover:text-mapis-blue group-hover:border-mapis-yellow">
                        Vida Escolar & Selecciones
                    </span>
                </div>

                <Image 
                    src="/happy-students-in-school-uniforms-studying.jpg" 
                    alt="Vida MAPIS" 
                    fill 
                    sizes="(max-width: 1200px) 100vw, 80vw"
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu" 
                />
                
                {/* Degradado envolvente en desktop horizontal y en móvil vertical */}
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/95 via-mapis-blue/80 to-transparent md:bg-gradient-to-r md:from-mapis-blue/95 md:via-mapis-blue/75 md:to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/80" />
                
                <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:p-12 lg:w-2/3 items-start text-left z-10">
                    {/* Ícono de marca circular */}
                    <div className="mb-4 relative h-16 w-16 rounded-full shadow-lg overflow-hidden border-2 border-mapis-yellow/50 bg-mapis-blue flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 transform-gpu">
                        <Image 
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538503/vida_mapis_fbsmoi.jpg" 
                            alt="Icono Vida MAPIS"
                            fill
                            className="object-cover scale-110" 
                        />
                    </div>
                    
                    <h3 className="mb-2 text-2xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-mapis-yellow transition-colors duration-300">
                        Vida MAPIS
                    </h3>
                    
                    <p className="mb-6 text-blue-100/95 text-sm md:text-lg max-w-xl leading-relaxed">
                        Más allá del aula: desarrollamos talento, liderazgo y disciplina en deporte, robótica, debate y cultura.
                    </p>
                    
                    {/* Botón CTA Interactivo */}
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mapis-yellow px-7 py-3 text-sm md:text-base font-bold text-mapis-blue shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:bg-white group-hover:scale-105 border border-mapis-yellow transform-gpu">
                        Explorar actividades 
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
                </Link>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}