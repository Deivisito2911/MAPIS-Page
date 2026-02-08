"use client"

import { BookOpen, Lightbulb, Users, BadgeCheck, Heart, GraduationCap, Sparkles, Trophy, Smile } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function ProfilesSection() {
    return (
        <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mapis-blue">El ADN MAPIS</h2>
            <p className="text-gray-600 mt-2 !text-center">Lo que define a nuestra gente.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
            {/* Perfil Docente */}
            <FadeIn direction="right" className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-100 w-32 h-32 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-full shadow-sm text-mapis-blue"><BookOpen className="w-8 h-8" /></div>
                    <h3 className="text-2xl font-bold text-mapis-blue">Perfil del Docente</h3>
                </div>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                    <Lightbulb className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Creativo e Innovador</h4><p className="text-sm text-gray-600">Diseña metodologías activas para desarrollar habilidades blandas.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <Users className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Colaborativo</h4><p className="text-sm text-gray-600">Construye confianza con estudiantes y familias.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Reflexivo</h4><p className="text-sm text-gray-600">Evalúa su práctica y se adapta a las necesidades del alumno.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <Heart className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Comprometido</h4><p className="text-sm text-gray-600">Conciencia social y ambiental.</p></div>
                    </li>
                </ul>
                </div>
            </FadeIn>

            {/* Perfil Alumno */}
            <FadeIn direction="left" className="bg-yellow-50/50 rounded-[2.5rem] p-8 md:p-12 border border-yellow-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-100 w-32 h-32 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-full shadow-sm text-yellow-600"><GraduationCap className="w-8 h-8" /></div>
                    <h3 className="text-2xl font-bold text-yellow-700">Perfil del Alumno</h3>
                </div>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                    <Sparkles className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Curioso y Crítico</h4><p className="text-sm text-gray-600">Automotivado por aprender e innovar.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <BadgeCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Ciudadano Ético</h4><p className="text-sm text-gray-600">Sólida formación en valores democráticos.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <Trophy className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Espíritu de Excelencia</h4><p className="text-sm text-gray-600">Emprendedor y sanamente competitivo.</p></div>
                    </li>
                    <li className="flex gap-4">
                    <Smile className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                    <div><h4 className="font-bold text-gray-800">Comunicador</h4><p className="text-sm text-gray-600">Oratoria, buenos modales y sentido de pertenencia.</p></div>
                    </li>
                </ul>
                </div>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}