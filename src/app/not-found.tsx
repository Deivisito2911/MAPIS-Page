import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Compass, Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-white overflow-hidden">
        
        {/* --- CAPA DE FONDO (Imagen de Diseñadora + Gradientes) --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* Imagen de Fondo */}
            <Image 
                src="https://res.cloudinary.com/dnwyno39r/image/upload/v1769951828/fondo_logo_vu42iq.jpg" 
                alt="Fondo Institucional MAPIS"
                fill
                className="object-cover"
                priority
            />
            
            {/* Capa Azul Sólida (Tinte General para legibilidad) */}
            <div className="absolute inset-0 bg-mapis-blue/40" />
            
            {/* Gradiente Inferior Suave */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-mapis-blue to-transparent" />
        </div>

        {/* --- CONTENIDO --- */}
        <div className="relative z-10 text-center px-4 space-y-8">
            
            {/* Icono */}
            <div className="flex justify-center">
            <div className="bg-white/10 p-6 rounded-full shadow-lg animate-pulse backdrop-blur-sm border border-white/10">
                <Compass className="h-24 w-24 text-mapis-yellow" strokeWidth={1.5} />
            </div>
            </div>

            {/* Título Impactante */}
            <div className="space-y-2">
                <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 leading-none drop-shadow-2xl">
                404
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-mapis-yellow drop-shadow-md">
                Página no encontrada
                </h2>
            </div>
            
            {/* Mensaje */}
            <p className="text-lg md:text-2xl text-blue-100 max-w-lg mx-auto font-medium leading-relaxed drop-shadow-sm">
            Parece que el compás nos trajo a una ruta que no existe o ha sido movida. ¡Volvamos al rumbo!
            </p>
            
            {/* Botón de Regreso */}
            <div className="pt-4">
                <Button asChild size="xl" className="bg-mapis-orange hover:bg-orange-600 text-white font-bold rounded-full px-10 py-6 h-auto text-lg shadow-xl hover:shadow-orange-900/30 transition-all hover:-translate-y-1 border-2 border-white/20">
                <Link href="/">
                    <Home className="mr-3 h-6 w-6" />
                    Volver al Inicio
                </Link>
                </Button>
            </div>
        </div>
        </div>
    )
}