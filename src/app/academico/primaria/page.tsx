import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { CurvedArrow } from "@/components/ui/curved-arrow"
import { Button } from "@/components/ui/button"
import { 
    BookOpen, 
    Brain, 
    Users, 
    Heart, 
    Sun, 
    Palette, 
    Cpu, 
    Globe,
    UserCheck
} from "lucide-react"

export default function PrimariaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-cream">
        
        {/* 1. HERO: EMOCIONAL Y FAMILIAR */}
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <Image
            src="/kids-learning.jpg"
            alt="Niños felices en MAPIS"
            fill
            className="object-cover brightness-50"
            priority
            />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
            <FadeIn>
                <span className="inline-block py-1 px-4 rounded-full bg-mapis-yellow text-mapis-blue text-sm font-bold tracking-widest uppercase mb-4 shadow-lg border border-white/20">
                Etapa Primaria (1º a 6º Grado)
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg leading-tight">
                La tierra fértil para <br/>
                <span className="text-mapis-yellow italic">plantar el futuro</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-blue-50 max-w-2xl mx-auto">
                Más que materias, enseñamos a pensar, crear y convivir en un ambiente seguro y estimulante.
                </p>
            </FadeIn>
            </div>
            
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-warm-cream"></path>
            </svg>
            </div>
        </section>

        {/* 2. ENFOQUE (TEXTO ACTUALIZADO) */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right">
                <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
                    <Image src="/happy-students-in-school-uniforms-studying.jpg" alt="Primaria MAPIS" fill className="object-cover" />
                </div>
                </FadeIn>
                
                <FadeIn direction="left" className="space-y-6">
                <h2 className="text-3xl font-bold text-mapis-blue leading-tight">
                    Desarrollo Integral y <br/>
                    <span className="text-orange-500">Convivencia Comunitaria</span>
                </h2>
                <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                    <p>
                    Orientamos a los niños y niñas a fortalecer esencialmente valores de vida y convivencia comunitaria, sumado a las diferentes áreas de aprendizaje fundamentales.
                    </p>
                    <p>
                    Nuestras acciones pedagógicas modelan percepciones como <strong>aprender a conocer</strong>, <strong>aprender a hacer</strong> en contexto y <strong>aprender a vivir juntos</strong>. Utilizamos herramientas didácticas adecuadas para promover, además, la música, la tecnología y la inducción a otro idioma.
                    </p>
                </div>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* FLECHA CONECTORA 1 */}
        <CurvedArrow direction="right" className="text-mapis-yellow/50" />

        {/* 3. LA RUTINA MAPIS (CONSERVADA) */}
        <section className="py-16 px-4 relative">
            <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
                <span className="text-mapis-yellow font-bold uppercase tracking-widest text-sm">Nuestro Día a Día</span>
                <h2 className="text-3xl font-bold text-mapis-blue mt-2">Una rutina diseñada para crecer</h2>
                <p className="text-gray-600 mt-2">Así vive un estudiante del MAPIS su jornada escolar.</p>
            </FadeIn>

            <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mapis-yellow/20 via-mapis-yellow to-mapis-yellow/20 -translate-x-1/2 rounded-full" />

                <div className="space-y-12">
                
                {/* Momento 1 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    <div className="md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-400 text-center md:text-right hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">☀️ El Recibimiento</h3>
                    <p className="text-gray-600 text-sm">
                        Iniciamos el día con energía positiva, formación en valores y organización del día. Un momento para conectar con los compañeros.
                    </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 bg-yellow-400 rounded-full items-center justify-center text-white shadow-lg z-10">
                    <Sun className="w-5 h-5" />
                    </div>
                    <div className="md:w-5/12" />
                </FadeIn>

                {/* Momento 2 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 relative">
                    <div className="md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-600 text-center md:text-left hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">📚 Inmersión Académica</h3>
                    <p className="text-gray-600 text-sm">
                        El momento de mayor concentración. Proyectos de aula integrales donde exploramos lenguaje, ciencias y matemáticas de forma dinámica.
                    </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 bg-blue-600 rounded-full items-center justify-center text-white shadow-lg z-10">
                    <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="md:w-5/12" />
                </FadeIn>

                {/* Momento 3 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    <div className="md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-purple-500 text-center md:text-right hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">🚀 Talentos y Especialidades</h3>
                    <p className="text-gray-600 text-sm">
                        Rotamos diariamente entre laboratorios de <strong>Robótica</strong>, clases de <strong>Inglés</strong> conversacional, Música y Arte.
                    </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 bg-purple-500 rounded-full items-center justify-center text-white shadow-lg z-10">
                    <Cpu className="w-5 h-5" />
                    </div>
                    <div className="md:w-5/12" />
                </FadeIn>

                {/* Momento 4 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 relative">
                    <div className="md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500 text-center md:text-left hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">⚽ Juego y Convivencia</h3>
                    <p className="text-gray-600 text-sm">
                        Recreos dirigidos y deporte en nuestras canchas. Fomentamos el juego limpio y las habilidades sociales fuera del aula.
                    </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 bg-green-500 rounded-full items-center justify-center text-white shadow-lg z-10">
                    <Users className="w-5 h-5" />
                    </div>
                    <div className="md:w-5/12" />
                </FadeIn>

                </div>
            </div>
            </div>
        </section>

        {/* 4. PERFIL DEL ALUMNO (NUEVA SECCIÓN INTEGRADA) */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-mapis-blue">Nuestro Propósito</h2>
                    <p className="text-gray-600 mt-2 text-lg">Cultivamos estudiantes que:</p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Heart, text: "Compartan alegrías y se relacionen con todos los miembros de nuestra comunidad." },
                        { icon: Brain, text: "Proyecten dinamismo y entusiasmo en actividades académicas, sociales y deportivas." },
                        { icon: UserCheck, text: "Sean capaces de respetar y exigir respeto." },
                        { icon: Globe, text: "Cumplan con sus responsabilidades como alumno, hijo, joven y ciudadano del país." },
                        { icon: BookOpen, text: "Valoren la educación como principio de vida para el crecimiento personal." }
                    ].map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="bg-blue-50 p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mapis-blue shadow-sm mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <p className="text-gray-700 font-medium">{item.text}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. SECCIÓN DIFERENCIADORES (CONSERVADA) */}
        <section className="py-20 px-4 bg-warm-cream">
            <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
                <h2 className="text-3xl font-bold text-mapis-blue">¿Qué hace única a nuestra Primaria?</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <FadeIn delay={100} className="p-6">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-10 h-10 text-mapis-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inglés Intensivo</h3>
                <p className="text-gray-600 text-sm">Más horas de exposición al idioma para desarrollar un oído bilingüe.</p>
                </FadeIn>
                <FadeIn delay={200} className="p-6">
                <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Robótica y STEM</h3>
                <p className="text-gray-600 text-sm">Desde 1er grado, aprenden lógica de programación en nuestro Salón Maker.</p>
                </FadeIn>
                <FadeIn delay={300} className="p-6">
                <div className="w-20 h-20 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-4">
                    <Palette className="w-10 h-10 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Arte y Cultura</h3>
                <p className="text-gray-600 text-sm">Desarrollo de la sensibilidad artística a través de la música y la plástica.</p>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* 6. CTA FINAL */}
        <section className="bg-mapis-blue py-16 px-4 text-center mt-auto">
            <FadeIn>
            <Heart className="w-12 h-12 text-mapis-yellow mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-6">
                Queremos conocer a tu familia
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                Te invitamos a recorrer nuestras instalaciones y ver en persona cómo aprenden nuestros alumnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold text-lg px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <Link href="/admisiones">Solicitar Información</Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-mapis-blue bg-transparent font-bold text-lg px-8 rounded-full">
                <Link href="/instalaciones">Ver Instalaciones</Link>
                </Button>
            </div>
            </FadeIn>
        </section>

        </div>
    )
}