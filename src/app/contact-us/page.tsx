import ContactUs from "@/app/Components/ContactUs";
import React from "react";
import SEO from "../Components/SEO";

const ContactUsPage = () => {
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
    title: `Contact Us - ${companyData.name} | Get Your Custom Vinyl Quote`,
    description: `Get in touch with ${companyData.name}. ${
      companyData.description
    }. Contact us for ${companyData.services
      .slice(0, 3)
      .join(", ")} and more. Free consultations and quotes available.`,
    canonical: "https://vinylartgraphic.com/contact-us",
    ogImage: "https://vinylartgraphic.com/og-contact.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contact Us - ${companyData.name}`,
      description: `Contact ${companyData.name} for custom vinyl art services and free quotes`,
      publisher: {
        "@type": "Organization",
        name: companyData.name,
        logo: {
          "@type": "ImageObject",
          url: "https://vinylartgraphic.com/LOGOVINYLART.svg",
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-800-VINYL-ART",
          email: "info@vinylartgraphic.com",
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      },
    },
  };
  return (
    <>
      <section className='flex flex-col items-center justify-center text-center py-12 px-1'>
        <SEO {...seoConfig} />
        <div className='fixed inset-0 flex items-center justify-center z-0 '>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className='w-[80%] md:w-[50%]  z-10 '>
          <ContactUs />
        </div>
      </section>
    </>
  );
};
export default ContactUsPage;
