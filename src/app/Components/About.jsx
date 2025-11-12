"use client"
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className='z-10 flex flex-col items-center  justify-center text-center'>
      <h1 className='text-[35px] font-bold text-[#FFFF00] mt-[40px] '>
        ABOUT US
      </h1>
      <div className='w-[80%] h-[1px] border-t-2 border-dashed border-[#FFFF00] mt-[40px]  '></div>
      <div className='mt-[40px]'>
        <Image
          src='/AÑOSDEEXPERIENCIA.svg'
          width={255}
          height={255}
          priority={true}
          objectFit='cover'
          objectPosition='50% 50%'
          alt='Taller foto...'
        />
      </div>
      <p className='text-[14px] mt-[40px] text-white max-w-2xl leading-relaxed'>
        Established business since 2018 in US, with design and printing
        experience since 2000 in different countries. Today we have the
        experience, knowledge, qualified personnel and equipment to offer a
        great variety of work and services.
      </p>
      <div className='mt-[90px]'>
        <Image
          src='/TIENDATALLER.png'
          width={550}
          priority
          height={645}
          objectFit='cover'
          objectPosition='50% 50%'
          alt='Taller foto...'
        />
      </div>
      <div className='mb-4 mt-[80px]'>
        <Image
          src='/MISIONICON.svg'
          alt='About Us Icon'
          width={50}
          priority={true}
          height={50}
          className='mx-auto'
        />
      </div>
      <h2 className='text-[24px] font-bold text-[#FFFF00]  mb-[32px]'>
        OUR MISSION
      </h2>
      <div className='w-[200px] h-[1px] bg-[#FFFF00] mb-[25px] rounded-full'></div>
      <p className='text-[14px] text-white max-w-2xl leading-relaxed mb-[80px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className='mb-[32px] ml-6'>
        <Image
          src='/VISIONICON.svg'
          alt='About Us Icon'
          width={80}
          priority={true}
          height={80}
          className='mx-auto'
        />
      </div>
      <h2 className='text-[24px] font-bold text-[#FFFF00] '>OUR VISION</h2>
      <div className='w-[200px] h-[1px] bg-[#FFFF00] mt-[25px] rounded-full'></div>
      <p className='text-[14px] text-white max-w-2xl leading-relaxed mt-[25px] '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};
export default About;
