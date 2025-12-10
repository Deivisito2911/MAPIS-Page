import Image from "next/image"
import { Metadata } from "next"
import { BadgeCheck, Globe, Heart, Trophy, Users, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeamCarousel } from "@/components/nosotros/team-carrusel"

export const metadata: Metadata = {
    title: "Nosotros | U.E. Mariano Picón Salas",
    description: "Conoce nuestra historia, misión, visión y el equipo que forma líderes integrales.",
}

export default function NosotrosPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. Hero Section */}
            <section className="relative bg-mapis-blue text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/school-building-architecture-modern.jpg')] bg-cover bg-center opacity-10" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-mapis-yellow font-bold tracking-widest uppercase text-sm mb-2 block">
                        Nuestra Identidad
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Quiénes Somos</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Desde 2008 formando ciudadanos con excelencia académica, valores humanos y visión global.
                    </p>
                </div>
            </section>

            {/* 2. Historia */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-mapis-blue">Nuestra Historia</h2>
                        <div className="prose text-gray-600 text-lg leading-relaxed">
                            <p>
                                La Unidad Educativa Mariano Picón Salas nació con el sueño de ofrecer una educación diferente en Nueva Esparta.
                                Fundada bajo los principios de "Arte, Verdad y Humanidad", nuestra institución ha crecido hasta convertirse
                                en un referente de excelencia educativa.
                            </p>
                            <p>
                                Desde nuestros inicios, nos hemos dedicado a cultivar no solo el intelecto, sino también el espíritu de nuestros
                                estudiantes, preparándolos para los desafíos de un mundo en constante cambio.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-mapis-yellow">
                                <p className="text-2xl font-bold text-mapis-blue">+1500</p>
                                <p className="text-sm text-gray-600">Egresados</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-mapis-blue">
                                <p className="text-2xl font-bold text-mapis-blue">17</p>
                                <p className="text-sm text-gray-600">Años de Servicio</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-500 group">
                        <Image
                            src="/school-building-architecture-modern.jpg"
                            alt="Fachada del Colegio"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Misión, Visión y Valores */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-mapis-blue mb-4">Nuestros Pilares</h2>
                        <div className="w-20 h-1 bg-mapis-yellow mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Misión */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-mapis-blue">
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Globe className="w-7 h-7 text-mapis-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
                            <p className="text-gray-600">
                                Formar ciudadanos globales, críticos y creativos, comprometidos con el desarrollo sostenible
                                y capaces de transformar su entorno a través del conocimiento y los valores.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-mapis-yellow">
                            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                                <BadgeCheck className="w-7 h-7 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
                            <p className="text-gray-600">
                                Ser reconocidos nacional e internacionalmente como una institución de vanguardia pedagógica,
                                donde la excelencia académica y la calidad humana van de la mano.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Responsabilidad
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Honestidad
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Respeto
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Solidaridad
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Equipo Directivo (Slider) */}
            <section className="py-20 bg-white">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl font-bold text-mapis-blue mb-4">Nuestro Equipo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Profesionales comprometidos con la excelencia educativa y el desarrollo humano de cada estudiante.
                    </p>
                </div>
                <TeamCarousel />
            </section>

            {/* 5. Himno Institucional */}
            <section className="py-24 bg-mapis-blue text-white text-center relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mapis-yellow rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-3xl mx-auto px-4 relative z-10">
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

                    {/* Letra del Himno */}
                    <div className="space-y-8 font-serif italic text-lg md:text-xl leading-relaxed text-blue-100 opacity-90 max-w-2xl mx-auto">
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
                    </div>
                </div>
            </section>

            {/* 6. Ubicación */}
            <section className="py-0">
                <div className="grid md:grid-cols-2 h-full min-h-[400px]">
                    {/* Mapa */}
                    <div className="bg-gray-200 min-h-[400px] relative grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3833961697874!2d-63.8360685!3d11.009834099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318e4095eb14e5%3A0x2c4278b35e71f56!2sUnidad%20Educativa%20%22Mariano%20Pic%C3%B3n%20Salas%22!5e0!3m2!1ses-419!2sve!4v1763932158243!5m2!1ses-419!2sve"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="absolute inset-0"
                        />
                    </div>

                    {/* Info */}
                    <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
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
                    </div>
                </div>
            </section>
        </div>
    )
}

function MusicIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="https://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}