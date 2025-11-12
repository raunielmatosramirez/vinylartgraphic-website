import Image from "next/image";
import React from "react";

const SocialNetworks = ({ closeMobileMenu }) => {
  return (
    <div className='flex justify-center  z-8 mt-4 space-x-6'>
      {/* Facebook */}
      <a
        href='https://www.facebook.com/vinylartgraphic'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#FFFF00] hover:text-white transition-colors duration-200 transform hover:scale-110'
        onClick={closeMobileMenu}
      >
        <svg
          className='w-6 h-6 sm:w-7 sm:h-7'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      </a>

      <a
        href='https://www.instagram.com/vinylart.design?igsh=enRtMHVucW83a2Fz&utm_source=qr'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#FFFF00] hover:text-white transition-colors duration-200 transform hover:scale-110'
        onClick={closeMobileMenu}
      >
        <svg
          className='w-6 h-6 sm:w-7 sm:h-7'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href='https://www.tiktok.com/@vinylart.design?_r=1&_t=ZP-9153mMTDf5T'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#FFFF00] hover:text-white transition-colors duration-200 transform hover:scale-110'
        onClick={closeMobileMenu}
      >
        <svg
          className='w-6 h-6 sm:w-7 sm:h-7'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.53-.03-1.06-.01-1.59c.24-2.34 1.16-4.48 2.97-5.97c1.77-1.44 4.15-2.09 6.45-1.65c.03 1.92-.04 3.84-.04 5.75c-.76-.33-1.71-.49-2.48-.28c-1.25.32-2.29 1.33-2.56 2.6c-.21.97-.08 1.97.36 2.85c.74 1.46 2.37 2.32 3.97 2.06c1.61-.26 2.99-1.53 3.35-3.12c.1-.51.12-1.04.12-1.56c.01-4.41.01-8.82.02-13.23z' />
        </svg>
      </a>

      {/* YouTube */}
      {/* <a
        href='https://youtube.com/tucanal'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#FFFF00] hover:text-white transition-colors duration-200 transform hover:scale-110'
        onClick={closeMobileMenu}
      >
        <svg
          className='w-6 h-6 sm:w-7 sm:h-7'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      </a> */}
    </div>
  );
};

export default SocialNetworks;
