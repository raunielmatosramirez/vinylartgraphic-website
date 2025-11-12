"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const WideFormat = () => {
  return (
    <>
      <div className='relative w-full max-w-2xl mx-auto px-4 md:px-0'>
        <div className='flex flex-col md:flex-row md:items-start'>
          {/* Contenedor del texto - arriba en móvil, a la derecha en desktop */}
          <div className='w-full md:w-auto md:absolute md:top-4 md:right-4 text-start md:text-right  order-1 md:order-2 mb-4 md:mb-0'>
            <div className='mb-2 flex md:block'>
              <h1 className='text-[#FFFF00] text-[35px] md:text-[35px] font-bold leading-tight mr-1.5'>
                WIDE
              </h1>
              <h1 className='text-white text-[35px] md:text-[35px] leading-tight'>
                FORMAT
              </h1>
            </div>

            <p className='text-pink-500 text-[16px] md:text-[16px] mb-4 md:mb-8'>
              ALL KINDS OF VINYL
            </p>

            {/* Learn More */}
            <div className='mt-4 md:mt-66'>
              <Link
                href='/services/wide-format-signs-and-banners/'
                className='text-white text-[12px] md:text-[16px] underline hover:no-underline transition-all duration-300 inline-block underline-offset-3'
              >
                LEARN MORE...
              </Link>
            </div>
          </div>

          {/* Contenedor de la imagen - debajo en móvil, normal en desktop */}
          <div className='w-full md:w-auto order-2 md:order-1'>
            <Image
              src='/HOMEWIDEFORMAT.png'
              alt='Wide Format'
              priority={true}
              width={500}
              height={600}
              className='w-full max-w-[400px] md:w-[400px] h-auto mx-auto md:mx-0'
            />
          </div>
        </div>

        <div className='absolute w-[400px] md:w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]'></div>
      </div>
    </>
  );
};

export default WideFormat;