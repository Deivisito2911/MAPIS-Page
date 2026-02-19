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
            <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mb-4">Nuestra Oferta Educativa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Un ecosistema de aprendizaje integral diseñado para cada etapa del desarrollo.
            </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Primaria */}
            <FadeIn delay={100} direction="up" className="h-full">
                <Link 
                    href="/academico/primaria" 
                    // OPTIMIZACIÓN: transition-shadow en lugar de transition-all
                    className="group relative block h-[400px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl [mask-image:linear-gradient(white,white)] transform-gpu"
                >
                <Image 
                    // OPTIMIZACIÓN: Añadido q_auto,f_auto,w_800 a la URL
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,c_scale,w_800/v1769692998/primaria_wo73tg.jpg" 
                    alt="Educación Primaria" 
                    fill 
                    // OPTIMIZACIÓN: transition-all cambiado a transition-transform y opacity, más transform-gpu
                    className="object-cover opacity-80 transition-[transform,opacity] duration-500 group-hover:scale-110 group-hover:opacity-100 transform-gpu" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    
                    <div className="mb-4 relative h-16 w-16 md:h-16 md:w-16 rounded-full shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 transform-gpu bg-mapis-blue flex-shrink-0">
                        <Image
                            // OPTIMIZACIÓN: Los iconos pueden ir con w_200 ya que son pequeños
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538490/primaria_k4niyt.jpg"
                            alt="Icono Primaria MAPIS"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>

                    <h3 className="mb-3 text-3xl font-bold text-white">Educación Primaria</h3>
                    <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                    Fomentamos la curiosidad y sentamos las bases del conocimiento.
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-mapis-blue">
                    Ver programa <ArrowRight className="h-5 w-5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* Bachillerato */}
            <FadeIn delay={200} direction="up" className="h-full">
                <Link 
                    href="/academico/bachillerato" 
                    className="group relative block h-[400px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl [mask-image:linear-gradient(white,white)] transform-gpu"
                >
                <Image 
                    // OPTIMIZACIÓN: Añadido q_auto,f_auto,w_800 a la URL
                    src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,c_scale,w_800/v1769693153/bachillerato_y8mtnk.jpg" 
                    alt="Bachillerato" 
                    fill 
                    className="object-cover opacity-80 transition-[transform,opacity] duration-500 group-hover:scale-110 group-hover:opacity-100 transform-gpu" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    
                    <div className="mb-4 relative h-16 w-16 md:h-16 md:w-16 rounded-full shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 transform-gpu bg-mapis-blue flex-shrink-0">
                        <Image 
                            // OPTIMIZACIÓN: Los iconos pueden ir con w_200 ya que son pequeños
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538509/bachillerato_plzgwc.jpg" 
                            alt="Icono Bachillerato MAPIS"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>

                    <h3 className="mb-3 text-3xl font-bold text-white">Bachillerato</h3>
                    <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                    Formación pre-universitaria con enfoque en ciencias y liderazgo.
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-mapis-blue">
                    Conocer más <ArrowRight className="h-5 w-5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* Vida MAPIS */}
            <FadeIn delay={300} direction="up" className="md:col-span-2 h-full">
                <Link 
                    href="/vida-mapis/selecciones" 
                    className="group relative block h-[400px] md:h-[350px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl [mask-image:linear-gradient(white,white)] transform-gpu"
                >
                <Image 
                    // ASUMIENDO QUE ES UNA IMAGEN LOCAL, SI ES CLOUDINARY PONLE LOS PARAMETROS TAMBIÉN
                    src="/happy-students-in-school-uniforms-studying.jpg" 
                    alt="Vida MAPIS" 
                    fill 
                    sizes="(max-width: 1200px) 100vw, 80vw" // Ayuda a Next.js a cargar la imagen correcta
                    className="object-cover opacity-80 transition-[transform,opacity] duration-500 group-hover:scale-110 group-hover:opacity-100 transform-gpu" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/95 via-mapis-blue/80 to-transparent md:bg-gradient-to-r md:from-mapis-blue/95 md:via-mapis-blue/70 md:to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/80" />
                
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:w-2/3 items-center text-center md:items-start md:text-left">
                    <div className="mb-4 relative h-16 w-16 md:h-16 md:w-16 rounded-full shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 transform-gpu bg-mapis-blue flex-shrink-0">
                        <Image 
                            // OPTIMIZACIÓN: Los iconos pueden ir con w_200 ya que son pequeños
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/q_auto,f_auto,w_200/v1771538503/vida_mapis_fbsmoi.jpg" 
                            alt="Icono Vida MAPIS"
                            fill
                            className="object-cover scale-110" 
                        />
                    </div>
                    
                    <h3 className="mb-2 text-3xl md:text-4xl font-bold text-white">Vida MAPIS</h3>
                    
                    <p className="mb-6 text-blue-100 opacity-95 transition-opacity duration-300 group-hover:opacity-100 text-base md:text-lg max-w-xl leading-relaxed">
                    Más allá del aula: desarrollamos talento y disciplina en deporte y cultura.
                    </p>
                    
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mapis-yellow px-8 py-3 text-base font-bold text-mapis-blue shadow-md transition-transform duration-300 hover:bg-white hover:scale-105 transform-gpu">
                    Explorar actividades <ArrowRight className="h-5 w-5" />
                    </span>
                </div>
                </Link>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}