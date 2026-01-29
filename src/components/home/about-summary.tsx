"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Trophy, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function AboutSummary() {
    return (
        <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right" delay={200} className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mapis-yellow rounded-[2rem]" />
                <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-lg group">  {/* Imagen del colegio */}
                <Image src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769693280/colegio_fniulu.jpg" alt="Campus MAPIS" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
                    {/* Propósito - NUEVO */}
                    <div className="flex gap-4 items-start bg-warm-cream p-4 rounded-xl border border-yellow-100">
                        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 shrink-0"><Star className="w-5 h-5"/></div>
                        <div>
                            <h5 className="font-bold text-mapis-blue">Propósito</h5>
                            <p className="text-sm">Formar ciudadanos críticos, creativos y comprometidos con el desarrollo sostenible.</p>
                        </div>
                    </div>
                    
                    {/* Visión - ACTUALIZADA */}
                    <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="bg-blue-100 p-2 rounded-lg text-mapis-blue shrink-0"><Trophy className="w-5 h-5"/></div>
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