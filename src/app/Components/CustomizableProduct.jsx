import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomizableProduct = () => {
  return (
    <>
      <div className='flex flex-col h-full px-8 md:flex-row'>
        <div className='flex-1 relative h-full'>
          <Image
            width={340}
            alt='HOMESHIRT...'
            priority
            height={250}
            src='/HOMESHIRT.png'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center order-first md:order-none'>
          <h1 className='text-[#FFFF00] text-[35px]  text-end font-bold  leading-tight'>
            ANY IMAGE{" "}
            <span className='text-white font-normal text-[35px] leading-tight mb-2'>
              CAN BE
            </span>
          </h1>

          <h1 className='text-white text-end text-[35px] leading-tight mb-2'>
            PRINTED ON YOUR
          </h1>
          <h1 className='text-white text-end text-[35px] leading-tight mb-2'>
            T-SHIRT
          </h1>
          <h3 className='text-pink-500 text-end text-[16px] mb-2'>
            CUATOMIZABLE PRODUCTS
          </h3>
          <Link
            href='/services/prints/'
            className='text-white text-[12px] md:text-[16px] mb-5 text-end underline hover:no-underline transition-all mt-[10px] md:mt-[30px] duration-300 inline-block  underline-offset-3'
          >
            LEARN MORE...
          </Link>
        </div>
      </div>

         <div className='absolute w-[320px] md:w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]'></div>

    </>
  );
};

export default CustomizableProduct;