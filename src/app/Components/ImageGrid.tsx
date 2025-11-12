"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderSection from "@/app/Components/HeaderSection";

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
  // CAMBIO: usa Image en lugar de ImageData
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [altos, setAltos] = useState<number[]>([]);

  useEffect(() => {
    const generarAltoAleatorio = (
      min: number = 200,
      max: number = 600
    ): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const nuevosAltos = Array.from({ length: images.length }, () =>
      generarAltoAleatorio(40, 100)
    );

    setAltos(nuevosAltos);
  }, [images.length]);

  // CAMBIO: usa Image en lugar de ImageData
  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (altos.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div>Cargando imágenes...</div>
      </div>
    );
  }


  return (
    <section className='flex flex-col items-center justify-center text-center'>
      <HeaderSection title={title} text={description} />
      <div style={{ padding: "20px", width: "100%" }}>
        <div
          className='grid grid-cols-3 gap-1 max-w-[1100px] mx-auto w-full
                               sm:grid-cols-4 sm:gap-2
                               md:grid-cols-5 md:gap-3'
          style={{
            gridAutoRows: "10px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              style={{
                position: "relative",
                borderRadius: "1px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                gridRowEnd: `span ${Math.ceil(altos[index] / 10)}`,
              }}
              // CAMBIO: aquí image es de tipo Image, no ImageData
              onClick={() => openModal(image)}
              className='hover:shadow-lg transition-shadow duration-300'
            >
              <Image
                width={360}
                height={altos[index]}
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
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={closeModal}
          >
            <div
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
                position: "relative",
              }}
              className='sm:max-w-90 sm:max-h-90'
              // Agrega esto para evitar que se cierre al hacer click en la imagen
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                width={1600}
                height={600}
                src={selectedImage.src} // CAMBIO: quita el ? porque selectedImage no es null aquí
                alt={selectedImage.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
