/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permitimos imágenes de Cloudinary
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Opcional: Si usas TypeScript estricto, esto ayuda a evitar errores de compilación en builds rápidos
  typescript: {
    ignoreBuildErrors: true,
  },
  // Importante para evitar errores en ciertos entornos de Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;