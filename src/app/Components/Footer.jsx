import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialNetworks from "./SocialNetworks";
import { services } from "@/utils/servicesData";

const Footer = () => {
  return (
    <>
      <div className='flex items-center z-8 justify-center mb-6 w-[70%]'>
        <div className='w-full h-[1px] border-t-2 border-dashed border-[#FFFF00] flex-1'></div>
        <div
          style={{
            width: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href='/'>
            <Image
              src='/LOGOVINYLART.svg'
              alt='Logo'
              width={60}
              height={60}
              priority={true}
              className='w-26 h-26 lg:w-20 lg:h-20'
            />
          </Link>
        </div>
        <div className='w-full h-[1px] border-t-2 border-dashed border-[#FFFF00] flex-1'></div>
      </div>
      <div className='flex flex-row items-start  z-8 justify-center w-full max-w-4xl px-1'>
        <div className='flex-1 text-end pr-4'>
          <h2 className='text-[#FFFF00] text-[14px]'>SERVICES</h2>
          {services.map((service, index) => (
            <p
              key={index}
              className='text-white text-[12px] lg:text-[12px] mb-1'
            >
              {service.service}
            </p>
          ))}
        </div>
        <div className='flex-1 text-start pl-4'>
          <h2 className='text-[#FFFF00] text-[14px] bold'>CONTACT INFO</h2>
          <div className='flex items-center gap-2 mb-1'>
            <a
            href='tel:+17865327005'
            className='flex gap-2 '
            onClick={(e) => {
              if (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
              ) {
                e.preventDefault();
                alert("Please call from your phone to (786) 532-7005");
              }
            }}
          >
            <Image
              src='/CELLICON.svg'
              alt='Icono 1'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <div className='block md:flex'>
              <p className='text-white text-[12px] mr-1.5 lg:text-[12px]'>
                (786) 532-7005
              </p>
            </div>
            </a>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <a
            href='tel:+13059607677'
            className='flex gap-2 '
            onClick={(e) => {
              if (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
              ) {
                e.preventDefault();
                alert("Please call from your phone to (305) 960-7677");
              }
            }}
          >
            <Image
              src='/TELEFONOOFICINAICON.svg'
              alt='Icono 1'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <div className='block md:flex'>
              <p className='text-white text-[12px] lg:text-[12px]'>
                (305) 960-7677
              </p>
            </div>
              </a>
          </div>

          <div className='flex items-center gap-2 mb-1 '>
            <a
  href='mailto:info@vinylartgraphic.com'
  onClick={(e) => {
    // Detectar si es desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.preventDefault();
      // Opción A: Mostrar mensaje
      alert('Email: info@vinylartgraphic.com\n\nYour default email client will open.');
      // Opción B: Abrir en Gmail web (opcional)
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@vinylartgraphic.com', '_blank');
    }
  }}
  className='flex gap-2'
>
            <Image
              src='/EMAILICON.svg'
              alt='Icono 2'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              info@vinylartgraphic.com
            </p>
            </a>
          </div>

          <div className='flex items-center gap-2 mb-1'>
            <a
            href='https://www.google.com/maps/search/?api=1&query=4910+E+4th+Ave+Hialeah+FL+33013'
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2'
          >
            <Image
              src='/UBICACIoNICON.svg'
              alt='Icono 3'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              4910 E 4th Ave, Hialeah, FL 33013
            </p>
            </a>
          </div>

          <div className='flex items-center gap-2 mb-1'>
            <Image
              src='/CALENDARIOICON.svg'
              alt='Icono 4'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              Monday – Friday
            </p>
          </div>

          <div className='flex items-center gap-2 '>
            <Image
              src='/RELOJICON.svg'
              alt='Icono 5'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white  text-[12px] lg:text-[12px]'>
              10:00 – 17:00
            </p>
          </div>
        </div>
      </div>
      <SocialNetworks />

      {/* Contenedor de derechos reservados */}
      <div className='flex flex-col items-center justify-center mt-6 text-center'>
        <p className='text-white text-[12px] lg:text-[12px] mb-2'>
          <span className='text-[#ffff00] mr-0.5'>© VinylArtGraphic</span>– All
          Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
