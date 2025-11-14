// Navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/contex/ScrollContext";
import SocialNetworks from "../SocialNetworks";

const Navbar = ({ services }) => {
  const { isAtTop } = useScroll();
  const pathname = usePathname();
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const getNavbarBackground = () => {
    if (isMobile) {
      return "bg-black/70 backdrop-blur-sm";
    }

    if (!isAtTop || pathname !== "/") {
      return "bg-black/70 backdrop-blur-sm";
    }

    return "bg-transparent backdrop-blur-0";
  };

  return (
    <nav
      className={`fixed w-full z-60 transition-all duration-200 ${getNavbarBackground()}`}
    >
      <div className='px-6 sm:px-10 lg:px-20'>
        <div className='max-w-full mx-auto flex justify-between items-center'>
          <div className='flex items-center p-1.5'>
            <Link href='/'>
              <Image
                src='/LOGOVINYLART.svg'
                alt='Logo'
                width={60}
                height={60}
                className='w-14 h-14 lg:w-14 lg:h-14 mt-2'
              />
            </Link>
          </div>

          <div
            className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              pathname === "/"
                ? !isAtTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className='flex space-x-4 md:space-x-5 lg:space-x-8 xl:space-x-10'>
              <Link
                href='/'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-xs md:text-sm lg:text-base'
              >
                HOME
              </Link>
              <div
                className='relative'
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <Link
                  href='/'
                  className='text-[#FFFF00] hover:text-white transition-colors duration-300 font-medium text-xs md:text-sm lg:text-base flex items-center'
                >
                  SERVICES
                  <svg
                    className={`w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform duration-200 ${
                      isServicesHovered ? "rotate-180" : ""
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>

                {isServicesHovered && (
                  <div className='absolute top-full mt-[0px] left-1/2 transform -translate-x-1/3 w-[150px] md:w-[170px] bg-black/70 backdrop-blur-sm'>
                    {services.map((serv, key) => (
                      <Link
                        key={key}
                        href={`/services/${serv.service
                          ?.toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className='block px-3 md:px-4 py-2 text-[#FFFF00] hover:text-white hover:bg-[#FFFF00]/10 transition-colors duration-200 text-xs md:text-sm'
                      >
                        {serv?.service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href='/about-us'
                className='text-[#FFFF00] text-center hover:text-white transition-colors duration-200 font-medium text-xs md:text-sm lg:text-base'
              >
                ABOUT US
              </Link>
              <Link
                href='/contact-us'
                className='text-[#FFFF00] text-center hover:text-white transition-colors duration-200 font-medium text-xs md:text-sm lg:text-base'
              >
                CONTACT US
              </Link>
              <Link
                href='/gallery'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-xs md:text-sm lg:text-base'
              >
                GALLERY
              </Link>
            </div>
          </div>

          {/* Right Container - Search & Hamburger */}
          <div className='flex items-center space-x-4'>
            {/* <div className='flex items-center'>
          <Image
            src='/ICONOBUSCADOR.svg'
            alt='Search'
            width={50}
            height={50}
            className='w-8 h-8 lg:w-10 lg:h-10'
          />
        </div> */}

            <button
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 transition-colors duration-300 ${
                isMobileMenuOpen ? "text-[#FFFF00]" : "text-[#FFFF00]"
              }`}
              onClick={toggleMobileMenu}
              aria-label='Toggle menu'
            >
              <span className='block h-0.5 w-6 bg-current mb-1.5' />
              <span className='block h-0.5 w-6 bg-current mb-1.5' />
              <span className='block h-0.5 w-6 bg-current' />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden h-screen w-full fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute h-full inset-0 w-full bg-black/90 transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute top-0 left-0 w-4/5 max-w-sm h-full bg-black/70 backdrop-blur-sm transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-col h-[100vh]'>
            <div className='flex-shrink-0 flex items-center p-6 border-b border-gray-800'>
              <Link href='/' onClick={closeMobileMenu}>
                <Image
                  src='/LOGOVINYLART.svg'
                  alt='Logo'
                  width={70}
                  height={70}
                  className='w-14 h-14'
                />
              </Link>
            </div>

            {/* Navigation Links - CONTENIDO CON SCROLL */}
            {/* Contenedor principal del sidebar */}
            <div className='flex flex-col'>
              {/* Contenido principal - se expande y empuja el footer hacia abajo */}
              <div className='flex-1 min-h-0 overflow-y-auto py-6 px-6'>
                <div className='flex flex-col space-y-1'>
                  <Link
                    href='/'
                    className='text-[#FFFF00] hover:text-white text-md font-medium py-4 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200'
                    onClick={closeMobileMenu}
                  >
                    HOME
                  </Link>

                  {/* Services Accordion */}
                  <div className='border-t border-gray-800'>
                    <button
                      className='flex justify-between items-center w-full text-[#FFFF00] hover:text-white text-md font-medium py-4 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200'
                      onClick={toggleMobileServices}
                    >
                      <span>SERVICES</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileServicesOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className='pl-6 py-2 space-y-1'>
                        {services.map((serv, key) => (
                          <Link
                            key={key}
                            href={`/services/${serv.service
                              ?.toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className='block text-[#FFFF00] hover:text-white transition-colors duration-200 py-3 text-sm px-4 rounded-lg hover:bg-gray-900 '
                            onClick={closeMobileMenu}
                          >
                            {serv?.service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-800'>
                    <Link
                      href='/about-us'
                      className='block text-[#FFFF00] hover:text-white text-md font-medium py-4 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200'
                      onClick={closeMobileMenu}
                    >
                      ABOUT US
                    </Link>
                  </div>

                  <div className='border-t border-gray-800'>
                    <Link
                      href='/contact-us'
                      className='block text-[#FFFF00] hover:text-white text-md font-medium py-4 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200'
                      onClick={closeMobileMenu}
                    >
                      CONTACT US
                    </Link>
                  </div>

                  <div className='border-t border-gray-800'>
                    <Link
                      href='/gallery'
                      className='block text-[#FFFF00] hover:text-white text-md font-medium py-4 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200'
                      onClick={closeMobileMenu}
                    >
                      GALLERY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Section - REDES SOCIALES RESPONSIVAS */}
            <div className='flex-shrink-0 p-6 border-t border-gray-800 bg-black/60'>
              <div className='flex flex-col items-center space-y-4'>
                <h3 className='text-[#FFFF00] text-sm font-medium mb-2'>
                  Follow us on social media
                </h3>
                {/* Contenedor de iconos de redes sociales */}
                <SocialNetworks closeMobileMenu={closeMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
