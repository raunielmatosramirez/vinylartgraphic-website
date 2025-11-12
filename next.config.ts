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
}

export default nextConfig