import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { CurvedArrow } from "@/components/ui/curved-arrow"
import { Button } from "@/components/ui/button"
import { 
    Atom, 
    Beaker, 
    BookOpen, 
    Brain, 
    Briefcase, 
    Compass, 
    GraduationCap, 
    Microscope, 
    Rocket, 
    Users 
} from "lucide-react"

export default function BachilleratoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-cream">
        
        {/* 1. HERO: ASPIRACIONAL */}
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <Image
            src="/school-building-architecture-modern.jpg" // Foto de adolescentes en laboratorio o pasillo
            alt="Estudiantes de Bachillerato MAPIS"
            fill
            className="object-cover brightness-50"
            priority
            />
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
            <FadeIn>
                <span className="inline-block py-1 px-4 rounded-full bg-mapis-blue text-white border border-white/20 text-sm font-bold tracking-widest uppercase mb-4 shadow-lg">
                Educación Media General (1º a 5º Año)
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg leading-tight">
                Construyendo el camino hacia la <br/>
                <span className="text-mapis-yellow italic">Excelencia Universitaria</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto">
                Una etapa de retos, descubrimiento vocacional y alto rendimiento académico.
                </p>
            </FadeIn>
            </div>
            
            {/* Curva decorativa */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-warm-cream"></path>
            </svg>
            </div>
        </section>

        {/* 2. PILARES ACADÉMICOS */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue">Formación Integral</h2>
                <p className="text-gray-600 text-lg mt-2">Equilibrio entre ciencias exactas, humanidades y tecnología.</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
                <FadeIn delay={100} className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-blue-600 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Microscope className="w-7 h-7 text-mapis-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ciencias y Laboratorios</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Prácticas semanales en nuestros laboratorios de Biología, Física y Química para aprender experimentando.
                </p>
                </FadeIn>

                <FadeIn delay={200} className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-yellow-500 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Rocket className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnología y Robótica</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Programación avanzada, diseño 3D y participación en competencias de robótica en el Salón Maker.
                </p>
                </FadeIn>

                <FadeIn delay={300} className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-purple-500 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Brain className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pensamiento Crítico</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Debates, oratoria y proyectos de investigación que preparan al estudiante para defender sus ideas.
                </p>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* FLECHA CONECTORA */}
        <CurvedArrow direction="right" className="text-mapis-blue/30" />

        {/* 3. LA JORNADA DEL LICEO (Timeline) */}
        <section className="py-16 px-4 relative">
            <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
                <span className="text-mapis-blue font-bold uppercase tracking-widest text-sm">Rutina de Alto Rendimiento</span>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Un día en Bachillerato</h2>
            </FadeIn>

            <div className="relative">
                {/* Línea central */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

                <div className="space-y-16">
                
                {/* Bloque 1 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    <div className="md:w-5/12 text-center md:text-right">
                    <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
                        <Atom className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-mapis-blue">Bloque Científico-Humanista</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        La mañana se dedica a las asignaturas fundamentales. Matemáticas, Física, Historia y Castellano con alta exigencia académica.
                    </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mapis-blue rounded-full border-4 border-white shadow-sm" />
                    <div className="md:w-5/12 opacity-50 hidden md:block">
                    {/* Imagen decorativa opcional o vacío */}
                    </div>
                </FadeIn>

                {/* Bloque 2 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 relative">
                    <div className="md:w-5/12 text-center md:text-left">
                    <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
                        <Beaker className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-mapis-blue">Prácticas de Laboratorio</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Aplicamos la teoría a la realidad. Experimentos en laboratorios equipados y desarrollo de proyectos STEM en el Salón Maker.
                    </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-sm" />
                    <div className="md:w-5/12" />
                </FadeIn>

                {/* Bloque 3 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    <div className="md:w-5/12 text-center md:text-right">
                    <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
                        <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-mapis-blue">Selecciones y Clubes</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                        Fútbol sala, voleibol, música o clubes de debate. Fomentamos la disciplina y el trabajo en equipo fuera del aula.
                    </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-sm" />
                    <div className="md:w-5/12" />
                </FadeIn>

                </div>
            </div>
            </div>
        </section>

        {/* 4. PREPARACIÓN PARA EL FUTURO (Diferencial) */}
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="bg-mapis-blue rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                {/* Fondo abstracto */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-mapis-yellow opacity-10 rounded-full -ml-10 -mb-10" />
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Compass className="w-5 h-5 text-mapis-yellow" />
                    <span className="text-sm font-bold tracking-wide">Orientación Vocacional</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Tu futuro empieza aquí
                    </h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                    Acompañamos a nuestros estudiantes de 4to y 5to año en la elección de su carrera profesional, con charlas universitarias, pruebas vocacionales y visitas institucionales.
                    </p>
                    <div className="pt-4">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-mapis-yellow" />
                        <span>Convenios con universidades locales</span>
                        </li>
                        <li className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-mapis-yellow" />
                        <span>Charlas de liderazgo y emprendimiento</span>
                        </li>
                    </ul>
                    </div>
                </div>
                
                {/* Imagen Ilustrativa */}
                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image src="/school-building-architecture-modern.jpg" alt="Graduación" fill className="object-cover" />
                </div>
                </div>
            </div>
            </div>
        </section>

            {/* 5. CTA SIMÉTRICO */}
        <section className="py-20 px-4 text-center">
            <FadeIn>
            <h2 className="text-3xl font-bold text-mapis-blue mb-4">Asegura el futuro de tus hijos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Formamos a los líderes que transformarán el mañana. Inicia el proceso de admisión hoy mismo.
            </p>
            
            {/* CAMBIO: Agregamos 'items-center' y mejoramos el estilo del segundo botón */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                
                {/* Botón 1: Sólido (Llamado Principal) */}
                <Button 
                asChild 
                size="xl" 
                className="min-w-[200px] bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                <Link href="/admisiones">Postularse</Link>
                </Button>

                {/* Botón 2: Borde Sólido (Balance Visual) */}
                <Button 
                asChild 
                size="xl" 
                variant="outline" 
                className="min-w-[200px] border-2 border-mapis-blue text-mapis-blue hover:bg-mapis-blue hover:text-white font-bold px-8 rounded-full transition-all"
                >
                <Link href="/academico/primaria">Ver Primaria</Link>
                </Button>
                
            </div>
            </FadeIn>
        </section>

        </div>
    )
}