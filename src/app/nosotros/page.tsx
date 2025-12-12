import Image from "next/image"
import { Metadata } from "next"
import { 
    BadgeCheck, 
    Globe, 
    Heart, 
    Trophy, 
    Users, 
    Sparkles, 
    Lightbulb, 
    BookOpen, 
    GraduationCap, 
    Smile, 
    Star,
    MapPin,
    Clock,
  Music as MusicIcon // Renombrado para evitar conflicto si se usa otro icono de música
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeamCarousel } from "@/components/nosotros/team-carrusel"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Nosotros | U.E. Mariano Picón Salas",
    description: "Conoce nuestra historia, cultura y los perfiles que definen a la familia MAPIS.",
}

export default function NosotrosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-cream">
        
        {/* 1. Hero Section */}
        <section className="relative bg-mapis-blue text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/school-building-architecture-modern.jpg')] bg-cover bg-center opacity-10" />
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-warm-cream"></path>
            </svg>
            </div>
            <FadeIn className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-mapis-yellow font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-sm">
                Nuestra Cultura
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Identidad MAPIS</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                Más que un colegio, somos una comunidad transformadora comprometida con la excelencia y el crecimiento humano.
            </p>
            </FadeIn>
        </section>

        {/* 2. Reseña Histórica (Actualizada) */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-mapis-blue">Nuestra Historia</h2>
                <div className="prose text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    La <strong className="text-mapis-blue">U.E. Mariano Picón Salas</strong> fue fundada el <strong>1 de septiembre de 2008</strong> en la Isla de Margarita. Iniciamos como un sueño de educación básica con aulas de 1ero, 2do y 3er grado.
                </p>
                <p>
                    Con el compromiso de nuestra comunidad, ampliamos progresivamente nuestra oferta hasta consolidar la <strong>Educación Primaria</strong> (1º a 6º grado) y la <strong>Educación Media General</strong> (1º a 5º año), convirtiéndonos en una referencia educativa en Nueva Esparta.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-mapis-blue mt-6">
                    <p className="text-sm italic text-gray-700">
                    "Honramos la memoria de <strong>Mariano Picón Salas</strong> (1901–1965), ilustre escritor y diplomático venezolano, promotor de la educación humanista y fundador de la Facultad de Humanidades de la UCV."
                    </p>
                </div>
                </div>
            </FadeIn>
            
            <FadeIn direction="left" className="relative h-[400px] md:h-[500px] order-1 md:order-2">
                <div className="absolute inset-0 bg-mapis-yellow/20 rounded-[2rem] rotate-3 transform transition-transform group-hover:rotate-0"></div>
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                    src="/school-building-architecture-modern.jpg" // Foto fachada
                    alt="Historia del MAPIS"
                    fill
                    className="object-cover"
                />
                </div>
            </FadeIn>
            </div>
        </section>

        {/* 3. Propósito, Misión y Visión (Diseño Fluido y Familiar) */}
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue">Nuestro Norte</h2>
                <div className="w-20 h-1.5 bg-mapis-yellow mx-auto rounded-full mt-4"></div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Tarjeta Propósito (Central) */}
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

        {/* 4. Nuestros Valores (Grid Visual) */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-12">
                <h2 className="text-3xl font-bold text-mapis-blue mb-4">Valores que nos unen</h2>
                <p className="text-gray-600">Los pilares fundamentales de nuestra convivencia.</p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                "Orgullo MAPIS", "Ética Profesional", "Honestidad", "Vocación de Servicio", "Respeto",
                "Excelencia", "Responsabilidad", "Superación", "Trabajo en Equipo", "Innovación"
                ].map((valor, idx) => (
                <FadeIn key={idx} delay={idx * 50} className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100 hover:border-mapis-yellow hover:bg-yellow-50 transition-colors cursor-default">
                    <Heart className="w-5 h-5 text-mapis-yellow mx-auto mb-2" />
                    <span className="font-semibold text-gray-700 text-sm">{valor}</span>
                </FadeIn>
                ))}
            </div>
            </div>
        </section>

        {/* 5. Perfiles: El ADN MAPIS (Nueva Sección) */}
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue">El ADN MAPIS</h2>
                <p className="text-gray-600 mt-2">Lo que define a nuestra gente.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Perfil Docente */}
                <FadeIn direction="right" className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-100 w-32 h-32 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-full shadow-sm text-mapis-blue">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-mapis-blue">Perfil del Docente</h3>
                    </div>
                    <ul className="space-y-6">
                    <li className="flex gap-4">
                        <Lightbulb className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Creativo e Innovador</h4>
                        <p className="text-sm text-gray-600">Diseña metodologías activas para desarrollar habilidades blandas.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Users className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Colaborativo</h4>
                        <p className="text-sm text-gray-600">Construye confianza con estudiantes y familias.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Reflexivo</h4>
                        <p className="text-sm text-gray-600">Evalúa su práctica y se adapta a las necesidades del alumno.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Heart className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Comprometido</h4>
                        <p className="text-sm text-gray-600">Conciencia social y ambiental.</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </FadeIn>

                {/* Perfil Alumno */}
                <FadeIn direction="left" className="bg-yellow-50/50 rounded-[2.5rem] p-8 md:p-12 border border-yellow-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-100 w-32 h-32 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-full shadow-sm text-yellow-600">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-700">Perfil del Alumno</h3>
                    </div>
                    <ul className="space-y-6">
                    <li className="flex gap-4">
                        <Sparkles className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Curioso y Crítico</h4>
                        <p className="text-sm text-gray-600">Automotivado por aprender e innovar.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <BadgeCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Ciudadano Ético</h4>
                        <p className="text-sm text-gray-600">Sólida formación en valores democráticos.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Trophy className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Espíritu de Excelencia</h4>
                        <p className="text-sm text-gray-600">Emprendedor y sanamente competitivo.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <Smile className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                        <div>
                        <h4 className="font-bold text-gray-800">Comunicador</h4>
                        <p className="text-sm text-gray-600">Oratoria, buenos modales y sentido de pertenencia.</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </FadeIn>
            </div>
            </div>
        </section>

        {/* 6. Equipo Directivo */}
        <section className="py-20 bg-warm-cream">
            <div className="text-center mb-12 px-4">
            <h2 className="text-3xl font-bold text-mapis-blue mb-4">Liderazgo que Inspira</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Profesionales guiando el camino hacia la excelencia.
            </p>
            </div>
            <TeamCarousel />
        </section>

        {/* 7. Himno Institucional */}
        <section className="py-24 bg-mapis-blue text-white text-center relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mapis-yellow rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
            <FadeIn>
                <MusicIcon className="w-12 h-12 mx-auto text-mapis-yellow mb-6" />
                <h2 className="text-3xl font-bold mb-8">Himno del Colegio</h2>

                {/* Reproductor de Audio */}
                <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md mb-12 shadow-xl">
                <p className="text-sm text-blue-200 mb-4 font-medium tracking-wide uppercase">Escuchar Himno Oficial</p>
                <audio controls className="w-full h-10 rounded-lg outline-none focus:ring-2 focus:ring-mapis-yellow">
                    <source src="/himno.mp3" type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
                </div>
            </FadeIn>

            {/* Letra del Himno */}
            <FadeIn delay={200} className="space-y-8 font-serif italic text-lg md:text-xl leading-relaxed text-blue-100 opacity-90 max-w-2xl mx-auto">
                <p>
                En el 2008, un sueño nació, Mariano Picón Salas,<br />
                sus puertas abrió, ladrillo a ladrillo, salón por salón,<br />
                de la mano de los padres el colegio creció.
                </p>
                <p>
                En su emblema lleva un violín y un libro,<br />
                pues en el MAPIS el arte es parte integral del niño.<br />
                Y un globo terráqueo, símbolo de expansión,<br />
                a nuevos horizontes, a la investigación.
                </p>
                <p className="font-bold text-mapis-yellow not-italic font-sans">
                MAPIS es mi segunda familia,<br />
                donde crecemos juntos cada día.<br />
                (x2)
                </p>
                <p>
                MAPIS es mi segundo hogar,<br />
                me enseña valores y conciencia ambiental.<br />
                Mariano Picón Salas cumple una gran misión,<br />
                formar ciudadanos completos que ayuden a la nación.
                </p>
                <p>
                MAPIS representa con orgullo y alegría,<br />
                calidad de innovación y tecnología.<br />
                Y en su escudo lleva escrito en latín:<br />
                "Ars, Veritas, Humanitas", ese es nuestro fin.
                </p>
                <p className="font-bold text-mapis-yellow not-italic font-sans">
                MAPIS es mi segunda familia,<br />
                donde crecemos juntos cada día.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* 8. Ubicación */}
        <section className="py-0">
            <div className="grid md:grid-cols-2 h-full min-h-[400px]">
            {/* Mapa */}
            <FadeIn direction="right" className="bg-gray-200 min-h-[400px] relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6346857186854!2d-63.838573224098525!3d11.00983418915357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c31901a18c6427d%3A0xc3f8e56304653b67!2sU.E.%20Mariano%20Pic%C3%B3n%20Salas!5e0!3m2!1ses-419!2sve!4v1717616186000!5m2!1ses-419!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </FadeIn>

            {/* Info */}
            <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
                <FadeIn direction="left">
                <h3 className="text-2xl font-bold mb-6 text-mapis-yellow">Visítanos</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-mapis-yellow group-hover:text-mapis-blue transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Dirección</p>
                        <p className="text-gray-200 leading-relaxed">
                        Calle Fraternidad Vía Ppal Los Robles,<br />
                        Quinta Giraluna, Sector Mundo Nuevo,<br />
                        Los Robles, Nueva Esparta.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-mapis-yellow group-hover:text-mapis-blue transition-colors">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Horario Académico</p>
                        <p className="text-gray-200">Lunes a Viernes: 7:00 AM - 3:30 PM</p>
                    </div>
                    </div>
                    <Button className="mt-6 w-full bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold">
                    Agendar una Visita
                    </Button>
                </div>
                </FadeIn>
            </div>
            </div>
        </section>

        </div>
    )
}