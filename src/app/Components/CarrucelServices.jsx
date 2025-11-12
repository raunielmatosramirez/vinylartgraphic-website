"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ServicesCard from "./ServicesCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { generateGalleryLink } from "@/utils/galleryLinks";

const CarrucelServices = ({ currentService }) => {
  return (
    <div className='w-full'>
      {/* Carrusel */}
      <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-8'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={currentService.subservices.length > 3}
          pagination={{
            clickable: true,
            enabled: currentService.subservices.length > 1,
          }}
          autoplay={
            currentService.subservices.length > 1
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
              : false
          }
          centeredSlides={
            currentService.subservices.length === 1 ||
            currentService.subservices.length === 3
          }
          breakpoints={{
            // Móvil pequeño
            0: {
              slidesPerView: currentService.subservices.length === 1 ? 1 : 1,
              spaceBetween: 10,
              centeredSlides: currentService.subservices.length === 1,
            },
            // Móvil
            480: {
              slidesPerView: currentService.subservices.length === 1 ? 1 : 2,
              spaceBetween: 15,
              centeredSlides: currentService.subservices.length === 1,
            },
            // Tablet
            768: {
              slidesPerView: currentService.subservices.length === 1 ? 1 : 3,
              spaceBetween: 20,
              centeredSlides: currentService.subservices.length === 1,
            },
            // Desktop
            1024: {
              slidesPerView: currentService.subservices.length === 1 ? 1 : 3,
              spaceBetween: 20,
              centeredSlides: currentService.subservices.length === 1,
            },
            // Desktop grande
            1280: {
              slidesPerView: currentService.subservices.length === 1 ? 1 : 4,
              spaceBetween: 15,
              centeredSlides: currentService.subservices.length === 1,
            },
          }}
          className='services-swiper'
        >
          {currentService.subservices.map((subservice, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center h-full px-1'>
                <Link
                  key={subservice.name}
                  href={generateGalleryLink(subservice.name)}
                
                >
                  <ServicesCard
                    alt={subservice.name}
                    imageUrl={subservice.image_url}
                    title={subservice.name}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper {
          padding: 20px 0 50px 0; /* Aumenté el padding-bottom a 50px */
          width: 100%;
        }

        .services-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          color: #ffff00;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .services-swiper .swiper-button-next:after,
        .services-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .services-swiper .swiper-pagination {
          bottom: 20px !important; /* Fuerza la posición del paginator más abajo */
        }

        .services-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .services-swiper .swiper-pagination-bullet-active {
          background: #ffff00;
          opacity: 1;
        }

        @media (max-width: 767px) {
          .services-swiper {
            padding: 15px 0 40px 0; /* También en móvil */
          }

          .services-swiper .swiper-pagination {
            bottom: 15px !important;
          }

          .services-swiper .swiper-button-next,
          .services-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CarrucelServices;
