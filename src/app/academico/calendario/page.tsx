import { Metadata } from "next"
import Image from "next/image"
import { 
    CalendarDays, 
    Download, 
    Clock, 
    AlertCircle,
    Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Calendario Académico | U.E. Mariano Picón Salas",
    description: "Cronograma de actividades, efemérides y fechas importantes del año escolar.",
}

export default function CalendarioPage() {
    // DATOS REALES EXTRAÍDOS DEL PDF DE FEBRERO 2026
    const eventos = [
        {
            mes: "Febrero",
            dia: "04",
            titulo: "Día Mundial contra el Cáncer",
            descripcion: "Acto Cívico y concienciación en la comunidad educativa."
        },
        {
            mes: "Febrero",
            dia: "10",
            titulo: "Inicio del Mundialito MAPIS 2026",
            descripcion: "Apertura del evento deportivo escolar más esperado del año."
        },
        {
            mes: "Febrero",
            dia: "11",
            titulo: "Mujer y Niña en la Ciencia",
            descripcion: "Día Internacional para reconocer el rol de la mujer en la ciencia."
        },
        {
            mes: "Febrero",
            dia: "12",
            titulo: "Día de la Juventud",
            descripcion: "Acto Cívico conmemorativo de la Batalla de la Victoria."
        },
        {
            mes: "Febrero",
            dia: "13",
            titulo: "Cantinazo Promo X",
            descripcion: "Actividad especial organizada por la promoción."
        },
        {
            mes: "Febrero",
            dia: "14",
            titulo: "Día del Amor y la Amistad",
            descripcion: "Celebración de San Valentín en el colegio."
        },
        {
            mes: "Febrero",
            dia: "16",
            titulo: "Carnaval",
            descripcion: "Día feriado por fiestas de Carnaval."
        },
        {
            mes: "Febrero",
            dia: "17",
            titulo: "Carnaval",
            descripcion: "Segundo día feriado por fiestas de Carnaval."
        },
        {
            mes: "Febrero",
            dia: "19",
            titulo: "Splash Party Primaria",
            descripcion: "Actividad recreativa acuática para los alumnos de Primaria."
        },
        {
            mes: "Febrero",
            dia: "20",
            titulo: "Splash Party Bachillerato",
            descripcion: "Actividad recreativa para Bachillerato y Día del Fotógrafo."
        },
        {
            mes: "Febrero",
            dia: "25",
            titulo: "Miércoles Ciudadano",
            descripcion: "Actividades de formación ciudadana y convivencia."
        },
        {
            mes: "Febrero",
            dia: "27",
            titulo: "Fun Friday: 100 Días de Clases",
            descripcion: "Celebración especial por cumplir los primeros 100 días del año escolar."
        },
        {
            mes: "Febrero",
            dia: "28",
            titulo: "Competencia de Robótica",
            descripcion: "Evento 'IA For Good' y natalicio de José María España."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* 1. HERO: Encabezado */}
        <section className="relative bg-mapis-blue text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
            <Image 
                src="/kids-learning.jpg" 
                alt="Calendario Escolar" 
                fill 
                className="object-cover"
            />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-mapis-yellow mb-6 border border-white/20">
                <CalendarDays className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Año Escolar 2025-2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Planificación y Organización</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                Mantente al día con las fechas clave de nuestra institución. La organización es la base del éxito académico.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* 2. ZONA DE DESCARGA (HABILITADA) */}
        <section className="py-12 px-4 -mt-10 relative z-20">
            <div className="max-w-4xl mx-auto">
            <FadeIn className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border-t-8 border-mapis-yellow flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Cronograma Mensual</h2>
                <p className="text-gray-600 max-w-md">
                    Descarga el calendario detallado de actividades, evaluaciones y eventos especiales de este mes.
                </p>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                {/* BOTÓN HABILITADO */}
                <Button asChild size="xl" className="bg-mapis-blue text-white hover:bg-blue-900 w-full shadow-lg transition-transform hover:scale-105">
                    <a href="/calendario-academico.pdf" download="Calendario_MAPIS_Febrero.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5 mr-2" />
                        Descargar PDF Febrero
                    </a>
                </Button>
                <span className="text-xs text-center text-green-600 font-bold bg-green-50 py-1 px-2 rounded-full">
                    ● Actualizado Febrero 2025
                </span>
                </div>
            </FadeIn>
            </div>
        </section>

        {/* 3. TIMELINE VERTICAL (Fechas Importantes) */}
        <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue">Hitos del Mes</h2>
                <p className="text-gray-600 mt-2">Las fechas más importantes que debes tener en cuenta.</p>
            </FadeIn>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                
                {eventos.map((evento, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    {/* Icono Central */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-mapis-yellow text-mapis-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Calendar className="w-5 h-5" />
                    </div>
                    
                    {/* Tarjeta de Contenido */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-mapis-blue text-lg">{evento.mes}</span>
                        <span className="bg-blue-50 text-mapis-blue text-xs font-bold px-3 py-1 rounded-full">
                        Día {evento.dia}
                        </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{evento.titulo}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {evento.descripcion}
                    </p>
                    </div>

                </FadeIn>
                ))}

            </div>

            {/* Nota al pie */}
            <FadeIn delay={600} className="mt-16 flex gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-yellow-800 text-sm items-start max-w-2xl mx-auto">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                <strong>Nota importante:</strong> Las fechas indicadas en este calendario están sujetas a cambios según las disposiciones del Ministerio del Poder Popular para la Educación o situaciones imprevistas. Cualquier modificación será notificada a través de nuestros canales oficiales.
                </p>
            </FadeIn>
            
            </div>
        </section>

        {/* 4. CTA HORARIO */}
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Horarios Habituales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 className="font-bold text-mapis-blue mb-2 text-lg">Turno de la Mañana</h3>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <Clock className="w-5 h-5 text-mapis-yellow" />
                            <span className="font-medium">7:00 AM - 12:00 PM</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Primaria y Bachillerato</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 className="font-bold text-mapis-blue mb-2 text-lg">Actividades Extra-Cátedra</h3>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <Clock className="w-5 h-5 text-mapis-yellow" />
                            <span className="font-medium">1:30 PM - 4:00 PM</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Deporte y Cultura (Según selección)</p>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}