"use client"

import { Heart } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function ValuesSection() {
    const valores = [
        "Orgullo MAPIS", "Ética Profesional", "Honestidad", "Vocación de Servicio", "Respeto",
        "Excelencia", "Responsabilidad", "Superación", "Trabajo en Equipo", "Innovación"
    ]

    return (
        <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mapis-blue mb-4">Valores que nos unen</h2>
            <p className="text-gray-600 !text-center">Los pilares fundamentales de nuestra convivencia.</p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valores.map((valor, idx) => (
                <FadeIn key={idx} delay={idx * 50} className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100 hover:border-mapis-yellow hover:bg-yellow-50 transition-colors cursor-default">
                <Heart className="w-5 h-5 text-mapis-yellow mx-auto mb-2" />
                <span className="font-semibold text-gray-700 text-sm">{valor}</span>
                </FadeIn>
            ))}
            </div>
        </div>
        </section>
    )
}