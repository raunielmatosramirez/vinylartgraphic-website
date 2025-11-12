import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

const CarWrapBusiness = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <>
      <div className='flex flex-col h-full px-4 md:flex-row'>
        {/* Lado izquierdo - Texto */}
        <div className='flex-1 flex flex-col justify-center'>
          <h1 className='text-[#FFFF00] text-4xl font-bold leading-tight'>
            CAR WRAP
          </h1>
          <h2 className='text-white text-[35px] leading-tight mb-2'>
            ADVERTISE YOUR
          </h2>
          <h1 className='text-[#FFFF00] text-4xl font-bold leading-tight mb-2'>
            BUSINESS
          </h1>
          <h3 className='text-pink-500 text-[16px] mb-2'>EXCLUSIVE</h3>
          <Link
            href='/services/car-wrap/'
            className='text-white text-[12px] md:text-[16px] mb-5 text-start underline hover:no-underline transition-all mt-[10px] md:mt-[30px] duration-300 inline-block  underline-offset-3'
          >
            LEARN MORE...
          </Link>
        </div>

        <div className='flex-1 relative h-full'>
          <Image
            width={450}
            height={450}
            src='/HOMECARWRAP.png'
            alt='HOMECARWRAP'
            className='object-cover'
            priority
          />
        </div>
      </div>
      <Image
        width={680}
        alt='neon'
        priority
        height={5}
        src='/HOMENEONDESECCIÓNDEVIDEO.png'
      />
      <div className='w-full flex justify-center px-4 sm:px-4 lg:px-4 mb-12 sm:mb-16 md:mb-20'>
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
    ${!isPlaying ? 'group' : ''}
  `}
        >
          <video
            ref={videoRef}
            className='
        w-full 
        h-full 
        object-cover 
        transition-transform 
        duration-700 
        group-hover:scale-105
      '
            controls
            loop
            preload='metadata'
            playsInline
            poster='/video-poster.jpg'
            aria-label='Video demostrativo de nuestros servicios'
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src='/48.mp4' type='video/mp4' />
            {/* <source src='/48.webm' type='video/webm' /> */}
            Tu navegador no soporta la reproducción de videos.
          </video>

          {!isPlaying && (
            <div
              className='
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
    '
              onClick={handlePlayClick}
            >
              <div
                className='
        transform 
        translate-y-4 
        group-hover:translate-y-0 
        transition-transform 
        duration-500 
        flex 
        flex-col 
        items-center 
        space-y-3
      '
              >
                <div
                  className='
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
        '
                >
                  <svg
                    className='w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-black'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </div>
                <span
                  className='
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
        '
                >
                  View demonstration
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='absolute w-[320px] md:w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]'></div>
    </>
  );
};
export default CarWrapBusiness;