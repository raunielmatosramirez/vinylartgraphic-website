import HeaderSection from "../Components/HeaderSection";
import ImageGrid from "../Components/ImageGrid";
import SEO from "../Components/SEO";

const Gallery: React.FC = () => {
  const sampleImages = [
    {
      id: 1,
      src: "https://picsum.photos/seed/1/600/600",
      alt: "Paisaje montañoso",
    },
    {
      id: 2,
      src: "https://picsum.photos/seed/2/600/600",
      alt: "Ciudad nocturna",
    },
    {
      id: 3,
      src: "https://picsum.photos/seed/3/600/600",
      alt: "Playa tropical",
    },
    {
      id: 4,
      src: "https://picsum.photos/seed/4/600/600",
      alt: "Bosque verde",
    },
    {
      id: 5,
      src: "https://picsum.photos/seed/5/600/600",
      alt: "Desierto árido",
    },
    {
      id: 6,
      src: "https://picsum.photos/seed/6/600/600",
      alt: "Cascada natural",
    },
    {
      id: 7,
      src: "https://picsum.photos/seed/7/600/600",
      alt: "Arquitectura moderna",
    },
    {
      id: 8,
      src: "https://picsum.photos/seed/8/600/600",
      alt: "Animal salvaje",
    },
    {
      id: 9,
      src: "https://picsum.photos/seed/9/600/600",
      alt: "Comida gourmet",
    },
    {
      id: 10,
      src: "https://picsum.photos/seed/10/600/600",
      alt: "Arte abstracto",
    },
    {
      id: 11,
      src: "https://picsum.photos/seed/11/600/600",
      alt: "Deporte extremo",
    },
    {
      id: 12,
      src: "https://picsum.photos/seed/12/600/600",
      alt: "Música en vivo",
    },
    {
      id: 13,
      src: "https://picsum.photos/seed/13/600/600",
      alt: "Tecnología avanzada",
    },
    {
      id: 14,
      src: "https://picsum.photos/seed/14/600/600",
      alt: "Moda elegante",
    },
    {
      id: 15,
      src: "https://picsum.photos/seed/15/600/600",
      alt: "Viaje en carretera",
    },
    {
      id: 16,
      src: "https://picsum.photos/seed/16/600/600",
      alt: "Celebración festiva",
    },
    {
      id: 17,
      src: "https://picsum.photos/seed/17/600/600",
      alt: "Arte callejero",
    },
    {
      id: 18,
      src: "https://picsum.photos/seed/18/600/600",
      alt: "Naturaleza muerta",
    },
    {
      id: 19,
      src: "https://picsum.photos/seed/19/600/600",
      alt: "Deportes acuáticos",
    },
    {
      id: 20,
      src: "https://picsum.photos/seed/20/600/600",
      alt: "Cielo estrellado",
    },
    {
      id: 21,
      src: "https://picsum.photos/seed/21/600/600",
      alt: "Arquitectura histórica",
    },
    {
      id: 22,
      src: "https://picsum.photos/seed/22/600/600",
      alt: "Flores coloridas",
    },
    {
      id: 23,
      src: "https://picsum.photos/seed/23/600/600",
      alt: "Deportes de invierno",
    },
    {
      id: 24,
      src: "https://picsum.photos/seed/24/600/600",
      alt: "Cultura urbana",
    },
    {
      id: 25,
      src: "https://picsum.photos/seed/25/600/600",
      alt: "Aventura extrema",
    },
    {
      id: 26,
      src: "https://picsum.photos/seed/26/600/600",
      alt: "Gastronomía internacional",
    },
    {
      id: 27,
      src: "https://picsum.photos/seed/27/600/600",
      alt: "Arte digital",
    },
    {
      id: 28,
      src: "https://picsum.photos/seed/28/600/600",
      alt: "Vida silvestre",
    },
    {
      id: 29,
      src: "https://picsum.photos/seed/29/600/600",
      alt: "Celebridades",
    },
    {
      id: 30,
      src: "https://picsum.photos/seed/30/600/600",
      alt: "Innovación tecnológica",
    },
    {
      id: 31,
      src: "https://picsum.photos/seed/31/600/600",
      alt: "Arquitectura futurista",
    },
    {
      id: 32,
      src: "https://picsum.photos/seed/32/600/600",
      alt: "Paisaje urbano",
    },
    {
      id: 33,
      src: "https://picsum.photos/seed/33/600/600",
      alt: "Deportes de equipo",
    },
    {
      id: 34,
      src: "https://picsum.photos/seed/34/600/600",
      alt: "Arte tradicional",
    },
    {
      id: 35,
      src: "https://picsum.photos/seed/35/600/600",
      alt: "Aventura en la naturaleza",
    },
    {
      id: 36,
      src: "https://picsum.photos/seed/36/600/600",
      alt: "Moda vintage",
    },
    {
      id: 37,
      src: "https://picsum.photos/seed/37/600/600",
      alt: "Ciencia y tecnología",
    },
    {
      id: 38,
      src: "https://picsum.photos/seed/38/600/600",
      alt: "Arquitectura clásica",
    },
    {
      id: 39,
      src: "https://picsum.photos/seed/39/600/600",
      alt: "Deportes individuales",
    },
    {
      id: 40,
      src: "https://picsum.photos/seed/40/600/600",
      alt: "Arte contemporáneo",
    },
  ];
  const companyData = {
    name: "Vinyl Art Graphic",
    foundingYear: "2018",
    description: "Experts in custom vinyl art with over 5 years of experience",
    services: [
      "CAR WRAP",
      "PROMO ITEMS",
      "CUSTOM SIGNS MARKERS",
      "PRINTS",
      "WIDE FORMAT SIGNS AND BANNERS",
    ],
    awards: ["Best Design Company 2023", "Creative Innovation Award 2022"],
  };

  const seoConfig = {
    title: `Our Portfolio - ${companyData.name} | Vinyl Art Gallery & Projects`,
    description: `Explore our gallery of custom vinyl projects. ${
      companyData.description
    }. See our work in ${companyData.services
      .slice(0, 3)
      .join(", ")} and get inspired for your next project.`,
    canonical: "https://vinylartgraphic.com/gallery",
    ogImage: "https://vinylartgraphic.com/og-gallery.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Our Portfolio - ${companyData.name}`,
      description:
        "Gallery of custom vinyl art projects including car wraps, signs, and promotional items",
      publisher: {
        "@type": "Organization",
        name: companyData.name,
        logo: {
          "@type": "ImageObject",
          url: "https://vinylartgraphic.com/logo.png",
        },
      },
    },
  };
  return (
    <section className='min-h-screen'>
      <SEO {...seoConfig} />
      <div className='fixed inset-0 flex items-center justify-center z-0'>
        <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Header de la galería general */}
      {/* <div className='relative z-10 pt-8 pb-4 text-center'>
        <h1 className='text-3xl font-bold mb-2'>Our Complete Portfolio</h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Explore all our vinyl art projects and custom designs
        </p>
      </div> */}



      <ImageGrid images={sampleImages} title="Our Complete Portfolio" description="Explore all our vinyl art projects and custom designs" />
    </section>
  );
};

export default Gallery;
