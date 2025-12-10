import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', // Si tuvieras rutas privadas
        },
        sitemap: 'https://uemapiss.edu.ve/sitemap.xml', // Cambia al dominio real
    }
}