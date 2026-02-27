"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderSection from "@/app/Components/HeaderSection";
import { usePathname } from "next/navigation";
import BusinessCardsPricingExactImage from "./BusinessCardsPricing";
import PostCardsPricingInline from "./PostsCards";
import TShirtsPricing from "./Tshirts";
import YardSignsPricing from "./YardSignsPricing";
import InvoicesPricing from "./Invoices";
import CapsPricing from "./CapsPricing";
import TruckSignsPricing from "./TruckSignsPricing";
import TriptychPricingTwoCol from "./TriptychPricingTwoCol";
import MagneticsPricing from "./MagneticsPricing";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
  title?: string;
  description?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  title,
  description,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [anchos, setAnchos] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Para evitar espacios en blanco, generamos una secuencia que llene bien las filas
    const generarAnchosOptimizados = (): number[] => {
      const nuevosAnchos: number[] = [];
      const totalImages = images.length;
      const columnas = isMobile ? 3 : 5;

      let filaActual = 0;

      for (let i = 0; i < totalImages; i++) {
        // Si estamos al inicio de una fila y hay suficientes imágenes restantes
        if (filaActual === 0 && i + columnas <= totalImages) {
          // En filas pares: mayoría de imágenes anchas, en impares: mayoría estrechas
          if (Math.floor(i / columnas) % 2 === 0) {
            // Fila par: 30% de imágenes anchas (2 columnas)
            nuevosAnchos.push(Math.random() < 0.3 ? 2 : 1);
          } else {
            // Fila impar: 20% de imágenes anchas (2 columnas)
            nuevosAnchos.push(Math.random() < 0.2 ? 2 : 1);
          }
        } else {
          // Imagen normal
          nuevosAnchos.push(1);
        }

        filaActual = (filaActual + nuevosAnchos[i]) % columnas;
      }

      return nuevosAnchos;
    };

    const nuevosAnchos = generarAnchosOptimizados();
    setAnchos(nuevosAnchos);
  }, [images.length, isMobile]);

  const openModal = (image: Image) => {
    const index = images.findIndex((img) => img.id === image.id);
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  if (anchos.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div>Cargando imágenes...</div>
      </div>
    );
  }

  return (
    <section className='flex flex-col items-center justify-center text-center'>
      <HeaderSection title={title} text={description} />
      {/* {pathname === "/gallery-service/business-cards/" ? (
        <BusinessCardsPricingExactImage />
      ) : null}
      {pathname === "/gallery-service/postcards/" ? (
        <PostCardsPricingInline />
      ) : null}
      {pathname === "/gallery-service/t-shirts/" ? <TShirtsPricing /> : null}
      {pathname === "/gallery-service/yard-signs/" ? (
        <YardSignsPricing />
      ) : null}
      {pathname === "/gallery-service/invoice/" ? <InvoicesPricing /> : null}
      {pathname === "/gallery-service/caps/" ? <CapsPricing /> : null}
      {pathname === "/gallery-service/partial-car-wrap/" ? (
        <TruckSignsPricing />
      ) : null}
      {pathname === "/gallery-service/full-car-wrap/" ? (
        <TruckSignsPricing />
      ) : null}
      {pathname === "/gallery-service/flyers-and-brochures/" ? (
        <TriptychPricingTwoCol />
      ) : null}
      {pathname === "/gallery-service/car-magnet/" ? (
        <MagneticsPricing />
      ) : null} */}

      <div style={{ padding: "20px",paddingTop:"0px", width: "100%" }}>
        {/* Separador amarillo */}
        {pathname == "/gallery/" ? (
          <div className='relative w-full max-w-[1100px] mx-auto mb-6'>
            <div className='w-full h-[1px] bg-[#FFFF00]'></div>
          </div>
        ) : null}

        {/* Grid con columnas fijas: 5 en PC, 3 en móvil */}
        <div
          className='grid gap-3 max-w-[1100px] mx-auto w-full'
          style={{
            gridTemplateColumns: isMobile
              ? "repeat(3, 1fr)" // 3 columnas en móvil
              : "repeat(5, 1fr)", // 5 columnas en PC
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              style={{
                position: "relative",
                borderRadius: "5px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                height: isMobile ? "150px" : "250px", // Aumentado de 120/200 a 150/250
                gridColumn: `span ${anchos[index] === 1 ? 1 : 2}`, // Las anchas ocupan 2 columnas
              }}
              onClick={() => openModal(image)}
              className='hover:shadow-lg transition-shadow duration-300'
            >
              {pathname === "/gallery-service/window-decals/" ? (
                <h1 className='text-white text-start'>
                  {
                    [
                      "CLEAR",
                      "CLEAR",
                      "FROSTED",
                      "FROSTED",
                      "FROSTED",
                      "FROSTED",
                      "FROSTED",
                      "FROSTED",
                      "OPAQUE",
                      "OPAQUE",
                      "OPAQUE",
                      "OPAQUE",
                      "OPAQUE",
                      "OPAQUE",
                      "OPAQUE",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                      "PERFORATED",
                    ][index]
                  }
                </h1>
              ) : null}
              <Image
                width={anchos[index] === 1 ? 250 : 500} // Aumentado de 200/400 a 250/500
                height={isMobile ? 150 : 250} // Aumentado de 120/200 a 150/250
                src={image.src}
                alt={image.alt}
                priority={index < 4}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className='hover:opacity-100'
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "10%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className='sm:w-10 sm:h-10'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='sm:w-5 sm:h-5'
                  >
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                    <circle cx='12' cy='12' r='3'></circle>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "10px",
            }}
            onClick={closeModal}
          >
            <div
              style={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón anterior - Desktop */}
              {images.length > 1 && !isMobile && (
                <button
                  onClick={prevImage}
                  className='image-modal-prev'
                  style={{
                    position: "absolute",
                    left: "20px",
                    color: "#ffff00",
                    background: "rgba(0, 0, 0, 0.7)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 1001,
                    transition: "all 0.3s ease",
                    fontSize: "40px",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 0, 0.3)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ‹
                </button>
              )}

              {/* Botón siguiente - Desktop */}
              {images.length > 1 && !isMobile && (
                <button
                  onClick={nextImage}
                  className='image-modal-next'
                  style={{
                    position: "absolute",
                    right: "20px",
                    color: "#ffff00",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 1001,
                    transition: "all 0.3s ease",
                    fontSize: "40px",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 0, 0.3)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ›
                </button>
              )}

              {/* Contenedor de la imagen - Más grande para monitores grandes */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  width={1400}
                  height={900}
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "92vw",
                    maxHeight: "85vh",
                    borderRadius: "5px",
                    objectFit: "contain",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.8)",
                  }}
                />

                {/* Contador de imágenes */}
                {images.length > 1 && (
                  <div
                    style={{
                      color: "#ffff00",
                      marginTop: "25px",
                      fontSize: isMobile ? "16px" : "20px",
                      padding: "10px 25px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      borderRadius: "5px",
                    }}
                  >
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Botones de navegación para móvil - en los lados de la imagen */}
              {images.length > 1 && isMobile && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: "absolute",
                      left: "10px",
                      color: "#ffff00",
                      alignItems: "center",
                      height: "45px",
                      width: "45px",
                      display: "flex",
                      background: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "50%",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 1001,
                      fontSize: "35px",
                      paddingBottom: "2px",
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    style={{
                      position: "absolute",
                      right: "10px",
                      color: "#ffff00",
                      height: "45px",
                      width: "45px",
                      background: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 1001,
                      fontSize: "35px",
                      paddingBottom: "2px",
                    }}
                  >
                    ›
                  </button>
                </>
              )}

              {/* Botón de cerrar - Siempre visible */}
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  color: "#ffff00",
                  background: "rgba(0, 0, 0, 0.7)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  zIndex: 1001,
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 0, 0.3)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
