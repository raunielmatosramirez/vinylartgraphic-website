import "./globals.css";
import { ScrollProvider } from "@/contex/ScrollContext";
import AppInitializer from "./Components/AppInitializer";
import ModelPreloader from "./Components/ModelPreloader";
import SEO from "./Components/SEO";
import { services } from "../../src/utils/servicesData";

export interface Subservice {
  name: string;
  image_url: string;
  description: string;
  benefits: string[];
  gallery: string[];
}

export interface Service {
  service: string;
  slug: string;
  subservices: Subservice[];
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos estructurados para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vinyl Art Graphic",
    description: "Professional signage, vehicle wraps, and printing services",
    url: "https://vinylartgraphic.com",
    logo: "https://vinylartgraphic.com/logo.png",
    sameAs: [
      "https://facebook.com/vinylartgraphic",
      "https://instagram.com/vinylartgraphic",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "Customer Service",
    },
  };
  return (
    <html lang='en'>
      <head>
        {/* Componente SEO global */}
        <SEO
          title='Vinyl Art Graphic - Premium Signage & Printing Solutions'
          description='Professional vehicle wraps, custom signs, wide format printing, promotional items, and business graphics. Transform your brand with our premium visual solutions.'
          canonical='https://vinylartgraphic.com'
          ogImage='/public/icon.svg'
          structuredData={structuredData}
        />
      </head>
      <body
      suppressHydrationWarning
        style={{
          height: "100%",
          width: "100%",
          margin: 0,
          background: "#151515",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Precargar el modelo inmediatamente */}
        <ScrollProvider>
          <ModelPreloader />
          <AppInitializer services={services as Service[]}>
            {children}
          </AppInitializer>
        </ScrollProvider>
      </body>
    </html>
  );
}
