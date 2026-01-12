import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
   output: 'export',  // ← AÑADE ESTA LÍNEA
  images: {
    unoptimized: true,
  },
  
  
  // Configuración webpack para excluir Resend del cliente
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'resend': false,
        '@react-email/render': false,
      };
    }
    return config;
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint se maneja de otra forma ahora
  // Si necesitas ignorar errores de ESLint en build, hazlo en package.json
  
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