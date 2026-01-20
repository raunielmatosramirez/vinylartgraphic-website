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
