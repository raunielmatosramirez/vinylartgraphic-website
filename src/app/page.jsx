"use client";
import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
import { usePathname } from "next/navigation";
import { useScroll } from "../contex/ScrollContext";
import Testimonials from "./Components/Testimonials";
import CarWrapBusiness from "./Components/CarWrapBusiness";
import WideFormat from "./Components/WideFormat";
import CustomSignsMarkers from "./Components/CustomSignsMarkers";
import CustomizableProduct from "./Components/CustomizableProduct";
import HeroPage from "./Components/HeroPage";
import Image from "next/image";

// Carga diferida para componentes pesados del main
const TestimonialsLazy = lazy(() => import("./Components/Testimonials"));
const CarWrapBusinessLazy = lazy(() => import("./Components/CarWrapBusiness"));
const WideFormatLazy = lazy(() => import("./Components/WideFormat"));
const CustomSignsMarkersLazy = lazy(() => import("./Components/CustomSignsMarkers"));
const CustomizableProductLazy = lazy(() => import("./Components/CustomizableProduct"));
const HeroPageLazy = lazy(() => import("./Components/HeroPage"));

// LionComponent normal (sin lazy) para máxima prioridad
import LionComponent from "./Components/LionComponent";

// Componente de precarga crítica
function CriticalPreloader() {
  useEffect(() => {
    // Precargar recursos críticos de forma agresiva
    const preloadImage = (src) => {
      const img = new window.Image(); // Usar window.Image para el constructor nativo
      img.src = src;
    };

    // Precargar imágenes críticas inmediatamente
    preloadImage('/FONDO.svg');
    preloadImage('/TRAMAEXAGONALPARAHOMEMOVIL.svg');
    preloadImage('/lion-desenfoque.png');
    preloadImage('/lion.png');
    preloadImage('/HOMEGRAPHICDESIGN.svg');
    preloadImage('/HOMEScrolltofindmore .svg');
  }, []);

  return null;
}

// Loading simple para componentes lazy
const SimpleLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div className="text-white">Cargando...</div>
  </div>
);

export default function Home() {
  const { isAtTop } = useScroll();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <CriticalPreloader />
      
      {/* SECCIÓN FIJA - MÁXIMA PRIORIDAD - SE RENDERIZA PRIMERO */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 ease-in-out ${
          isAtTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Versión para PC - MÁXIMA PRIORIDAD */}
        <section
          className='hidden md:block w-full h-full'
          style={{
            margin: 0,
            background: "url('/FONDO.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className='w-full h-full flex items-center justify-center'>
            {/* LionComponent se carga inmediatamente - SIN LAZY */}
            <LionComponent />
          </div>
        </section>

        {/* Versión para Tablet/Mobile - MÁXIMA PRIORIDAD */}
        <section className='block md:hidden w-full h-screen relative overflow-hidden'>
          {/* FONDO NEGRO INMEDIATO */}
          <div className='absolute inset-0 bg-[#000000] z-0' />

          {/* Fondo SVG */}
          <div
            style={{
              background: "url('/TRAMAEXAGONALPARAHOMEMOVIL.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className='absolute inset-0 z-20 h-[110%]'
          />

          {/* Gusanitos - DEBAJO del SVG */}
          <div className='neon-worms absolute inset-0 z-10'>
            <div className='worm worm-1'></div>
            <div className='worm worm-2'></div>
            <div className='worm worm-3'></div>
            <div className='worm worm-4'></div>
            <div className='worm worm-5'></div>
          </div>

          {/* Contenido - ENCIMA del SVG */}
          <div className='relative z-30 w-full h-full flex items-center justify-center'>
            <div
              style={{
                background: "url('/lion.png')",
                backgroundSize: "auto 75%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                maxWidth: "95%",
                maxHeight: "80%",
              }}
              className='w-full h-full'
            >
              <div className='absolute font-bold bottom-10 left-1/2 mt-[-10px] z-5 transform -translate-x-1/2 text-center text-white text-[48px] w-full'>
                <div className='w-full h-full flex justify-center items-center'>
                  <Image
                    src='/HOMEGRAPHICDESIGN.svg'
                    width={270}
                    priority={true}
                    height={160}
                    alt='Diseño gráfico principal'
                    className='max-w-full h-auto'
                    loading="eager"
                  />
                </div>
                <div className='relative mt-4 w-full flex bg-opacity-100 justify-center'>
                  <Image
                    src='./HOMEScrolltofindmore .svg'
                    width={150}
                    height={30}
                    alt='Scroll to find more'
                    loading="eager"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Imagen de fondo desenfocada */}
      <div className='fixed w-full flex items-center justify-center z-8 h-full'>
        {!isAtTop && (
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat" />
        )}
      </div>

      {/* MAIN - CONTENIDO SECUNDARIO CON CARGA DIFERIDA */}
      <main className='relative z-10 backdrop-blur-sm animate-fadeInUp'>
        <Suspense fallback={<SimpleLoader />}>
          <section
            id='hero-section'
            className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[30px] relative overflow-x-hidden'
          >
            <HeroPageLazy />
            <div className='w-[100%] max-w-4xl h-[1px] border-t-2 border-dashed border-[#FFFF00] mb-[65px]'></div>
          </section>
          <section
            id='customize-section'
            className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
          >
            <CustomizableProductLazy />
          </section>
          <section
            id='car-section'
            className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
          >
            <CustomSignsMarkersLazy />
          </section>
          <section
            id='wide'
            className='w-full flex flex-col items-center justify-center h-[fit-content] overflow-x-hidden mb-[80px]'
          >
            <WideFormatLazy />
          </section>
          <section
            id='car-section'
            className='w-full flex flex-col items-center justify-center h-[fit-content] relative overflow-x-hidden'
          >
            <CarWrapBusinessLazy />
          </section>
          <section
            id='testimonials'
            className='w-full flex flex-col items-center justify-center h-[fit-content]'
          >
            <TestimonialsLazy />
          </section>
        </Suspense>
      </main>
    </>
  );
}