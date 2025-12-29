"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false)

  return (
    // Si deseas la navbar más ancha como pediste antes, cambia 'h-20' por 'h-24 md:h-28' aquí abajo
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/images/logo.png" alt="Logo U.E. Mariano Picón Salas" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg hidden sm:block text-mapis-blue">U.E. Mariano Picón Salas</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-mapis-blue font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-mapis-blue font-medium transition-colors">
              Nosotros
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mapis-blue font-medium transition-colors outline-none cursor-pointer">
                Académico <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/academico/primaria" className="w-full cursor-pointer">
                    Primaria
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/bachillerato" className="w-full cursor-pointer">
                    Bachillerato
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/calendario" className="w-full cursor-pointer">
                    Calendario
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/modelo-educativo" className="w-full cursor-pointer">
                    Modelo Educativo
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mapis-blue font-medium transition-colors outline-none cursor-pointer">
                Vida MAPIS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/instalaciones" className="w-full cursor-pointer">
                    Instalaciones
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/selecciones" className="w-full cursor-pointer">
                    Selecciones
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/semana-mapis" className="w-full cursor-pointer">
                    Semana MAPIS
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/eventos" className="w-full cursor-pointer">
                    Eventos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-mapis-blue hover:bg-blue-900 text-white font-semibold rounded-full px-6">
              <Link href="/admisiones">Admisiones</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mapis-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (CORREGIDO) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={closeMenu} // <--- Cierra el menú al hacer clic
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-mapis-blue hover:bg-gray-50"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              onClick={closeMenu} // <--- Cierra el menú al hacer clic
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-mapis-blue hover:bg-gray-50"
            >
              Nosotros
            </Link>
            
            {/* Académico Móvil */}
            <div className="px-3 py-2 text-base font-medium text-gray-500 bg-gray-50/50 mt-2 rounded-lg">Académico</div>
            <Link
              href="/academico/primaria"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Primaria
            </Link>
            <Link
              href="/academico/bachillerato"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Bachillerato
            </Link>
            <Link
              href="/academico/calendario"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Calendario
            </Link>

            {/* Vida MAPIS Móvil */}
            <div className="px-3 py-2 text-base font-medium text-gray-500 bg-gray-50/50 mt-2 rounded-lg">Vida MAPIS</div>
            <Link
              href="/instalaciones"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Instalaciones
            </Link>
            <Link
              href="/vida-mapis/selecciones"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Selecciones
            </Link>
            <Link
              href="/vida-mapis/semana-mapis"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Semana MAPIS
            </Link>
            <Link
              href="/vida-mapis/eventos"
              onClick={closeMenu}
              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-mapis-blue hover:bg-blue-50 rounded-md transition-colors"
            >
              Eventos
            </Link>
            
            <Link
              href="/admisiones"
              onClick={closeMenu}
              className="block px-3 py-3 mt-6 text-center rounded-full bg-mapis-blue text-white font-bold shadow-lg mx-4"
            >
              Admisiones
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}