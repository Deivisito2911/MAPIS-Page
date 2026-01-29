import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { 
    Trophy, 
    Music, 
    Cpu, 
    Palette, 
    Activity, 
    Users, 
    Medal, 
    ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
    title: "Selecciones y Cultura | U.E. Mariano Picón Salas",
    description: "Nuestros equipos deportivos y grupos culturales que nos llenan de orgullo.",
}

const ACTIVIDADES = [
    {
        name: "Fútbol",
        category: "Deporte",
        description: "Nuestra selección más laureada. Fomentamos la táctica, velocidad y juego limpio en cada partido. Nuestros atletas aprenden que la verdadera victoria está en el esfuerzo compartido.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692472/Futbol_aytopv.png",
        icon: Trophy,
    },
    {
        name: "MAPIS ROBOTIC TEAM",
        category: "Ciencia",
        description: "Programación y construcción con LEGO y Arduino. Nuestro equipo ha sido galardonado a nivel nacional, demostrando que la ingeniería y la creatividad van de la mano.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769690548/Mapis_Robotic_Team_2_zhnoor.png",
        icon: Cpu,
    },
    {
        name: "MAPIS MUN",
        category: "Cultura",
        description: "Debate y diplomacia juvenil. Nuestro equipo de Modelo de Naciones Unidas ha representado a MAPIS en conferencias internacionales, desarrollando habilidades de oratoria, negociación y pensamiento crítico.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692102/13988190_1444960418864013_2553848460531388932_o_jgjltj.jpg",
        icon: Activity,
    },
    {
        name: "Coral",
        category: "Cultura",
        description: "Voces que inspiran. Nuestra coral participa activamente en festivales regionales y eventos navideños, educando el oído y el espíritu artístico.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692719/coro_ductqw.jpg",
        icon: Music,
    },
    {
        name: "Kickingball",
        category: "Deporte",
        description: "El deporte femenino por excelencia en nuestra institución. Nuestras alumnas demuestran fuerza, estrategia y compañerismo en cada inning.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692610/kickingball_ahntej.jpg",
        icon: Medal,
    },
    {
        name: "Ajedrez",
        category: "Cultura",
        description: "Lógica, estrategia y concentración. Nuestro club de ajedrez ha participado en múltiples torneos, destacándose por su pensamiento crítico y habilidades analíticas.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769691905/chess-tournament-kids-adults-participate-600nw-2476201135_ppih1f.webp",
        icon: Palette,
    },
    {
        name: "Voleibol",
        category: "Deporte",
        description: "Coordinación y reflejos. Entrenamientos intensivos donde la comunicación entre compañeros es la clave del éxito.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692394/Voleibol_hzkrzw.jpg",
        icon: Users,
    },
    {
        name: "Baloncesto",
        category: "Deporte",
        description: "Agilidad y trabajo en equipo. Nuestro equipo de baloncesto ha competido en ligas intercolegiales, promoviendo la salud física y el espíritu competitivo.",
        image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692841/baloncesto_a9vu8f.jpg",
        icon: Users,
    }
]

export default function SeleccionesPage() {
    return (
        <div className="flex flex-col min-h-screen">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-mapis-blue">
            <div className="absolute inset-0 bg-[url('/happy-students-in-school-uniforms-studying.jpg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mapis-blue/90" />
            
            <div className="relative z-10 text-center px-4 max-w-4xl">
            <FadeIn>
                <div className="inline-flex items-center gap-2 bg-mapis-yellow text-mapis-blue px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs mb-6 shadow-lg">
                <Trophy className="w-4 h-4" />
                Talento MAPIS
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Nuestras Selecciones
                </h1>
                <p className="text-xl text-blue-50 max-w-2xl mx-auto font-light">
                Donde la disciplina se encuentra con la pasión. Conoce a los equipos que representan nuestros colores.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* 2. LISTA ZIG-ZAG */}
        <div className="flex flex-col">
            {ACTIVIDADES.map((item, idx) => {
            const isEven = idx % 2 === 0
            
            return (
                <section 
                key={idx} 
                className={`py-20 px-4 relative overflow-hidden ${
                    isEven 
                    ? "bg-mapis-blue text-white" 
                    : "bg-mapis-yellow text-mapis-blue"
                }`}
                >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className={`absolute top-[-20%] ${isEven ? 'right-[-10%]' : 'left-[-10%]'} w-96 h-96 rounded-full ${isEven ? 'bg-white' : 'bg-white'}`} />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                    !isEven ? "md:flex-row-reverse" : ""
                    }`}>
                    
                    {/* LADO DE LA FOTO (MOLDE FIJO) */}
                    <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                        <FadeIn direction={isEven ? "right" : "left"}>
                        
                        {/* SOLUCIÓN DEFINITIVA: 
                            1. Usamos dimensiones fijas: w-[320px] h-[320px] (móvil) y md:w-[400px] md:h-[400px] (PC).
                            2. flex-none: Evita que flexbox aplaste la imagen si falta espacio.
                            3. mx-auto: La centra perfectamente.
                        */}
                        <div className={`relative flex-none mx-auto w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-8 ${
                            isEven ? "border-mapis-yellow" : "border-white"
                        } transform transition-transform hover:scale-105 duration-500 mb-6`}>
                            <Image 
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 320px, 400px"
                                className="object-cover"
                            />
                        </div>
                        
                        <div className="flex items-center justify-center gap-3">
                            <item.icon className={`w-8 h-8 ${isEven ? "text-mapis-yellow" : "text-white"}`} />
                            <h2 className={`text-3xl md:text-4xl font-bold uppercase tracking-tight ${
                            isEven ? "text-mapis-yellow" : "text-white"
                            }`}>
                            {item.name}
                            </h2>
                        </div>
                        <span className={`mt-2 text-sm font-semibold tracking-widest uppercase opacity-80 ${isEven ? "text-blue-200" : "text-blue-900"}`}>
                            {item.category}
                        </span>
                        </FadeIn>
                    </div>

                    {/* LADO DE LA DESCRIPCIÓN */}
                    <div className="w-full md:w-1/2">
                        <FadeIn direction={isEven ? "left" : "right"} delay={200}>
                        <div className={`h-1 w-20 mb-6 rounded-full ${isEven ? "bg-white" : "bg-white"}`} />
                        <p className={`text-lg md:text-xl leading-relaxed font-medium ${
                            isEven ? "text-blue-50" : "text-blue-900"
                        }`}>
                            {item.description}
                        </p>
                        
                        <div className="mt-8">
                            <Button 
                            variant="outline" 
                            size="lg"
                            className={`rounded-full border-2 font-bold ${
                                isEven 
                                ? "border-white text-white hover:bg-white hover:text-mapis-blue bg-transparent" 
                                : "border-mapis-blue text-mapis-blue hover:bg-mapis-blue hover:text-white bg-transparent"
                            }`}
                            >
                            Ver Horarios <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        </FadeIn>
                    </div>

                    </div>
                </div>
                </section>
            )
            })}
        </div>

        {/* 3. CTA FINAL */}
        <section className="py-24 bg-white text-center">
            <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
                <h2 className="text-3xl font-bold text-mapis-blue mb-4">¿Te interesa formar parte?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                Acércate a la coordinación de deporte o cultura para conocer los requisitos de las pruebas de talento.
                </p>
                <Button size="xl" className="bg-mapis-blue text-white hover:bg-blue-900 shadow-xl rounded-full px-10">
                <Link href="/contacto">Contáctanos</Link>
                </Button>
            </FadeIn>
            </div>
        </section>

        </div>
    )
}