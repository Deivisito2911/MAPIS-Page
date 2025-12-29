import { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, Target } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Modelo Educativo | U.E. Mariano Picón Salas",
    description: "Nuestros objetivos y filosofía educativa.",
}

export default function ModeloEducativoPage() {
    const objetivos = [
        "Ofrecer un servicio educativo de calidad, que impulse en su Comunidad Educativa el desarrollo artístico, cultural y deportivo, aportando a la sociedad ciudadanos con sólidos valores morales.",
        "Impulsar las habilidades del pensamiento y razonamiento para la obtención del mayor rendimiento académico, individual y colectivo.",
        "Promover la sensibilidad y el aprecio por las artes, la música y la literatura para lograr el desarrollo de una conciencia estética.",
        "Propiciar un espíritu de cooperación y promover una buena comunicación entre los miembros de la Comunidad Educativa.",
        "Atender a la diversidad, respetando las diferencias individuales (físicas, culturales y religiosas), a través de una atención individual y diferenciada.",
        "Fomentar valores y principios morales para la formación de ciudadanos capaces de participar activamente en la transformación de la sociedad democrática.",
        "Inspirar el respeto mutuo y la defensa del medio ambiente, animando a nuestros estudiantes a considerarse ciudadanos del mundo.",
        "Crear una dinámica entre el colegio y la familia bajo el criterio: 'Educar es Regla de Tres'."
    ]

    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* HERO */}
        <section className="relative bg-mapis-blue text-white py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
            <Image src="/kids-learning.jpg" alt="Modelo Educativo" fill className="object-cover" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-mapis-yellow mb-6 border border-white/20">
                <Target className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Nuestra Misión</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Objetivos Institucionales</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                Buscamos ser reconocidos como una Institución de calidad académica por nuestro aporte integral a la comunidad margariteña.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* LISTA DE OBJETIVOS */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {objetivos.map((objetivo, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                    <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-mapis-yellow" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    {objetivo}
                    </p>
                </FadeIn>
                ))}
            </div>
            </div>
        </section>
        </div>
    )
    }