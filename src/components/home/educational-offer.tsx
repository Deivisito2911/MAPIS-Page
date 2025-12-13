"use client"

import Link from "next/link"
import Image from "next/image"
import { BookOpen, GraduationCap, Trophy, Music, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function EducationalOffer() {
    return (
        <section className="py-24 bg-[#F5F5F0]"> {/* Fondo Warm Stone */}
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
                <Link href="/academico/primaria" className="group relative block h-[400px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-all hover:shadow-2xl">
                <Image src="/kids-learning.jpg" alt="Educación Primaria" fill className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-3xl font-bold text-white">Educación Primaria</h3>
                    <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                    Fomentamos la curiosidad y sentamos las bases del conocimiento.
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-mapis-blue">
                    Ver programa <ArrowRight className="h-5 w-5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* Bachillerato */}
            <FadeIn delay={200} direction="up" className="h-full">
                <Link href="/academico/bachillerato" className="group relative block h-[400px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-all hover:shadow-2xl">
                <Image src="/school-building-architecture-modern.jpg" alt="Bachillerato" fill className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-3xl font-bold text-white">Bachillerato</h3>
                    <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                    Formación pre-universitaria con enfoque en ciencias y liderazgo.
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-mapis-blue">
                    Conocer más <ArrowRight className="h-5 w-5" />
                    </span>
                </div>
                </Link>
            </FadeIn>

            {/* Vida MAPIS */}
            <FadeIn delay={300} direction="up" className="md:col-span-2 h-full">
                <Link href="/vida-mapis/selecciones" className="group relative block h-[350px] md:h-[350px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl transition-all hover:shadow-2xl">
                <Image src="/happy-students-in-school-uniforms-studying.jpg" alt="Vida MAPIS" fill className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/95 via-mapis-blue/80 to-transparent md:bg-gradient-to-r md:from-mapis-blue/95 md:via-mapis-blue/70 md:to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/80" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:w-2/3 items-center text-center md:items-start md:text-left">
                    <div className="flex gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg"><Trophy className="h-6 w-6" /></div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100/90 text-purple-700 shadow-lg"><Music className="h-6 w-6" /></div>
                    </div>
                    <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">Vida MAPIS: Deporte y Cultura</h3>
                    <p className="mb-8 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 text-lg max-w-xl">
                    Más allá del aula: desarrollamos el talento y la disciplina a través de nuestras selecciones deportivas y grupos artísticos.
                    </p>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mapis-yellow px-8 py-4 text-base font-bold text-mapis-blue shadow-md transition-all hover:bg-white hover:scale-105">
                    Explorar actividades <ArrowRight className="h-6 w-6" />
                    </span>
                </div>
                </Link>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}