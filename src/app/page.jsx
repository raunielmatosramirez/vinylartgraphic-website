"use client";
import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
import { useScroll } from "../contex/ScrollContext";
import Testimonials from "./Components/Testimonials";
import CarWrapBusiness from "./Components/CarWrapBusiness";
import WideFormat from "./Components/WideFormat";
import CustomSignsMarkers from "./Components/CustomSignsMarkers";
import CustomizableProduct from "./Components/CustomizableProduct";
import HeroPage from "./Components/HeroPage";
import Image from "next/image";
import LionComponent from "./Components/LionComponent";



const FixedSectionLoader = () => (
  <div className='absolute top-0 left-0 w-full h-screen bg-[#000000] flex items-center justify-center z-50'>
    <div className='text-[#FFFF00] text-lg'>...</div>
  </div>
);

export default function Home() {
  const { isAtTop } = useScroll();
  const [isFixedSectionReady, setIsFixedSectionReady] = useState(false);

  useEffect(() => {
    setIsFixedSectionReady(true);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 ease-in-out ${
          isAtTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <section
          className='hidden lg:block w-full h-full'
          style={{
            margin: 0,
            background: "url('/FONDO.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className='w-full h-full flex items-center justify-center'>
            {isFixedSectionReady ? (
              <Suspense fallback={<FixedSectionLoader />}>
                <LionComponent />
              </Suspense>
            ) : (
              <FixedSectionLoader />
            )}
          </div>
        </section>

        <section className='block lg:hidden w-full h-screen relative overflow-hidden'>
          <div className='absolute inset-0 bg-[#000000] z-0' />
          <div
            style={{
              background: "url('/TRAMAEXAGONALPARAHOMEMOVIL.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className='absolute inset-0 z-20 h-[110%]'
          />

          <div className='neon-worms absolute inset-0 z-10'>
            <div className='worm worm-1'></div>
            <div className='worm worm-2'></div>
            <div className='worm worm-3'></div>
            <div className='worm worm-4'></div>
            <div className='worm worm-5'></div>
          </div>

          <div className='relative z-30 w-full h-[90vh] flex flex-col items-center justify-center py-8'>
            <div className='relative w-full h-full flex-1 flex items-end justify-center'>
              <div
                style={{
                  background: "url('/lion.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",  
                  backgroundPosition: "center",
                }}
                className='w-full h-full max-w-[90vw] max-h-[50vh] md:max-h-[60vh]'
              />
            </div>

            <div className='w-full flex flex-col items-center justify-center mt-4 md:mt-6'>
              <div className='relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] mb-2'>
                <Image
                  src='/HOMEGRAPHICDESIGN.svg'
                  width={400}
                  height={120}
                  alt='Diseño gráfico principal'
                  className='w-full h-auto'
                  priority={true}
                  loading='eager'
                />
              </div>

              <div className='relative w-full max-w-[150px] md:max-w-[180px] lg:max-w-[200px]'>
                <Image
                  src='./HOMEScrolltofindmore .svg'
                  width={200}
                  height={30}
                  alt='Scroll to find more'
                  className='w-full h-auto'
                  priority={true}
                  loading='eager'
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='fixed w-full flex items-center justify-center z-8 h-full'>
        {!isAtTop && (
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat" />
        )}
      </div>

      <main className='relative z-10 backdrop-blur-sm animate-fadeInUp'>
        <section
          id='hero-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[30px] relative overflow-x-hidden'
        >
          <HeroPage />
          <div className='w-[100%] max-w-4xl h-[1px] border-t-2 border-dashed border-[#FFFF00] mb-[65px]'></div>
        </section>
        <section
          id='customize-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
        >
          <CustomizableProduct />
        </section>
        <section
          id='car-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
        >
          <CustomSignsMarkers />
        </section>
        <section
          id='wide'
          className='w-full flex flex-col items-center justify-center h-[fit-content] overflow-x-hidden mb-[80px]'
        >
          <WideFormat />
        </section>
        <section
          id='car-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] relative overflow-x-hidden'
        >
          <CarWrapBusiness />
        </section>
        <section
          id='testimonials'
          className='w-full flex flex-col items-center justify-center h-[fit-content]'
        >
          <Testimonials />
        </section>
      </main>
    </>
  );
}
