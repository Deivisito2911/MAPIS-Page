"use client"

import { Sparkles, Star, Globe, Trophy } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function IdentitySection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mapis-blue">Nuestro Norte</h2>
            <div className="w-20 h-1.5 bg-mapis-yellow mx-auto rounded-full mt-4"></div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
            {/* Propósito */}
            <FadeIn delay={100} className="lg:col-span-3 bg-gradient-to-r from-mapis-blue to-blue-900 rounded-[2.5rem] p-10 text-white shadow-xl text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-32 h-32" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                    <Star className="w-8 h-8 text-mapis-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-mapis-yellow">Nuestro Propósito</h3>
                <p className="text-xl leading-relaxed font-light">
                    "Formar ciudadanos ejemplares, críticos, creativos y comprometidos con su entorno, capaces de enfrentar los desafíos del siglo XXI y contribuir al desarrollo sostenible de la sociedad."
                </p>
                </div>
            </FadeIn>

            {/* Misión */}
            <FadeIn delay={200} className="bg-warm-cream border border-orange-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                "Somos un colegio transformador, formamos ciudadanos ejemplares, cultivando una mentalidad de crecimiento, una profunda curiosidad y un compromiso inquebrantable con la excelencia."
                </p>
            </FadeIn>

            {/* Visión */}
            <FadeIn delay={300} className="bg-warm-cream border border-blue-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 lg:col-span-2">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-mapis-blue">
                <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Visión</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                "Ser reconocidos como una institución de calidad académica, por su aporte a la comunidad margariteña de una propuesta integral de educación."
                </p>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}