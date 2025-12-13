"use client"

import { Music } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

    export function AnthemSection() {
    return (
        <section className="py-24 bg-mapis-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mapis-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
            <FadeIn>
            <Music className="w-12 h-12 mx-auto text-mapis-yellow mb-6" />
            <h2 className="text-3xl font-bold mb-8">Himno del Colegio</h2>

            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md mb-12 shadow-xl">
                <p className="text-sm text-blue-200 mb-4 font-medium tracking-wide uppercase">Escuchar Himno Oficial</p>
                <audio controls className="w-full h-10 rounded-lg outline-none focus:ring-2 focus:ring-mapis-yellow">
                <source src="/himno.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
                </audio>
            </div>
            </FadeIn>

            <FadeIn delay={200} className="space-y-8 font-serif italic text-lg md:text-xl leading-relaxed text-blue-100 opacity-90 max-w-2xl mx-auto">
            <p>
                En el 2008, un sueño nació, Mariano Picón Salas,<br />
                sus puertas abrió, ladrillo a ladrillo, salón por salón,<br />
                de la mano de los padres el colegio creció.
            </p>
            <p>
                En su emblema lleva un violín y un libro,<br />
                pues en el MAPIS el arte es parte integral del niño.<br />
                Y un globo terráqueo, símbolo de expansión,<br />
                a nuevos horizontes, a la investigación.
            </p>
            <p className="font-bold text-mapis-yellow not-italic font-sans">
                MAPIS es mi segunda familia,<br />
                donde crecemos juntos cada día.<br />(x2)
            </p>
            <p>
                MAPIS es mi segundo hogar,<br />
                me enseña valores y conciencia ambiental.<br />
                Mariano Picón Salas cumple una gran misión,<br />
                formar ciudadanos completos que ayuden a la nación.
            </p>
            <p>
                MAPIS representa con orgullo y alegría,<br />
                calidad de innovación y tecnología.<br />
                Y en su escudo lleva escrito en latín:<br />
                "Ars, Veritas, Humanitas", ese es nuestro fin.
            </p>
            <p className="font-bold text-mapis-yellow not-italic font-sans">
                MAPIS es mi segunda familia,<br />
                donde crecemos juntos cada día.
            </p>
            </FadeIn>
        </div>
        </section>
    )
}