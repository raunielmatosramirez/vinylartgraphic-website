module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // Para Tailwind v4, asegúrate de tener esta configuración
  experimental: {
    optimizeUniversalDefaults: true
  }
}