import { Metadata } from "next"
import Image from "next/image" // <--- Importante: Agregamos esto
import Link from "next/link"
import { 
    FileText, 
    Users, 
    CheckCircle2, 
    Download, 
    CalendarDays,
    Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Admisiones 2025-2026 | U.E. Mariano Picón Salas",
    description: "Información sobre el proceso de inscripción, requisitos y fechas para nuevos ingresos.",
}

export default function AdmisionesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* 1. HERO: Encabezado */}
        <section className="relative bg-mapis-blue text-white py-20 overflow-hidden">
            {/* Fondo Hero */}
            <div className="absolute inset-0 opacity-20">
                <Image 
                    src="/kids-learning.jpg" 
                    alt="Fondo Admisiones" 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-mapis-yellow mb-6 border border-white/20">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-mapis-yellow"></span>
                </span>
                <span className="text-sm font-bold uppercase tracking-wider">Proceso Abierto 2025-2026</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Únete a la Familia MAPIS</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                Estamos ansiosos por conocer a los nuevos talentos que formarán parte de nuestra comunidad educativa.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* 2. LOS 3 PASOS (Con Fondo de Imagen Corregido) */}
        <section className="py-24 px-4 relative overflow-hidden">
            
            {/* --- CORRECCIÓN AQUÍ: Usamos <Image /> en lugar de CSS --- */}
            <div className="absolute inset-0">
                <Image 
                    src="/happy-students-in-school-uniforms-studying.jpg"
                    alt="Estudiantes estudiando"
                    fill
                    className="object-cover opacity-80" // Ajusta la opacidad si quieres más/menos intensidad
                />
            </div>
            {/* Capa blanca encima de la imagen para suavizar */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

            <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue mb-4">Tu camino hacia el MAPIS</h2>
                <p className="text-gray-700 font-medium text-lg">Un proceso de admisión diseñado para conocer el potencial de tu hijo.</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Línea conectora (solo en desktop) */}
                <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-gray-300 -z-10" />

                {/* Paso 1 */}
                <FadeIn delay={100} className="bg-white p-8 rounded-3xl shadow-xl border border-white/50 text-center relative group hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                    <FileText className="w-10 h-10 text-mapis-blue" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-mapis-yellow rounded-full flex items-center justify-center font-bold text-mapis-blue shadow-sm">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Preinscripción Online</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Completa el formulario digital con los datos básicos del estudiante y la familia.
                </p>
                </FadeIn>

                {/* Paso 2 */}
                <FadeIn delay={200} className="bg-white p-8 rounded-3xl shadow-xl border border-white/50 text-center relative group hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-yellow-600" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-mapis-yellow rounded-full flex items-center justify-center font-bold text-mapis-blue shadow-sm">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Entrevista Familiar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Coordinaremos una cita presencial para conocerlos y evaluar el perfil del alumno.
                </p>
                </FadeIn>

                {/* Paso 3 */}
                <FadeIn delay={300} className="bg-white p-8 rounded-3xl shadow-xl border border-white/50 text-center relative group hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-mapis-yellow rounded-full flex items-center justify-center font-bold text-mapis-blue shadow-sm">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Inscripción Formal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Entrega de recaudos administrativos y formalización del cupo.
                </p>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* 3. REQUISITOS Y DESCARGAS */}
        <section className="py-20 bg-white relative z-10">
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            
            <FadeIn direction="right">
                <h2 className="text-3xl font-bold text-mapis-blue mb-6">Requisitos de Admisión</h2>
                <p className="text-gray-600 mb-8 text-lg">
                Para formalizar la inscripción, deberás presentar los siguientes documentos en una carpeta manila:
                </p>
                
                <ul className="space-y-4 mb-8">
                {[
                    "Partida de Nacimiento (Copia legible)",
                    "Cédula de Identidad de los padres (Copia)",
                    "Boleta de Calificaciones del año anterior",
                    "Constancia de Buena Conducta",
                    "Fotos tipo carnet del estudiante (2)"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-mapis-yellow shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                ))}
                </ul>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-4 items-start shadow-sm">
                <CalendarDays className="w-6 h-6 text-mapis-blue shrink-0" />
                <div>
                    <h4 className="font-bold text-mapis-blue text-sm">Horario de Atención Administrativa</h4>
                    <p className="text-sm text-gray-600 mt-1">Lunes a Viernes: 7:30 AM - 12:30 PM</p>
                </div>
                </div>
            </FadeIn>

            <FadeIn direction="left" className="bg-warm-stone p-8 rounded-[2rem] border-2 border-dashed border-gray-300 text-center h-fit">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-gray-400">
                <Download className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Planilla de Inscripción</h3>
                <p className="text-gray-500 text-sm mb-6 px-4">
                Descarga, imprime y llena la planilla para agilizar tu proceso presencial.
                </p>
                <Button disabled variant="outline" className="w-full border-gray-300 text-gray-400 cursor-not-allowed bg-white/50">
                Próximamente disponible (PDF)
                </Button>
                <p className="text-xs text-gray-400 mt-3 font-medium">* El enlace se habilitará al iniciar el periodo.</p>
            </FadeIn>

            </div>
        </section>

        {/* 4. CTA FINAL */}
        <section className="py-24 bg-mapis-blue text-white text-center relative overflow-hidden">
            {/* Fondo Footer con Image Component para asegurar carga */}
            <div className="absolute inset-0 opacity-5">
                <Image 
                    src="/school-building-architecture-modern.jpg"
                    alt="Edificio MAPIS"
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-blue-100 mb-10 text-lg">
                Asegura el futuro académico de tus hijos en una institución comprometida con la excelencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Botón oficial de JotForm */}
                <Button asChild size="xl" className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 px-10 transition-all hover:scale-105">
                <Link 
                    href="https://form.jotform.com/U_EMapis/Formulario_de_PreInsripcion_Mapis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Llenar Planilla de Preinscripción
                </Link>
                </Button>

                <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-mapis-blue px-10 transition-all hover:scale-105 bg-transparent">
                <Link href="/contacto" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Contáctanos
                </Link>
                </Button>
            </div>
            </div>
        </section>

        </div>
    )
}