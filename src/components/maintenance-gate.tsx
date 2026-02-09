"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Lock, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MaintenanceGateProps {
    children: React.ReactNode 
}

export function MaintenanceGate({ children }: MaintenanceGateProps) {
const [isAuthorized, setIsAuthorized] = useState(false)
const [showLogin, setShowLogin] = useState(false)
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [isLoading, setIsLoading] = useState(true)

// Verificar si ya inició sesión anteriormente
useEffect(() => {
const auth = sessionStorage.getItem("mapis_preview_auth")
if (auth === "true") {
    setIsAuthorized(true)
}
setIsLoading(false)
}, [])

const handleLogin = (e: React.FormEvent) => {
e.preventDefault()
// Credenciales solicitadas
if (username === "MAPISWEB" && password === "MapisWeb2025-6") {
    sessionStorage.setItem("mapis_preview_auth", "true")
    setIsAuthorized(true)
    setShowLogin(false)
} else {
    setError("Credenciales incorrectas")
}
}

// Mientras verifica, no mostramos nada para evitar parpadeos
if (isLoading) return null

// Si está autorizado, muestra la página web normal (el desarrollo)
if (isAuthorized) {
return <>{children}</>
}

// SI NO ESTÁ AUTORIZADO: Muestra la pantalla de "En Construcción"
return (
<div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
    {/* Fondo de mantenimiento */}
    <div className="absolute inset-0 bg-[url('/school-building-architecture-modern.jpg')] bg-cover bg-center opacity-20 blur-sm" />
    
    <div className="relative z-10 max-w-lg w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center border border-white/20">
    
    <div className="mb-8 relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200">
        {/* Placeholder hasta que subas la imagen real */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-sm">Imagen de "Trabajando en ello"</span>
        </div>
        {
        <Image 
            src="/maintenance.jpg" 
            alt="Sitio en Construcción" 
            fill 
            className="object-cover"
        /> 
        }
        </div>

    <h1 className="text-3xl font-bold text-mapis-blue mb-2">¡Estamos Renovando!</h1>
    <p className="text-gray-600 mb-8">
        Estamos construyendo una nueva experiencia digital para la comunidad MAPIS. 
        Pronto estaremos en línea.
    </p>

    <div className="border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 !text-center">Acceso Administrativo</p>
        
        {/* EL BOTÓN SECRETO (LOGO) */}
        <button 
        onClick={() => setShowLogin(true)}
        className="opacity-50 hover:opacity-100 transition-opacity hover:scale-105 transform duration-300 outline-none focus:ring-2 focus:ring-mapis-yellow rounded-full p-2"
        title="Acceso Directivo"
        >
        <div className="relative h-12 w-12 mx-auto">
            <Image src="/images/logo.png" alt="Acceso" fill className="object-contain" />
        </div>
        </button>
    </div>
    </div>

    {/* MODAL DE LOGIN (Se muestra al dar click al logo) */}
    {showLogin && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative">
        <button 
            onClick={() => { setShowLogin(false); setError(""); setUsername(""); setPassword(""); }}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
            <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
            <div className="w-12 h-12 bg-mapis-blue rounded-full flex items-center justify-center mx-auto mb-3">
            <Lock className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Acceso Privado</h2>
            <p className="text-sm text-gray-500">Ingrese credenciales de desarrollo</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
            <div>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mapis-blue focus:border-transparent outline-none text-black"
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mapis-blue focus:border-transparent outline-none text-black"
            />
            </div>
            
            {error && (
            <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded">
                {error}
            </p>
            )}

            <Button type="submit" className="w-full bg-mapis-blue hover:bg-blue-900 font-bold">
            Ingresar
            </Button>
        </form>
        </div>
    </div>
    )}
</div>
)
}