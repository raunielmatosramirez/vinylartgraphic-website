"use client";
import Image from "next/image";

const ServicesCard = ({ imageUrl, alt, title }) => {
  return (
    <>
      <div className='relative group w-[220px] h-[220px] center cursor-pointer overflow-hidden border-yellow-400  hover:border hover:border-yellow-400 border-1  shadow-lg transition-all duration-300 hover:shadow-xl'>
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
        <div className='absolute bottom-0 left-0 right-0 bg-[#151515] from-black/70 to-transparent '>
          <h3 className='truncate text-[#FFFF00] text-start font-semibold text-md transition-all duration-300 p-1 group-hover:text-[#353530] group-hover:bg-yellow-400 group-hover:bg-opacity-20'>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};
export default ServicesCard;
