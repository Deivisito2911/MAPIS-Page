import type React from "react"
import type { Metadata } from "next"
// 1. IMPORTAMOS LAS NUEVAS FUENTES
import { Poppins, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaintenanceGate } from "@/components/maintenance-gate"
import { AnnouncementBar } from "@/components/announcement-bar"
import Template from "./template" // Importamos el template para la transición

// 2. CONFIGURAMOS POPPINS (Cuerpo de texto)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
})

// 3. CONFIGURAMOS BEBAS NEUE (Títulos)
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas es display, solo tiene un peso
  variable: "--font-bebas",
  display: "swap",
})

// URL REAL DEL COLEGIO
const BASE_URL = "https://www.mapis.com.ve"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  
  alternates: {
    canonical: "/",
  },

  title: {
    default: "U.E. Mariano Picón Salas | Colegio en Nueva Esparta | Colegio MAPIS",
    template: "%s | Colegio MAPIS | U.E. Mariano Picón Salas",
  },
  description: "La U.E. Mariano Picón Salas es un colegio líder en Margarita, Nueva Esparta. Ofrecemos educación integral en Primaria y Bachillerato con excelencia académica, robótica, deportes y valores humanos.",
  
  keywords: [
    "colegio", 
    "colegiomapis",
    "uemapis",
    "nueva esparta mapis",
    "mariano picon salas",
    "colegio nueva esparta", 
    "nueva esparta liceo", 
    "nueva esparta colegio", 
    "margarita colegio", 
    "colegio margarita", 
    "ue mariano picon salas",
    "educación margarita",
    "mejores colegios porlamar",
    "bachillerato nueva esparta",
    "inscripciones colegio margarita",
    "mapis"
  ],
  
  authors: [{ name: "U.E. Mariano Picón Salas" }],
  creator: "U.E. Mariano Picón Salas",
  publisher: "U.E. Mariano Picón Salas",
  
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

  icons: {
    icon: [
      { url: '/images/logo.png', href: '/images/logo.png' },
    ],
    shortcut: ['/images/logo.png'],
    apple: [
      { url: '/images/logo.png' },
    ],
  },

  openGraph: {
    title: "U.E. Mariano Picón Salas - Excelencia en Margarita",
    description: "Formando líderes integrales en Nueva Esparta. Educación de calidad, tecnología y valores.",
    url: BASE_URL,
    siteName: "U.E. Mariano Picón Salas",
    images: [
      {
        url: "/school-building-architecture-modern.jpg",
        width: 1200,
        height: 630,
        alt: "Campus U.E. Mariano Picón Salas",
      },
    ],
    locale: "es_VE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "U.E. Mariano Picón Salas",
    description: "Excelencia educativa en Nueva Esparta.",
    images: ["/school-building-architecture-modern.jpg"],
    creator: "@mapis_news",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Unidad Educativa Mariano Picón Salas',
    image: `${BASE_URL}/images/logo.png`,
    description: 'Colegio privado en Nueva Esparta ofreciendo educación integral desde primaria hasta bachillerato.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Fraternidad, Qta. Giraluna, Sector Mundo Nuevo',
      addressLocality: 'Los Robles',
      addressRegion: 'Nueva Esparta',
      postalCode: '6316',
      addressCountry: 'VE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.0098341, 
      longitude: -63.8360685
    },
    url: BASE_URL,
    telephone: '+582952672963',
    email: 'info@uemapiss.edu.ve',
    sameAs: [
      'https://www.instagram.com/colegiomapis',
      'https://twitter.com/mapis_news'
    ]
  }

  return (
    <html lang="es">
      {/* 4. AGREGAMOS LAS VARIABLES DE FUENTE AL BODY */}
      <body className={`${poppins.variable} ${bebas.variable} antialiased flex flex-col min-h-screen bg-warm-cream`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Envolvemos en Template para la animación de transición */}
        <Template>
            <MaintenanceGate>
              <Navbar />
              <AnnouncementBar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </MaintenanceGate>
        </Template>
        <Analytics />
      </body>
    </html>
  )
}