"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown, ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3" onClick={closeMenu}>
              <div className="relative h-12 w-12">
                <Image src="/images/logo.png" alt="Logo U.E. Mariano Picón Salas" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg hidden sm:block text-mapis-blue tracking-tight uppercase">
                U.E. Mariano Picón Salas
              </span>
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-mapis-blue font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-mapis-blue font-medium transition-colors">
              Nosotros
            </Link>

            {/* Dropdown Académico */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mapis-blue font-medium transition-colors outline-none cursor-pointer">
                Académico <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/academico/primaria" className="w-full cursor-pointer">Primaria</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/bachillerato" className="w-full cursor-pointer">Bachillerato</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/calendario" className="w-full cursor-pointer">Calendario</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academico/modelo-educativo" className="w-full cursor-pointer">Modelo Educativo</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dropdown Vida MAPIS */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-mapis-blue font-medium transition-colors outline-none cursor-pointer">
                Vida MAPIS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/instalaciones" className="w-full cursor-pointer">Instalaciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/selecciones" className="w-full cursor-pointer">Selecciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/semana-mapis" className="w-full cursor-pointer">Semana MAPIS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vida-mapis/eventos" className="w-full cursor-pointer">Eventos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* BOTÓN ARCADAT (CORREGIDO: FONDO AZUL SÓLIDO) */}
            {/* Quitamos variant="outline" y ponemos bg-mapis-blue */}
            <Button asChild size="sm" className="bg-mapis-blue text-white hover:bg-blue-900 font-bold gap-2 hidden lg:flex shadow-sm">
                <a href="https://uemapis.com.ve/" target="_blank" rel="noopener noreferrer">
                    ARCADAT <ExternalLink className="w-3 h-3" />
                </a>
            </Button>
            
            <div className="h-6 w-px bg-gray-200 hidden lg:block" />

            {/* BOTÓN CONTACTO (Icono Redondo) */}
            <Button asChild variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-mapis-blue hover:bg-blue-50" title="Contáctanos">
                <Link href="/contacto">
                    <Phone className="w-5 h-5" />
                </Link>
            </Button>

            {/* BOTÓN ADMISIONES (Naranja Vibrante) */}
            <Button asChild className="bg-mapis-orange hover:bg-orange-600 text-white font-bold rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              <Link href="/admisiones">Admisiones</Link>
            </Button>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <div className="flex items-center md:hidden gap-4">
             {/* Contacto visible en móvil */}
             <Link href="/contacto" className="text-gray-600 hover:text-mapis-blue p-2">
                <Phone className="w-5 h-5" />
             </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mapis-blue focus:outline-none bg-gray-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-xl h-[calc(100vh-80px)] overflow-y-auto pb-20 animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-8 space-y-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-mapis-blue hover:bg-gray-50 border-b border-gray-50"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-mapis-blue hover:bg-gray-50 border-b border-gray-50"
            >
              Nosotros
            </Link>
            
            {/* Sección Académico */}
            <div className="px-3 pt-4 pb-2 text-xs font-bold uppercase text-gray-400 tracking-wider">Académico</div>
            <div className="grid grid-cols-2 gap-2 px-2">
                <Link href="/academico/primaria" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Primaria</Link>
                <Link href="/academico/bachillerato" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Bachillerato</Link>
                <Link href="/academico/calendario" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Calendario</Link>
                <Link href="/academico/modelo-educativo" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Modelo</Link>
            </div>

            {/* Sección Vida MAPIS */}
            <div className="px-3 pt-6 pb-2 text-xs font-bold uppercase text-gray-400 tracking-wider">Vida MAPIS</div>
            <div className="grid grid-cols-2 gap-2 px-2">
                <Link href="/instalaciones" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Instalaciones</Link>
                <Link href="/vida-mapis/selecciones" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Selecciones</Link>
                <Link href="/vida-mapis/semana-mapis" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Semana MAPIS</Link>
                <Link href="/vida-mapis/eventos" onClick={closeMenu} className="p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-mapis-blue text-center">Eventos</Link>
            </div>

            {/* BOTONES DE ACCIÓN MÓVIL */}
            <div className="space-y-3 mt-8 px-2">
                {/* ARCADAT MÓVIL (CORREGIDO: FONDO AZUL) */}
                <Button asChild className="w-full bg-mapis-blue text-white hover:bg-blue-900 font-bold justify-center h-12 shadow-sm">
                    <a href="https://uemapis.com.ve/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Portal ARCADAT
                    </a>
                </Button>
                
                <Link
                    href="/admisiones"
                    onClick={closeMenu}
                    className="flex items-center justify-center w-full px-4 py-3 text-center rounded-lg bg-mapis-orange text-white font-bold shadow-md hover:bg-orange-600 transition-colors"
                >
                    ADMISIONES 2025
                </Link>
            </div>
            
            {/* Footer del menú móvil */}
            <div className="mt-8 text-center pb-8">
                <Link href="/contacto" onClick={closeMenu} className="inline-flex items-center text-gray-500 text-sm">
                    <Phone className="w-4 h-4 mr-2" /> Contáctanos
                </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  )
}