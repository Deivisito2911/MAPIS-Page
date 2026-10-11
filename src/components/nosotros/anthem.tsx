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

            <FadeIn delay={200} className="space-y-8 font-serif italic text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose text-blue-100 opacity-95 max-w-2xl mx-auto text-center px-4 sm:px-6">
            {/* Letra del Himno del Colegio Mariano Picón Salas */}
            <p>
                En el 2008, un sueño nació,<br />
                Mariano Picón Salas sus puertas abrió,<br />
                Ladrillo a ladrillo, salón por salón,<br />
                De la mano de los padres el colegio creció.
            </p>
            <p>
                En su emblema lleva un violín y un libro,<br />
                Pues en el MAPIS el arte es parte integral del niño,<br />
                Y un globo terráqueo, símbolo de expansión,<br />
                A nuevos horizontes, a la investigación.
            </p>
            <p className="font-bold text-mapis-yellow not-italic font-sans text-lg sm:text-xl md:text-2xl tracking-wide py-2">
                MAPIS es mi segunda familia,<br />
                Donde crecemos juntos cada día.<br />
                <span className="text-sm md:text-base opacity-80 font-normal">(x2)</span>
            </p>
            <p>
                MAPIS es mi segundo hogar,<br />
                Me enseña valores y conciencia ambiental,<br />
                Mariano Picón Salas cumple una gran misión,<br />
                Formar ciudadanos completos que ayuden a la nación.
            </p>
            <p>
                MAPIS representa con orgullo y alegría,<br />
                Calidad de innovación y tecnología,<br />
                Y en su escudo lleva escrito en latín:<br />
                <span className="text-white font-semibold">"Ars, Veritas, Humanitas"</span>, ese es nuestro fin.
            </p>
            <p className="font-bold text-mapis-yellow not-italic font-sans text-lg sm:text-xl md:text-2xl tracking-wide pt-2">
                MAPIS es mi segunda familia,<br />
                Donde crecemos juntos cada día.
            </p>
            </FadeIn>
        </div>
        </section>
    )
}