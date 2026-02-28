"use client";
import { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import { usePathname } from "next/navigation";
import WhatsAppButton from "./ContactWhatssap";

interface Subservice {
  name: string;
  image_url: string;
  description: string;
  benefits: string[];
  gallery: string[];
}
  
interface Service {
  service: string;
  slug: string;
  subservices: Subservice[];
}

interface AppInitializerProps {
  services: Service[];
  children: React.ReactNode;
}

export default function AppInitializer({
  services,
  children,
}: AppInitializerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll al cambiar de ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Marcar que window ya está disponible (cliente)
    setHasWindow(true);
    
    // Solo ejecutar la lógica de carga en el cliente
    const getLoadingDuration = () => {
      const width = window.innerWidth;
      if (width < 768) return 3000; // Móvil: 3 segundos
      if (width < 1024) return 5000; // Tablet: 5 segundos
      return 10000; // PC: 10 segundos
    };

    const duration = getLoadingDuration();
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      setLoadingProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(timer);
        setIsLoading(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Muestra el loading screen solo en cliente
  if (isLoading && hasWindow) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  // Durante SSR o antes de que window esté disponible, puedes mostrar algo minimal
  if (!hasWindow) {
    return (
      <div className="fixed inset-0 bg-[#151515] flex items-center justify-center">
        <div className="text-[#FFFF00]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar services={services} />
      <main className="min-h-fit">{children}</main>
      <WhatsAppButton />
      <section
        id='footer'
        className='w-full flex flex-col mt-[85px] items-center justify-center h-[350px]'
      >
        <Footer />
      </section>
    </>
  );
}