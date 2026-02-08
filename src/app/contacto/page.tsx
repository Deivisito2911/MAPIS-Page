"use client"

import Image from "next/image"
import { 
    Phone, 
    Mail, 
    MapPin, 
    Clock, 
    HelpCircle
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { LocationSection } from "@/components/nosotros/location"

export default function ContactoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-warm-stone">
        
        {/* 1. HERO */}
        <section className="relative bg-mapis-blue text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
            <Image 
                src="/school-building-architecture-modern.jpg" 
                alt="Fachada MAPIS" 
                fill 
                className="object-cover"
            />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Estamos aquí para escucharte</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light !text-center">
                ¿Tienes dudas sobre el proceso de admisión o quieres conocer nuestras instalaciones?
                Contáctanos y con gusto te atenderemos.
                </p>
            </FadeIn>
            </div>
        </section>

        {/* 2. TARJETAS DE INFORMACIÓN */}
        <section className="py-16 px-4 -mt-10 relative z-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            
            <FadeIn delay={100} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-blue-50 text-mapis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Llámanos</h3>
                <p className="text-gray-500 mb-4 text-sm">Atención inmediata vía Telefónica o WhatsApp.</p>
                <a href="tel:02952672963" className="block text-lg font-bold text-mapis-blue hover:underline">0295-2672963</a>
                {/* ENLACE A WHATSAPP */}
                <a 
                    href="https://wa.me/584141984093" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className=" text-lg font-bold text-green-600 hover:text-green-700 hover:underline mt-1 flex items-center justify-center gap-2"
                >
                    <Image src="/images/logo.png" width={20} height={20} alt="ws" className="w-5 h-5 hidden" /> 
                    WhatsApp: 0414-198-4093
                </a>
            </FadeIn>

            <FadeIn delay={200} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Escríbenos</h3>
                <p className="text-gray-500 mb-4 text-sm">Responderemos a tu solicitud en breve.</p>
                <a href="mailto:administracion@uemapis.org" className="block font-medium text-gray-700 hover:text-mapis-blue break-all">
                administracion@uemapis.org
                </a>
                <a href="mailto:controlestudios@uemapis.org" className="block font-medium text-gray-700 hover:text-mapis-blue break-all mt-1">
                controlestudios@uemapis.org
                </a>
            </FadeIn>

            <FadeIn delay={300} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Horario de Atención</h3>
                <p className="text-gray-500 mb-4 text-sm">Visitas presenciales y atención telefónica.</p>
                <p className="text-lg font-bold text-gray-800">Lunes a Viernes</p>
                <p className="text-mapis-blue font-medium">7:30 AM - 12:30 PM</p>
            </FadeIn>

            </div>
        </section>

        {/* 3. UBICACIÓN Y FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-50 rounded-full mb-4 text-mapis-yellow-dark">
                        <MapPin className="w-8 h-8 text-mapis-yellow" />
                    </div>
                    <h2 className="text-3xl font-bold text-mapis-blue">Visítanos</h2>
                    <p className="text-gray-600 mt-2 !text-center">Nuestras puertas están abiertas para recibirte.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Columna Mapa (Ocupa 2 espacios) */}
                    <div className="lg:col-span-2 bg-gray-50 p-2 rounded-[2rem] border border-gray-200 shadow-inner">
                         {/* Mapa agrandado */}
                        <div className="h-[450px] w-full rounded-[1.5rem] overflow-hidden">
                            <LocationSection />
                        </div>
                    </div>

                    {/* Columna FAQ (Ocupa 1 espacio) */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 h-full">
                            <h3 className="text-xl font-bold text-mapis-blue mb-6 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6" /> Preguntas Frecuentes
                            </h3>
                            <div className="space-y-4">
                                <details className="group bg-white rounded-xl p-4 cursor-pointer shadow-sm hover:shadow-md transition-all open:bg-white">
                                    <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                                    ¿Dónde están ubicados?
                                    <span className="text-mapis-yellow group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="text-sm text-gray-600 mt-3 pl-3 border-l-4 border-mapis-yellow leading-relaxed">
                                    Estamos en la Calle Fraternidad, Vía Principal de Los Robles, Quinta Giraluna (Sector Mundo Nuevo), Isla de Margarita.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl p-4 cursor-pointer shadow-sm hover:shadow-md transition-all">
                                    <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                                    ¿Hay estacionamiento?
                                    <span className="text-mapis-yellow group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="text-sm text-gray-600 mt-3 pl-3 border-l-4 border-mapis-yellow leading-relaxed">
                                    Sí, contamos con zona para dejar y recoger a los estudiantes frente a la entrada principal de forma segura.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl p-4 cursor-pointer shadow-sm hover:shadow-md transition-all">
                                    <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                                    ¿Cómo llego en transporte?
                                    <span className="text-mapis-yellow group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="text-sm text-gray-600 mt-3 pl-3 border-l-4 border-mapis-yellow leading-relaxed">
                                    La línea de transporte de Los Robles pasa justo frente a nuestra sede.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}