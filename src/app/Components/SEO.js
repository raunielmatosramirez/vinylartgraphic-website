// app/Components/SEO.jsx
"use client"; // Necesario porque usa hooks

import { usePathname } from 'next/navigation';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  structuredData 
}) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Title y meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`https://vinylartgraphic.com${pathname}`} />
      <meta property="og:type" content="website" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}