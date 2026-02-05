import { Metadata } from "next"
import Image from "next/image"
import { 
    CalendarDays, 
    Download, 
    Clock, 
    AlertCircle,
    Calendar,
    Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Calendario Académico | U.E. Mariano Picón Salas",
    description: "Cronograma de actividades, efemérides y fechas importantes del año escolar.",
}

export default function CalendarioPage() {
    
    // ESTRUCTURA DE DATOS MEJORADA:
    // Ahora cada día tiene un array 'eventos' para soportar múltiples actividades en un mismo bloque.
    const cronograma = [
        {
            mes: "Febrero",
            dia: "04",
            eventos: [
                { titulo: "Día Mundial contra el Cáncer", descripcion: "Acto Cívico y concienciación en la comunidad educativa." }
            ]
        },
        {
            mes: "Febrero",
            dia: "10",
            eventos: [
                { titulo: "Inicio del Mundialito MAPIS 2026", descripcion: "Apertura del evento deportivo escolar más esperado del año." }
            ]
        },
        {
            mes: "Febrero",
            dia: "11",
            eventos: [
                { titulo: "Mujer y Niña en la Ciencia", descripcion: "Día Internacional para reconocer el rol de la mujer en la ciencia." }
            ]
        },
        {
            mes: "Febrero",
            dia: "12",
            eventos: [
                { titulo: "Día de la Juventud", descripcion: "Acto Cívico conmemorativo de la Batalla de la Victoria." }
            ]
        },
        {
            mes: "Febrero",
            dia: "13",
            eventos: [
                { titulo: "Cantinazo Promo X", descripcion: "Actividad especial organizada por la promoción." }
            ]
        },
        {
            mes: "Febrero",
            dia: "14",
            eventos: [
                { titulo: "Día del Amor y la Amistad", descripcion: "Celebración de San Valentín en el colegio." }
            ]
        },
        {
            mes: "Febrero",
            dia: "16",
            eventos: [
                { titulo: "Carnaval", descripcion: "Día feriado por fiestas de Carnaval." }
            ]
        },
        {
            mes: "Febrero",
            dia: "17",
            eventos: [
                { titulo: "Carnaval", descripcion: "Segundo día feriado por fiestas de Carnaval." }
            ]
        },
        {
            mes: "Febrero",
            dia: "19",
            eventos: [
                { titulo: "Splash Party Primaria", descripcion: "Actividad recreativa acuática para los alumnos de Primaria." }
            ]
        },
        {
            mes: "Febrero",
            dia: "20",
            eventos: [
                { titulo: "Splash Party Bachillerato", descripcion: "Actividad recreativa para Bachillerato y Día del Fotógrafo." }
            ]
        },
        {
            mes: "Febrero",
            dia: "25",
            eventos: [
                { titulo: "Miércoles Ciudadano", descripcion: "Actividades de formación ciudadana y convivencia." }
            ]
        },
        {
            // AQUÍ ESTÁ LA MAGIA: UN SOLO DÍA, DOS EVENTOS
            mes: "Febrero",
            dia: "27",
            eventos: [
                { titulo: "Fun Friday: 100 Días de Clases", descripcion: "Celebración especial por cumplir los primeros 100 días del año escolar." },
                { titulo: "Competencia de Robótica", descripcion: "Evento 'IA For Good' y natalicio de José María España." }
            ]
        }
    ]

    // Colores rotativos para dar vida al scroll
    const colors = [
        { border: "border-mapis-blue", bg: "bg-mapis-blue", text: "text-mapis-blue", icon: "text-white" },
        { border: "border-mapis-orange", bg: "bg-mapis-orange", text: "text-mapis-orange", icon: "text-white" },
        { border: "border-mapis-yellow", bg: "bg-mapis-yellow", text: "text-yellow-700", icon: "text-mapis-blue" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* 1. HERO */}
        <section className="relative bg-mapis-blue text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
            {/* Asegúrate de que esta imagen exista o usa un patrón CSS */}
            <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat bg-[length:300px]" />
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

        {/* 2. ZONA DE DESCARGA */}
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
                <Button asChild size="xl" className="bg-mapis-blue text-white hover:bg-blue-900 w-full shadow-lg transition-transform hover:scale-105">
                    <a href="/calendario-academico.pdf" download="Calendario_MAPIS_Febrero.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5 mr-2" />
                        Descargar PDF Febrero
                    </a>
                </Button>
                <span className="text-xs text-center text-green-600 font-bold bg-green-50 py-1 px-2 rounded-full">
                    ● Actualizado Febrero 2026
                </span>
                </div>
            </FadeIn>
            </div>
        </section>

        {/* 3. TIMELINE VERTICAL (CON EFECTO DE COLORES) */}
        <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent">
            <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mapis-blue">Hitos del Mes</h2>
                <p className="text-gray-600 mt-2">Las fechas más importantes que debes tener en cuenta.</p>
            </FadeIn>

            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                
                {cronograma.map((bloque, idx) => {
                    // Seleccionamos un color basado en el índice (Ciclo: Azul -> Naranja -> Amarillo)
                    const theme = colors[idx % colors.length];

                    return (
                        <FadeIn key={idx} delay={idx * 100} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            
                            {/* Icono Central con Color Dinámico */}
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${theme.bg} ${theme.icon} shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110`}>
                                <Calendar className="w-5 h-5" />
                            </div>
                            
                            {/* Tarjeta de Contenido */}
                            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border-l-4 ${theme.border} hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                                
                                {/* Cabecera de la Fecha */}
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                                    <span className={`font-bold text-lg ${theme.text}`}>{bloque.mes}</span>
                                    <span className={`bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full`}>
                                        Día {bloque.dia}
                                    </span>
                                </div>

                                {/* Renderizado de Eventos (Múltiples o Único) */}
                                <div className="space-y-4">
                                    {bloque.eventos.map((evento, subIdx) => (
                                        <div key={subIdx} className="relative">
                                            {/* Si hay más de un evento, mostramos un pequeño separador visual */}
                                            {subIdx > 0 && <div className="h-px w-full bg-gray-100 my-3" />}
                                            
                                            <h3 className="font-bold text-gray-800 text-base flex items-start gap-2">
                                                {evento.titulo.includes("Fun Friday") ? <Star className="w-4 h-4 text-mapis-yellow fill-current mt-1 shrink-0"/> : null}
                                                {evento.titulo}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                                {evento.descripcion}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </FadeIn>
                    )
                })}

            </div>

            {/* Nota al pie */}
            <FadeIn delay={600} className="mt-16 flex gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-yellow-800 text-sm items-start max-w-2xl mx-auto shadow-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                <strong>Nota importante:</strong> Las fechas indicadas en este calendario están sujetas a cambios según las disposiciones del Ministerio del Poder Popular para la Educación o situaciones imprevistas.
                </p>
            </FadeIn>
            
            </div>
        </section>

        {/* 4. CTA HORARIO */}
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Horarios Habituales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
                        <h3 className="font-bold text-mapis-blue mb-2 text-lg">Turno de la Mañana</h3>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <Clock className="w-5 h-5 text-mapis-yellow" />
                            <span className="font-medium">7:00 AM - 12:00 PM</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Primaria y Bachillerato</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
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