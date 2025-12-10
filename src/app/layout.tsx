import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaintenanceGate } from "@/components/maintenance-gate"

const inter = Inter({ subsets: ["latin"] })

// URL base de tu sitio (Cámbialo cuando tengas el dominio real .com.ve)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://uemapiss.edu.ve"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "U.E. Mariano Picón Salas | Colegio en Nueva Esparta",
    template: "%s | U.E. Mariano Picón Salas", // Ej: "Nosotros | U.E. Mariano Picón Salas"
  },
  description: "La U.E. Mariano Picón Salas es un colegio líder en Margarita, Nueva Esparta. Ofrecemos educación integral en Primaria y Bachillerato con excelencia académica, robótica, deportes y valores humanos.",
  
  // PALABRAS CLAVE (Keywords) - Aquí van tus frases objetivo
  keywords: [
    "colegio", 
    "colegio nueva esparta", 
    "nueva esparta liceo", 
    "nueva esparta colegio", 
    "margarita colegio", 
    "MAPIS",
    "MAPIS robotic team",
    "colegio margarita", 
    "ue mariano picon salas",
    "educación margarita",
    "mejores colegios porlamar",
    "bachillerato nueva esparta",
    "inscripciones colegio margarita"
  ],
  
  authors: [{ name: "U.E. Mariano Picón Salas" }],
  creator: "U.E. Mariano Picón Salas",
  publisher: "U.E. Mariano Picón Salas",
  
  // Configuración para Robots (Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Iconos
  icons: {
    icon: "/images/logo.png",
    apple: "/apple-icon.png", // Asegúrate de tener este archivo o usa el logo
  },

  // Open Graph (Cómo se ve al compartir en Facebook/WhatsApp)
  openGraph: {
    title: "U.E. Mariano Picón Salas - Excelencia en Margarita",
    description: "Formando líderes integrales en Nueva Esparta. Educación de calidad, tecnología y valores.",
    url: BASE_URL,
    siteName: "U.E. Mariano Picón Salas",
    images: [
      {
        url: "/school-building-architecture-modern.jpg", // Tu foto principal
        width: 1200,
        height: 630,
        alt: "Campus U.E. Mariano Picón Salas",
      },
    ],
    locale: "es_VE",
    type: "website",
  },

  // Twitter Card (Cómo se ve en X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "U.E. Mariano Picón Salas",
    description: "Excelencia educativa en Nueva Esparta.",
    images: ["/school-building-architecture-modern.jpg"],
    creator: "@mapis_news", // Tu usuario de Twitter
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
        <MaintenanceGate>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </MaintenanceGate>
        <Analytics />
      </body>
    </html>
  )
}