// src/app/Components/LoadingScreen.tsx
"use client";
import Image from "next/image";
import React from "react";

const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <div className='fixed inset-0 bg-[#151515] flex flex-col items-center justify-center z-[9999]'>
      <div className='mb-8 flex items-center justify-center'>
        <div className='relative w-40 h-40 lg:w-56 lg:h-56 flex items-center justify-center'>
          <Image
            src='/images-footer/VINYL ART- LOGO.svg'
            alt='Vinyl Art Logo'
            width={100}
            height={100}
            className='w-full h-full object-contain animate-pulse'
            priority
          />
        </div>
      </div>

      <div className='w-64 lg:w-80 h-2 bg-gray-700 rounded-full overflow-hidden'>
        <div
          className='h-full bg-[#FFFF00] transition-all duration-100 ease-out'
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className='mt-4 text-center'>
        <p className='text-[#FFFF00] font-semibold text-lg mb-2'>
          {progress < 100 ? "Loading your experience..." : "¡Ready!"}
        </p>
        <p className='text-gray-400 text-md'>{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;