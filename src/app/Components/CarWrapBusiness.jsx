"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const CarWrapBusiness = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null); // ⭐ REF SEPARADO para el contenedor

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px"
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Cargar video cuando esté en vista
  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoadVideo]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <div className="flex flex-col h-full px-4 md:flex-row">
        {/* Lado izquierdo - Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[#FFFF00] text-4xl font-bold leading-tight">
            CAR WRAP
          </h1>
          <h2 className="text-white text-[35px] leading-tight mb-2">
            ADVERTISE YOUR
          </h2>
          <h1 className="text-[#FFFF00] text-4xl font-bold leading-tight mb-2">
            BUSINESS
          </h1>
          <h3 className="text-pink-500 text-[16px] mb-2">EXCLUSIVE</h3>
          <Link
            href="/services/car-wrap/"
            className="text-white text-[12px] md:text-[16px] mb-5 text-start underline hover:no-underline transition-all mt-[10px] md:mt-[30px] duration-300 inline-block underline-offset-3"
          >
            SEE MORE...
          </Link>
        </div>

        <div className="flex-1 relative h-full">
          <Image
            width={450}
            height={450}
            src="/HOMECARWRAP.png"
            alt="HOMECARWRAP"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <Image
        width={680}
        alt="neon"
        priority
        height={5}
        src="/HOMENEONDESECCIÓNDEVIDEO.png"
      />
      
      {/* ⭐ CONTENEDOR CON SU PROPIO REF */}
      <div
        ref={containerRef}
        className="w-full flex justify-center px-4 sm:px-4 lg:px-4 mb-12 sm:mb-16 md:mb-20"
      >
        <div
          className={`
            relative 
            aspect-video
            w-full
            max-w-full
            lg:w-[40%]
            xl:w-[40%]
            md:w-[70%]
            sm:w-[80%]
            xs:w-[90%]
            bg-black 
            overflow-hidden 
            shadow-2xl 
            border 
            border-[#ff00cc] 
            hover:border-[#ffff00] 
            transition-all 
            duration-500 
            hover:shadow-[0_0_40px_rgba(255,0,204,0.4)]
            ${!isPlaying ? "group" : ""}
          `}
        >
          {/* Poster mientras no se carga el video */}
          {!videoLoaded && shouldLoadVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="animate-pulse text-[#FFFF00]">Loading video...</div>
            </div>
          )}

          {/* Mostrar poster estático inicialmente */}
          {!shouldLoadVideo ? (
            <div className="relative w-full h-full">
              <Image
                src="/PRESENTACIONPARAVIDEO.png"
                alt="Video preview"
                fill
                className="object-cover"
                priority={false}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-14 h-14 bg-[#ffff00] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-7 h-7 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm">Click to load video</p>
                </div>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef} // ⭐ REF para el video
              className={`
                w-full 
                h-full 
                object-cover 
                transition-opacity 
                duration-700 
                ${videoLoaded ? "opacity-100" : "opacity-0"}
                ${!isPlaying ? "group-hover:scale-105" : ""}
              `}
              controls
              loop
              preload="none"
              playsInline
              muted
              poster="/PRESENTACIONPARAVIDEO.png"
              aria-label="Video demostrativo de nuestros servicios"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onLoadedData={handleVideoLoaded}
              onCanPlay={handleVideoLoaded}
            >
              <source src="/48.mp4?width=1080" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          )}

          {!isPlaying && shouldLoadVideo && videoLoaded && (
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center 
                justify-center 
                bg-gradient-to-t 
                from-black/80 
                via-transparent 
                to-transparent 
                opacity-0 
                group-hover:opacity-100 
                transition-all 
                duration-500
                cursor-pointer
              "
              onClick={handlePlayClick}
            >
              <div
                className="
                  transform 
                  translate-y-4 
                  group-hover:translate-y-0 
                  transition-transform 
                  duration-500 
                  flex 
                  flex-col 
                  items-center 
                  space-y-3
                "
              >
                <div
                  className="
                    w-14 
                    h-14 
                    sm:w-16 
                    sm:h-16 
                    lg:w-18 
                    lg:h-18 
                    bg-[#ffff00] 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    shadow-lg
                  "
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span
                  className="
                    text-white 
                    text-xs 
                    sm:text-sm 
                    lg:text-base
                    font-semibold 
                    bg-black/70 
                    px-3 
                    py-2 
                    rounded-full 
                    backdrop-blur-sm
                  "
                >
                  View demonstration
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute w-[320px] md:w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]"></div>
    </>
  );
};

export default CarWrapBusiness;