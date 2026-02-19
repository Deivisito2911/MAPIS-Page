"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export function AboutSummary() {
    return (
        <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right" delay={200} className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mapis-yellow rounded-[2rem]" />
                <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-lg group">  {/* Imagen del colegio */}
                <Image src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769709450/Principal_del_colegio_icjucm.jpg" alt="Campus MAPIS" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
            </FadeIn>

            <FadeIn direction="left" delay={400}>
                <h4 className="text-mapis-yellow font-bold uppercase tracking-widest text-sm mb-2">Nuestra Esencia</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mb-6 leading-tight">
                Un colegio transformador
                </h2>
                <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed font-medium text-gray-700">
                    Formamos ciudadanos ejemplares, cultivando una mentalidad de crecimiento, una profunda curiosidad y un compromiso inquebrantable con la excelencia.
                </p>
                
                <div className="flex flex-col gap-4">
                    {/* Propósito - NUEVO ICONO */}
                    <div className="flex gap-4 items-start bg-warm-cream p-4 rounded-xl border border-yellow-100">
                        {/* Se ajustó el padding (p-1) y se le dio tamaño fijo (w-10 h-10) al contenedor */}
                        <div className="relative w-15 h-15 bg-yellow-100 p-1 rounded-lg shrink-0 overflow-hidden">
                            <Image 
                                src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771541682/proposito-removebg-preview_l0v1de.png" /* <--- PEGA AQUÍ EL LINK DEL ICONO DE PROPÓSITO */
                                alt="Icono Propósito"
                                fill
                                className="object-contain p-1.5" // object-contain para que el icono no se corte, y p-1.5 para darle aire
                            />
                        </div>
                        <div>
                            <h5 className="font-bold text-mapis-blue">Propósito</h5>
                            <p className="text-sm">Formar ciudadanos críticos, creativos y comprometidos con el desarrollo sostenible.</p>
                        </div>
                    </div>
                    
                    {/* Visión - NUEVO ICONO */}
                    <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl border border-blue-100">
                        {/* Se ajustó el padding (p-1) y se le dio tamaño fijo (w-10 h-10) al contenedor */}
                        <div className="relative w-15 h-15 bg-blue-100 p-1 rounded-lg shrink-0 overflow-hidden">
                            <Image 
                                src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771541680/vision-removebg-preview_s5pnpf.png" /* <--- PEGA AQUÍ EL LINK DEL ICONO DE VISIÓN */
                                alt="Icono Visión"
                                fill
                                className="object-contain p-1.5" // object-contain para que el icono no se corte, y p-1.5 para darle aire
                            />
                        </div>
                        <div>
                            <h5 className="font-bold text-mapis-blue">Visión</h5>
                            <p className="text-sm">Ser reconocidos por nuestro aporte de una propuesta integral de educación.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button asChild variant="outline" size="lg" className="border-2 border-mapis-blue text-mapis-blue hover:bg-mapis-blue hover:text-white font-bold transition-all rounded-full">
                    <Link href="/nosotros">Conoce nuestra historia completa</Link>
                    </Button>
                </div>
                </div>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}