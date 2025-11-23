import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-mapis-blue text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg w-fit">
              <div className="relative h-12 w-12">
                <Image src="/images/logo.png" alt="Logo Footer" fill className="object-contain" />
              </div>
              <div className="font-bold leading-tight">
                U.E. Mariano
                <br />
                Picón Salas
              </div>
            </div>
            <p className="text-mapis-yellow font-serif italic text-lg">"Ars - Veritas - Humanitas"</p>
            <p className="text-blue-100 text-sm">
              Fundada el 01 de Septiembre de 2008. 17 años de servicio formando líderes integrales con excelencia académica.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mapis-yellow">Contacto</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0" />
                <span className="text-sm">
                  Calle Fraternidad Vía Ppal Los Robles,<br />
                  Quinta Giraluna, Sector Mundo Nuevo,<br />
                  Los Robles, Nueva Esparta.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-mapis-yellow shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href="tel:02952672963" className="hover:text-white transition-colors">0295-2672963</a>
                  <a href="tel:04141984093" className="hover:text-white transition-colors">0414-1984093</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0" />
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
            <h3 className="text-lg font-semibold mb-4 text-mapis-yellow">Horario de Atención</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-mapis-yellow shrink-0" />
                <div>
                  <p className="font-medium">Lunes a Viernes</p>
                  <p>7:00 AM - 3:30 PM</p>
                </div>
              </li>
              <li className="mt-4">
                <p className="text-sm opacity-80">Atención administrativa previa cita para casos especiales.</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mapis-yellow">Enlaces de Interés</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/admisiones" className="hover:text-white transition-colors">
                  Proceso de Admisión
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/intranet" className="hover:text-white transition-colors">
                  Intranet Docente
                </Link>
              </li>
              <li>
                <Link href="/portal-padres" className="hover:text-white transition-colors">
                  Portal de Padres
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white hover:scale-110 transition-all">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white hover:scale-110 transition-all">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white hover:scale-110 transition-all">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} U.E. Mariano Picón Salas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}