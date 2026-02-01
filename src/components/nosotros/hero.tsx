"use client"

import { FadeIn } from "@/components/animations/fade-in"

export function AboutHero() {
    return (
        <section className="relative bg-mapis-blue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dnwyno39r/image/upload/v1769693280/colegio_fniulu.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-warm-cream"></path>
            </svg>
        </div>
        <FadeIn className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-mapis-yellow font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-sm">
            Nuestra Cultura
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IDENTIDAD MAPIS</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Más que un colegio, somos una comunidad transformadora comprometida con la excelencia y el crecimiento humano.
            </p>
        </FadeIn>
        </section>
    )
}