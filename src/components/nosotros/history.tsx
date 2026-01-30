"use client"

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"

export function HistorySection() {
    return (
        <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-mapis-blue">Nuestra Historia</h2>
            <div className="prose text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                La <strong className="text-mapis-blue">U.E. Mariano Picón Salas</strong> fue fundada el <strong>1 de septiembre de 2008</strong> en la Isla de Margarita. Iniciamos como un sueño de educación básica con aulas de 1ero, 2do y 3er grado.
                </p>
                <p>
                Con el compromiso de nuestra comunidad, ampliamos progresivamente nuestra oferta hasta consolidar la <strong>Educación Primaria</strong> (1º a 6º grado) y la <strong>Educación Media General</strong> (1º a 5º año), convirtiéndonos en una referencia educativa en Nueva Esparta.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-mapis-blue mt-6">
                <p className="text-sm italic text-gray-700">
                    "Honramos la memoria de <strong>Mariano Picón Salas</strong> (1901–1965), ilustre escritor y diplomático venezolano, promotor de la educación humanista y fundador de la Facultad de Humanidades de la UCV."
                </p>
                </div>
            </div>
            </FadeIn>
            
            <FadeIn direction="left" className="relative h-[400px] md:h-[500px] order-1 md:order-2">
            <div className="absolute inset-0 bg-mapis-yellow/20 rounded-[2rem] rotate-3 transform transition-transform group-hover:rotate-0"></div>
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769709450/Principal_del_colegio_icjucm.jpg"
                alt="Historia del MAPIS"
                fill
                className="object-cover"
                />
            </div>
            </FadeIn>
        </div>
        </section>
    )
}