import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contacto | U.E. Mariano Picón Salas",
    description: "Canales de atención, ubicación y formulario de contacto.",
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}