"use client"

import { MapPin, Clock } from "lucide-react"
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
                <Button 
                    asChild 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg"
                    >
                    <a 
                        href="https://maps.app.goo.gl/rE5DXKQtErdtKU2e6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
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