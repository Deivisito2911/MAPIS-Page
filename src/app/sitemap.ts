import { MetadataRoute } from 'next'

// Cambia esto por tu dominio real cuando lo tengas
const BASE_URL = 'https://uemapiss.edu.ve'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
        url: `${BASE_URL}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
        },
        {
        url: `${BASE_URL}/nosotros`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
        {
        url: `${BASE_URL}/admisiones`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        },
        {
        url: `${BASE_URL}/academico/primaria`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
        },
        {
        url: `${BASE_URL}/academico/bachillerato`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
        },
        // Agrega aquí las demás rutas importantes
    ]
}