import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-mapis-blue text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl w-fit backdrop-blur-sm border border-white/10">
              <div className="relative h-14 w-14">
                <Image src="/images/logo.png" alt="Logo Footer" fill className="object-contain" />
              </div>
              <div className="font-bold leading-tight uppercase tracking-tight text-lg">
                U.E. Mariano
                <br />
                Picón Salas
              </div>
            </div>
            
            <div className="space-y-3">
                <p className="text-mapis-yellow font-serif italic text-xl tracking-wide">"Ars - Veritas - Humanitas"</p>
                <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                Fundada el 01 de Septiembre de 2008. <br />
                17 años de servicio formando líderes integrales con excelencia académica en Nueva Esparta.
                </p>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            {/* H3 sin font-bold para que Bebas Neue se vea nítida */}
            <h3 className="text-2xl mb-6 text-mapis-yellow tracking-wide">Contacto</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm leading-relaxed">
                  Calle Fraternidad Vía Ppal Los Robles,<br />
                  Quinta Giraluna, Sector Mundo Nuevo,<br />
                  Los Robles, Nueva Esparta.
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-mapis-yellow shrink-0 group-hover:text-white transition-colors" />
                <div className="flex flex-col text-sm font-medium">
                  <a href="tel:02952672963" className="hover:text-white transition-colors">0295-2672963</a>
                  <a href="tel:04141984093" className="hover:text-white transition-colors">0414-1984093</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0 group-hover:text-white transition-colors" />
                <div className="flex flex-col text-sm gap-1">
                  <a href="mailto:controlestudios@uemapis.org" className="hover:text-white transition-colors break-all">
                    controlestudios@uemapis.org
                  </a>
                  <a href="mailto:administracion@uemapis.org" className="hover:text-white transition-colors break-all">
                    administracion@uemapis.org
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="text-2xl mb-6 text-mapis-yellow tracking-wide">Horario</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3 bg-blue-900/30 p-3 rounded-lg border border-blue-800/50">
                <Clock className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0" />
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-wider mb-1">Jornada Escolar</p>
                  <p className="text-sm">Lunes a Viernes</p>
                  <p className="text-lg font-bold text-white">7:00 AM - 3:30 PM</p>
                </div>
              </li>
              <li>
                <p className="text-xs text-blue-200/80 italic pl-1">
                  * Atención administrativa previa cita para casos especiales.
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h3 className="text-2xl mb-6 text-mapis-yellow tracking-wide">Enlaces</h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <a 
                  href="https://form.jotform.com/U_EMapis/Formulario_de_PreInsripcion_Mapis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mapis-yellow transition-colors font-bold flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-mapis-yellow group-hover:scale-150 transition-transform"/>
                  Preinscripción Online
                  <span className="text-[10px] uppercase font-bold bg-mapis-orange text-white px-1.5 py-0.5 rounded">Nuevo</span>
                </a>
              </li>
              <li>
                <Link href="/admisiones" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-mapis-yellow transition-colors"/>
                  Requisitos de Admisión
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-mapis-yellow transition-colors"/>
                   Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/intranet" className="hover:text-white transition-colors flex items-center gap-2 group">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-mapis-yellow transition-colors"/>
                   Intranet Docente
                </Link>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-8">
                <p className="text-xs uppercase font-bold text-blue-300 mb-3 tracking-widest">Síguenos</p>
                <div className="flex gap-4">
                <a 
                    href="https://www.instagram.com/colegiomapis" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 p-2 rounded-full text-white hover:bg-[#E1306C] hover:scale-110 transition-all shadow-lg"
                    aria-label="Instagram"
                >
                    <Instagram className="h-5 w-5" />
                </a>
                {/* Icono de Twitter 
                <a 
                    href="https://twitter.com/mapis_news" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 p-2 rounded-full text-white hover:bg-[#1DA1F2] hover:scale-110 transition-all shadow-lg"
                    aria-label="Twitter"
                >
                    <Twitter className="h-5 w-5" />
                </a>
                */}
                {/* Icono de WhatsApp */}
                <a 
                    href="https://wa.me/584141984093" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 p-2 rounded-full text-white hover:bg-[#25D366] hover:scale-110 transition-all shadow-lg"
                    aria-label="WhatsApp"
                >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="h-5 w-5"
                    >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                </a>
                </div>
            </div>
          </div>
        </div>

        {/* --- CREDITOS --- */}
        <div className="border-t border-blue-900 mt-16 pt-8 text-center text-blue-300 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
          <p>&copy; {new Date().getFullYear()} U.E. Mariano Picón Salas. Todos los derechos reservados.</p>
          <span className="hidden md:inline text-blue-800">|</span>
          <p className="flex items-center gap-1">
            Desarrollado con <span className="text-red-500 animate-pulse">❤</span> por{" "}
            <a 
              href="https://wa.me/584129672251" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-mapis-yellow font-bold transition-colors relative group"
              title="Contactar al desarrollador"
            >
              Deivith Zanella
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mapis-yellow transition-all group-hover:w-full"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}