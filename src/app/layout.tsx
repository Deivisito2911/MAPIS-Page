import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaintenanceGate } from "@/components/maintenance-gate" // <--- IMPORTAR

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "U.E. Mariano Picón Salas - Excelencia Académica",
  description: "Unidad Educativa Mariano Picón Salas. Formando el futuro con Excelencia, Arte, Verdad y Humanidad.",
  icons: {
    icon: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {/* Envolvemos TODO con el Gatekeeper */}
        <MaintenanceGate>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </MaintenanceGate>
        
        {/* Analytics queda fuera para trackear visitas a la página de construcción también */}
        <Analytics />
      </body>
    </html>
  )
}