// src/app/Components/AppInitializer.tsx
"use client";
import { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import WhatsAppButton from "./ContactWhatssap";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

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

export default function AppInitializer({ services, children }: AppInitializerProps) {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 10000);

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