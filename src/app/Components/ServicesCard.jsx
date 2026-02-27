"use client";
import Image from "next/image";

const ServicesCard = ({ imageUrl, alt, title }) => {
  return (
    <>
      <div className='relative group w-[240px] xs:w-[260px] h-[220px] center cursor-pointer overflow-hidden border-yellow-400 hover:border hover:border-yellow-400 border-1 shadow-lg transition-all duration-300 hover:shadow-xl'>
        <div className='aspect-w-16 aspect-h-9 w-full'>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={alt}
            priority={true}
            className='w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110'
          />
        </div>
        <div className='absolute bottom-0 left-0 right-0'>
          {/* Tarjeta amarilla con título y see more */}
          <div className='bg-[#151515] group-hover:bg-yellow-400 group-hover:bg-opacity-20 transition-all duration-300 p-1'>
            <div className='flex flex-col items-start justify-start gap-0.5'>
              <h3 className='truncate text-[#FFFF00] text-start font-semibold text-md group-hover:text-[#353530] transition-all duration-300 w-full'>
                {title}
              </h3>

              {/* See more - alineado a la izquierda debajo del título */}
              <div className='flex items-center gap-1 text-[8px] text-[#FFFF00] group-hover:text-[#353530] opacity-70 group-hover:opacity-100 transition-all duration-300'>
                <span className='uppercase tracking-wider'>see more</span>
                <svg
                  className='w-2.5 h-2.5 transform transition-transform duration-300 group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
