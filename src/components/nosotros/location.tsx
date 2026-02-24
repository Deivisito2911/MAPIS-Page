"use client"

import Image from "next/image" // Añadimos la importación de Image
import { MapPin } from "lucide-react" // Solo dejamos MapPin para el botón de Google Maps
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export function LocationSection() {
    return (
        <section className="py-0">
        <div className="grid md:grid-cols-2 h-full min-h-[400px]">
            <FadeIn direction="right" className="bg-gray-200 min-h-[400px] relative w-full h-full">
            <iframe
                src="https://maps.google.com/maps?q=U.E.+Mariano+Picón+Salas,+Los+Robles,+Nueva+Esparta&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </FadeIn>

            <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
            <FadeIn direction="left">
                <h3 className="text-2xl font-bold mb-6 text-mapis-yellow">Visítanos</h3>
                <div className="space-y-6">
                
                {/* ÍTEM DIRECCIÓN */}
                <div className="flex items-start gap-4 group">
                    {/* Contenedor del ícono modificado */}
                    <div className="relative w-12 h-12 bg-white/10 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        <Image 
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771538526/direccion_fniszi.jpg" /* <--- PEGA AQUÍ EL LINK DEL ICONO DE UBICACIÓN */
                            alt="Icono Dirección"
                            fill
                            className="object-cover scale-110" // El scale-110 previene bordes blancos
                        />
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

                {/* ÍTEM HORARIO */}
                <div className="flex items-start gap-4 group">
                    {/* Contenedor del ícono modificado */}
                    <div className="relative w-12 h-12 bg-white/10 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        <Image 
                            src="https://res.cloudinary.com/dnwyno39r/image/upload/v1771538477/horario_ugt9n5.jpg" /* <--- PEGA AQUÍ EL LINK DEL ICONO DE HORARIO */
                            alt="Icono Horario"
                            fill
                            className="object-cover scale-110" // El scale-110 previene bordes blancos
                        />
                    </div>
                    <div>
                    <p className="text-sm text-gray-400 mb-1">Horario Académico</p>
                    <p className="text-gray-200">Lunes a Viernes: 7:00 AM - 3:30 PM</p>
                    </div>
                </div>

                <Button className="mt-6 w-full bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold">
                    Agendar una Visita
                </Button>
                <Button 
                    asChild 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg"
                    >
                    <a 
                        href="https://maps.app.goo.gl/rE5DXKQtErdtKU2e6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {/* Aquí dejamos el MapPin de Lucide porque es parte del texto del botón */}
                        <MapPin className="mr-2 h-5 w-5" />
                        Abrir en GPS (Google Maps)
                    </a>
                </Button>   
                </div>
            </FadeIn>
            </div>
        </div>
        </section>
    )
}