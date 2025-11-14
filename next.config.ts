import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Solo si quieres exportación estática
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  
  // Configuraciones adicionales específicas de TypeScript
  typescript: {
    // Opcional: Ignorar errores de TypeScript durante el build
    ignoreBuildErrors: false,
  },
  // Opcional: Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/(.*).(svg|png|jpg|jpeg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig