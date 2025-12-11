"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, ArrowRight, Globe, BookOpen, GraduationCap, Music } from "lucide-react"
import { EventsCarousel } from "@/components/home/events-carousel"
// Importaciones para animaciones
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { FadeIn } from "@/components/animations/fade-in"

export default function Home() {
  // Hook para detectar cuando la sección de estadísticas es visible
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - VUELVE A AZUL (Original) */}
      <FadeIn direction="none" className="relative bg-mapis-blue text-white overflow-hidden">
        {/* Abstract Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={200} className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-mapis-yellow/20 text-mapis-yellow border border-mapis-yellow/30 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-mapis-yellow mr-2 animate-pulse" />
                Inscripciones Abiertas 2025-2026
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Formando el futuro con <span className="text-mapis-yellow">Excelencia</span>
              </h1>

              <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
                En la U.E. Mariano Picón Salas, cultivamos el intelecto, el arte y los valores humanos para desarrollar
                líderes integrales que transforman el mundo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botón Principal (Amarillo) */}
                <Button
                  asChild
                  size="lg"
                  className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold text-base shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/admisiones">
                    Admisiones
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* Botón Secundario (Outline Blanco) */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-medium text-base bg-transparent transition-transform hover:scale-105"
                >
                  <Link href="/modelo-educativo">Nuestro Modelo</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Imagen del Hero con animación */}
            <FadeIn delay={400} direction="left" className="relative hidden lg:block">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 group">
                <Image
                  src="/happy-students-in-school-uniforms-studying.jpg"
                  alt="Estudiantes del MAPIS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur text-mapis-blue p-4 rounded-lg shadow-lg max-w-[200px] animate-bounce-slow">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="h-5 w-5 text-mapis-yellow" />
                    <span className="font-bold text-sm">Excelencia</span>
                  </div>
                  <p className="text-xs text-gray-600">Reconocidos por nuestro alto nivel académico y deportivo.</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-mapis-yellow rounded-full opacity-20 blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse-slow delay-700" />
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      {/* Stats Bar - VUELVE A AMARILLO (Original) */}
      <section className="bg-mapis-yellow" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            {/* Item 1 */}
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                + <CountUp end={17} duration={2.5} useEasing={true} start={statsInView ? null : 0} />
              </div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Años de Historia</div>
            </div>
            {/* Item 2 */}
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                <CountUp end={100} duration={2.5} useEasing={true} start={statsInView ? null : 0} suffix="%" />
              </div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Compromiso</div>
            </div>
             {/* Item 3 */}
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                <CountUp end={3} duration={2} useEasing={true} start={statsInView ? null : 0} />
              </div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Pilares Educativos</div>
            </div>
             {/* Item 4 */}
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2">
                Top
              </div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Nivel Académico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Educativa (Nuevo diseño interactivo) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mb-4">Nuestra Oferta Educativa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un ecosistema de aprendizaje integral diseñado para cada etapa del desarrollo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primaria */}
            <FadeIn delay={100} direction="up" className="h-full">
                <Link href="/academico/primaria" className="group relative block h-[400px] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-xl transition-all hover:shadow-2xl">
                    <Image
                        src="/kids-learning.jpg"
                        alt="Educación Primaria MAPIS"
                        fill
                        className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-mapis-yellow">
                            <BookOpen className="h-7 w-7" />
                        </div>
                        <h3 className="mb-3 text-3xl font-bold text-white">Educación Primaria</h3>
                        <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                            Fomentamos la curiosidad y sentamos las bases del conocimiento con metodologías activas.
                        </p>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-mapis-blue group-hover:translate-x-2">
                            Ver programa académico <ArrowRight className="h-5 w-5" />
                        </span>
                    </div>
                </Link>
            </FadeIn>

            {/* Bachillerato */}
            <FadeIn delay={200} direction="up" className="h-full">
                <Link href="/academico/bachillerato" className="group relative block h-[400px] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-xl transition-all hover:shadow-2xl">
                    <Image
                        src="/school-building-architecture-modern.jpg"
                        alt="Bachillerato MAPIS"
                        fill
                        className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-mapis-blue/40 to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/60"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-mapis-yellow">
                            <GraduationCap className="h-7 w-7" />
                        </div>
                        <h3 className="mb-3 text-3xl font-bold text-white">Bachillerato General</h3>
                        <p className="mb-6 text-blue-100 opacity-90 transition-opacity duration-300 group-hover:opacity-100 max-w-md">
                            Formación académica rigurosa y pre-universitaria enfocada en ciencias y humanidades.
                        </p>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-mapis-blue group-hover:translate-x-2">
                            Conocer plan de estudios <ArrowRight className="h-5 w-5" />
                        </span>
                    </div>
                </Link>
            </FadeIn>

            {/* Vida MAPIS */}
            <FadeIn delay={300} direction="up" className="md:col-span-2 h-full">
                <Link 
                    href="/vida-mapis/selecciones" 
                    // CAMBIO 1: Aumentamos altura en móvil (h-[500px]) para que quepa todo sin cortarse. En PC se queda en 350px.
                    className="group relative block h-[500px] md:h-[350px] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-xl transition-all hover:shadow-2xl"
                >
                    <Image
                        src="/happy-students-in-school-uniforms-studying.jpg"
                        alt="Vida MAPIS Deportes y Cultura"
                        fill
                        className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                    {/* Gradiente: Vertical en móvil (para leer texto centrado), Horizontal en PC */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/95 via-mapis-blue/80 to-transparent md:bg-gradient-to-r md:from-mapis-blue/95 md:via-mapis-blue/70 md:to-transparent transition-opacity duration-500 group-hover:via-mapis-blue/90"></div>

                    {/* Contenido: Flex vertical centrado */}
                    <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:w-2/3 items-center text-center md:items-start md:text-left">
                        <div className="flex gap-4 mb-4 md:mb-6">
                            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-mapis-yellow/90 text-mapis-blue shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-mapis-yellow">
                                <Trophy className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-purple-100/90 text-purple-700 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                                <Music className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                        </div>
                        
                        <h3 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Vida MAPIS: <br className="md:hidden"/> Deporte y Cultura
                        </h3>
                        
                        <p className="mb-6 md:mb-8 text-blue-50 opacity-95 transition-opacity duration-300 group-hover:opacity-100 text-base md:text-lg max-w-sm md:max-w-xl">
                            Más allá del aula: desarrollamos el talento, la disciplina y el trabajo en equipo a través de nuestras selecciones deportivas y grupos artísticos.
                        </p>
                        
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mapis-yellow px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-mapis-blue shadow-md transition-all duration-300 hover:bg-white hover:scale-105">
                            Explorar actividades <ArrowRight className="h-5 w-5" />
                        </span>
                    </div>
                </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Carrusel de Eventos */}
      <FadeIn delay={200} className="py-20 bg-slate-50">
        <EventsCarousel />
      </FadeIn>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" delay={200} className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mapis-yellow rounded-2xl" />
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/school-building-architecture-modern.jpg"
                  alt="Campus MAPIS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={400}>
              <h4 className="text-mapis-yellow font-bold uppercase tracking-widest text-sm mb-2">Sobre Nosotros</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mb-6 leading-tight">
                Educar es un acto de amor y responsabilidad
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  La Unidad Educativa Mariano Picón Salas se fundó con la visión de crear un espacio donde la excelencia
                  académica conviva armoniosamente con el desarrollo humano integral de cada estudiante.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <FadeIn delay={600} direction="up" className="flex-1 p-6 bg-blue-50/50 rounded-xl border-l-4 border-mapis-blue hover:bg-blue-50 transition-colors">
                    <h5 className="font-bold text-mapis-blue mb-2 flex items-center gap-2 text-lg">
                      <Globe className="h-5 w-5" /> Misión
                    </h5>
                    <p className="text-sm text-gray-700">Formar ciudadanos globales, críticos, creativos y comprometidos con su entorno.</p>
                  </FadeIn>
                  <FadeIn delay={800} direction="up" className="flex-1 p-6 bg-yellow-50/50 rounded-xl border-l-4 border-mapis-yellow hover:bg-yellow-50 transition-colors">
                    <h5 className="font-bold text-mapis-blue mb-2 flex items-center gap-2 text-lg">
                      <Trophy className="h-5 w-5" /> Visión
                    </h5>
                    <p className="text-sm text-gray-700">Ser la institución referente en educación integral y vanguardia en Venezuela.</p>
                  </FadeIn>
                </div>
                <div className="pt-8">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-mapis-blue text-mapis-blue hover:bg-mapis-blue hover:text-white font-bold transition-all"
                  >
                    <Link href="/nosotros">Conoce nuestra historia completa</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
    </div>
  )
}