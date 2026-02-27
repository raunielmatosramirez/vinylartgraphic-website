import Link from "next/link";
import HeaderSection from "../../Components/HeaderSection";
import CarrucelServices from "../../Components/CarrucelServices";
import SEO from "@/app/Components/SEO";
import { services } from "../../../utils/servicesData";

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.slug,
  }));
}

interface PageProps {
  params: Promise<{ serviceName: string }>;
}

export default async function ServicesDetail({ params }: PageProps) {
  const { serviceName } = await params;

  const currentService = services.find(
    (service) => service.slug === serviceName,
  );

  if (!currentService) {
    return (
      <>
        <section className='flex flex-col items-center justify-center text-center min-h-screen'>
          <div className='max-w-2xl mx-4'>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              Servicio no encontrado
            </h1>
            <p className='text-lg text-gray-600 mb-6'>
              Lo sentimos, el servicio que buscas no está disponible.
            </p>
            <Link
              href='/'
              className='bg-yellow-500 text-white px-6 py-1 transition duration-300'
            >
              Volver a Servicios
            </Link>
          </div>
        </section>
      </>
    );
  }

  const seoData = {
    title: `${currentService.service} - Vinyl Art Graphic`,
    description: `Professional ${currentService.service.toLowerCase()} services. ${
      currentService.subservices[0]?.description ||
      "High-quality printing and signage solutions."
    }`,
    canonical: `https://vinylartgraphic.com/services/${currentService.slug}`,
    ogImage:
      currentService.subservices[0]?.image_url ||
      "https://vinylartgraphic.com/og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: currentService.service,
      description:
        currentService.subservices[0]?.description ||
        "Professional printing and signage services",
      provider: {
        "@type": "Organization",
        name: "Vinyl Art Graphic",
      },
      areaServed: "United States",
      offers: {
        "@type": "Offer",
        description: currentService.service,
      },
    },
  };
  return (
    <>
      <SEO {...seoData} />

      <section className='flex flex-col items-center justify-center text-center relative'>
        <HeaderSection title={currentService.service} text='' />

        {/* Fondo */}
        <div className='fixed inset-0 flex items-center justify-center z-0'>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <CarrucelServices currentService={currentService} />
      </section>
    </>
  );
}
