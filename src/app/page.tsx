import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Users, ArrowRight, GraduationCap, Music, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-mapis-blue text-white overflow-hidden">
        {/* Abstract Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
                <Button
                  asChild
                  size="lg"
                  className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold text-base"
                >
                  <Link href="/admisiones">
                    Admisiones
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-medium text-base bg-transparent"
                >
                  <Link href="/modelo-educativo">Nuestro Modelo</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10">
                <Image
                  src="/happy-students-in-school-uniforms-studying.jpg"
                  alt="Estudiantes del MAPIS"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur text-mapis-blue p-4 rounded-lg shadow-lg max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="h-5 w-5 text-mapis-yellow" />
                    <span className="font-bold text-sm">Excelencia</span>
                  </div>
                  <p className="text-xs text-gray-600">Reconocidos por nuestro alto nivel académico y deportivo.</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-mapis-yellow rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-mapis-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            <div>
              <div className="text-3xl font-bold text-mapis-blue mb-1">+20</div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Años de Historia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mapis-blue mb-1">100%</div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Compromiso</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mapis-blue mb-1">3</div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Pilares Educativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-mapis-blue mb-1">Top</div>
              <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Nivel Académico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Navigation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mapis-blue mb-4">Nuestra Oferta Educativa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un ecosistema de aprendizaje diseñado para potenciar todas las dimensiones del ser humano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Primaria */}
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mapis-blue transition-colors">
                  <BookOpen className="h-6 w-6 text-mapis-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Educación Primaria</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Sentamos las bases del conocimiento con una metodología activa y participativa que fomenta la
                  curiosidad y el amor por aprender.
                </p>
                <Link
                  href="/academico/primaria"
                  className="text-mapis-blue font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  Ver programa <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-full opacity-5 md:opacity-10">
                <Image src="/kids-learning.jpg" alt="Primaria" fill className="object-cover" />
              </div>
            </div>

            {/* Bachillerato */}
            <div className="bg-mapis-blue p-8 rounded-2xl shadow-sm text-white flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-mapis-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bachillerato</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Formación académica rigurosa y pre-universitaria con enfoque en ciencias y humanidades.
                </p>
                <Link
                  href="/academico/bachillerato"
                  className="text-mapis-yellow font-semibold flex items-center gap-2 hover:text-white transition-colors"
                >
                  Conocer más <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Selecciones */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mapis-yellow transition-colors">
                  <Trophy className="h-6 w-6 text-yellow-700 group-hover:text-mapis-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Selecciones Deportivas</h3>
                <p className="text-gray-600 text-sm">
                  Fomentamos la disciplina y el trabajo en equipo a través del deporte competitivo.
                </p>
              </div>
            </div>

            {/* Arte y Cultura */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Music className="h-6 w-6 text-purple-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arte y Cultura</h3>
                <p className="text-gray-600 text-sm">
                  Desarrollamos la sensibilidad artística mediante la música y las artes escénicas.
                </p>
              </div>
            </div>

            {/* Semana MAPIS */}
            <div className="md:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Users className="h-6 w-6 text-green-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Semana MAPIS</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nuestra celebración anual donde la comunidad educativa brilla en todo su esplendor.
                </p>
                <Link href="/vida-mapis/semana-mapis" className="text-mapis-blue font-semibold text-sm hover:underline">
                  Ver galería
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mapis-yellow rounded-2xl" />
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image src="/school-building-architecture-modern.jpg" alt="Campus MAPIS" fill className="object-cover" />
              </div>
            </div>
            <div>
              <h4 className="text-mapis-yellow font-bold uppercase tracking-widest text-sm mb-2">Sobre Nosotros</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mb-6">
                Educar es un acto de amor y responsabilidad
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  La Unidad Educativa Mariano Picón Salas se fundó con la visión de crear un espacio donde la excelencia
                  académica conviva armoniosamente con el desarrollo humano.
                </p>
                <div className="flex gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-mapis-blue">
                    <h5 className="font-bold text-mapis-blue mb-1 flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Misión
                    </h5>
                    <p className="text-sm">Formar ciudadanos globales, críticos y creativos.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-mapis-yellow">
                    <h5 className="font-bold text-mapis-blue mb-1 flex items-center gap-2">
                      <Trophy className="h-4 w-4" /> Visión
                    </h5>
                    <p className="text-sm">Ser referentes en educación integral en Venezuela.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="border-mapis-blue text-mapis-blue hover:bg-blue-50 bg-transparent"
                  >
                    Conoce nuestra historia
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-mapis-light border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-mapis-blue mb-6">¿Listo para formar parte de la familia MAPIS?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            El proceso de admisión está diseñado para conocer a cada familia y estudiante de manera personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mapis-blue hover:bg-blue-900 text-white px-8">
              Iniciar Admisión Online
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-gray-700">
              Solicitar Visita Guiada
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
