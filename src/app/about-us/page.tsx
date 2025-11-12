// app/about/page.jsx
import About from "@/app/Components/About";
import React from "react";
import SEO from "@/app/Components/SEO";

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
  title: `About Us - ${companyData.name} | Vinyl Art Experts`,
  description: `Discover ${companyData.name}. ${
    companyData.description
  }. Specialists in ${companyData.services.slice(0, 3).join(", ")} and more.`,
  canonical: "https://vinylartgraphic.com/about-us",
  ogImage: "https://vinylartgraphic.com/og-about.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About Us - ${companyData.name}`,
    description: companyData.description,
    publisher: {
      "@type": "Organization",
      name: companyData.name,
      logo: {
        "@type": "ImageObject",
        url: "https://vinylartgraphic.com/logo.png",
      },
    },
    mainEntity: {
      "@type": "Organization",
      name: companyData.name,
      foundingDate: companyData.foundingYear,
      description: companyData.description,
      knowsAbout: companyData.services,
      awards: companyData.awards,
      areaServed: "National and International",
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <section className='flex flex-col items-center justify-center text-center py-12 px-4'>
        <div className='fixed inset-0 flex items-center justify-center z-0'>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <About />
      </section>
    </>
  );
};

export default AboutPage;
// "use client"
// import React from 'react';

// const HexagonWormNeon = () => {
//   return (
//     <div className="hexagon-worm-container">
//       {/* Fondo negro sólido */}
//       <div className="black-background"></div>

//       {/* Gusanitos de neón que se mueven detrás de los hexágonos */}
//       <div className="neon-worms">
//         <div className="worm worm-1"></div>
//         <div className="worm worm-2"></div>
//         <div className="worm worm-3"></div>
//         <div className="worm worm-4"></div>
//         <div className="worm worm-5"></div>
//       </div>

//       {/* Grid de hexágonos grises sólidos muy unidos */}
//       <div className="hexagon-grid">
//         {Array.from({ length: 280 }).map((_, index) => {
//           const row = Math.floor(index / 18);
//           const col = index % 18;
//           const isOffset = row % 2 === 1;

//           return (
//             <div
//               key={index}
//               className="hexagon-hex"
//               style={{
//                 left: `calc(${col * 5.8}% + ${isOffset ? '2.9%' : '0%'})`,
//                 top: `${row * 10}%`,
//                 animationDelay: `${(index % 25) * 0.03}s`
//               }}
//             >
//               <div className="hexagon-inner-hex"></div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HexagonWormNeon;
