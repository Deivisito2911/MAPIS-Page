"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export function CallToAction() {
    return (
        <FadeIn delay={200} direction="up" className="py-24 bg-mapis-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/kids-learning.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">¿Listo para formar parte de la familia MAPIS?</h2>
            <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
            El proceso de admisión 2025-2026 está abierto. Agenda una visita y descubre por qué somos el mejor lugar para el crecimiento de tus hijos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="xl" className="bg-mapis-yellow text-mapis-blue hover:bg-white hover:scale-105 transition-all font-bold text-lg px-10 shadow-lg shadow-yellow-500/20">
                Iniciar Admisión Online
            </Button>
            <Button size="xl" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-mapis-blue hover:scale-105 transition-all font-bold text-lg px-10">
                Solicitar Visita Guiada
            </Button>
            </div>
        </div>
        </FadeIn>
    )
}