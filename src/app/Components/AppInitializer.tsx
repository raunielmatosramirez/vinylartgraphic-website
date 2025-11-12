// src/app/Components/AppInitializer.tsx
"use client";
import { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import WhatsAppButton from "./ContactWhatssap";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import { useGLTF } from "@react-three/drei";

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
  // Elimina image_url ya que no está en tus datos
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
// En AppInitializer.tsx, agrega:
useEffect(() => {
  // Precargar recursos críticos inmediatamente
  const preloadCriticalAssets = async () => {
    // Precargar el modelo 3D
    const modelPreload = useGLTF.preload("/lion-web.gltf");
    
    // Precargar imágenes importantes
    const imagePreloads = [
      '/HOMEGRAPHICDESIGN.svg',
      '/HOMEScrolltofindmore .svg',
      '/FONDO.svg',
      '/TRAMAEXAGONALPARAHOMEMOVIL.svg',
      '/lion.png',
      '/lion-desenfoque.png'
    ].map(src => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Continúa aunque falle
      });
    });

    await Promise.all([modelPreload, ...imagePreloads]);
  };

  preloadCriticalAssets();
}, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar services={services} />
      {children}
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
