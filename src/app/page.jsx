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
import LionComponent from "./Components/LionComponent";

const LionComponentLazy = lazy(() => import("./Components/LionComponent"));
const TestimonialsLazy = lazy(() => import("./Components/Testimonials"));
const CarWrapBusinessLazy = lazy(() => import("./Components/CarWrapBusiness"));
const WideFormatLazy = lazy(() => import("./Components/WideFormat"));
const CustomSignsMarkersLazy = lazy(() => import("./Components/CustomSignsMarkers"));
const CustomizableProductLazy = lazy(() => import("./Components/CustomizableProduct"));
const HeroPageLazy = lazy(() => import("./Components/HeroPage"));

const FixedSectionLoader = () => (
  <div className="absolute top-0 left-0 w-full h-screen bg-[#000000] flex items-center justify-center z-50">
    <div className="text-[#FFFF00] text-lg">...</div>
  </div>
);

export default function Home() {
  const { isAtTop } = useScroll();
  const pathname = usePathname();
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
            {isFixedSectionReady ? (
              <Suspense fallback={<FixedSectionLoader />}>
                <LionComponent />
              </Suspense>
            ) : (
              <FixedSectionLoader />
            )}
          </div>
        </section>

        <section className='block md:hidden w-full h-screen relative overflow-hidden'>
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

      <div className='fixed w-full flex items-center justify-center z-8 h-full'>
        {!isAtTop && (
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat" />
        )}
      </div>

      <main className='relative z-10 backdrop-blur-sm animate-fadeInUp'>
        {/* <Suspense fallback={null}> */}
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
        {/* </Suspense> */}
      </main>
    </>
  );
}