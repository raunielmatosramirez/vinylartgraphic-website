import Link from "next/link";
import HeaderSection from "../../Components/HeaderSection";
import CarrucelServices from "../../Components/CarrucelServices";
const services = [
  {
    service: "PROMO ITEMS",
    slug: "promo-items",
    subservices: [
      {
        name: "High-Quality T-Shirt Printing",
        image_url: "https://example.com/images/tshirt-printing.jpg",
        description:
          "We transform your ideas into unique, high-impact t-shirts. Using state-of-the-art technology and premium materials, we guarantee durable, sharp prints that perfectly reflect your style or brand identity.",
        benefits: [
          "Branding and Visibility: Create t-shirts for your team, event, or marketing campaign and turn yourself into a walking billboard.",
          "Long-Lasting Quality: Our prints withstand wash after wash without fading or cracking.",
          "Unlimited Expression: Perfect for personalized gifts, special events (weddings, birthdays), business merchandise, or simply expressing your creativity.",
          "Time Saving: We handle the entire process: consultation, printing, and logistics, so you only have to worry about wearing your design.",
        ],
        gallery: [
          "assets/images/tshirt1.jpg",
          "assets/images/tshirt2.jpg",
          "assets/images/tshirt3.jpg",
          "assets/images/tshirt4.jpg",
        ],
      },
      {
        name: "Custom Hat Printing and Embroidery",
        image_url: "https://example.com/images/hat-printing.jpg",
        description:
          "Top off your brand's look with custom-designed hats. We specialize in high-quality printing and precise embroidery to create head-turning headwear that promotes your brand in style and comfort.",
        benefits: [
          "Powerful Branding: Hats are a walking billboard for your logo. Increase brand visibility and recognition everywhere you go.",
          "Project a Professional Image: A well-made, custom hat elevates your brand's perceived value and creates a unified, professional look for your team.",
          "Unmatched Durability: Our embroidered and printed hats are built to last, maintaining a crisp and clean appearance through daily wear and washing.",
          "Ideal for Promotions: Create highly desirable merchandise for your customers or effective promotional items for events, trade shows, and giveaways.",
        ],
        gallery: [
          "assets/images/hat1.jpg",
          "assets/images/hat2.jpg",
          "assets/images/hat3.jpg",
          "assets/images/hat4.jpg",
        ],
      },
      {
        name: "Custom Key Chain Printing",
        image_url: "https://example.com/images/keychain-printing.jpg",
        description:
          "Turn small items into powerful brand ambassadors. Our custom key chain printing delivers miniature, high-impact marketing tools that keep your brand in your customers' hands and on their minds, every single day.",
        benefits: [
          "Maximize Daily Brand Exposure: Key chains are used daily, offering constant, passive visibility for your brand long after the initial purchase or giveaway.",
          "Create Tangible Customer Connections: A functional, well-designed key chain is a appreciated gift that fosters loyalty and serves as a constant reminder of your business.",
          "Cost-Effective Marketing: They are an affordable promotional product with an exceptionally long lifespan, providing a high return on investment.",
          "Versatile for Any Occasion: Perfect as corporate gifts, trade show giveaways, loyalty rewards, merchandise for fans, or commemorative items for events.",
        ],
        gallery: [
          "assets/images/keychain1.jpg",
          "assets/images/keychain2.jpg",
          "assets/images/keychain3.jpg",
          "assets/images/keychain4.jpg",
        ],
      },
    ],
  },
  {
    service: "CAR WRAP",
    slug: "car-wrap",
    subservices: [
      {
        name: "Professional Vehicle Wrapping and Graphics",
        image_url: "https://example.com/images/car-wrap.jpg",
        description:
          "Transform any vehicle into a stunning, mobile billboard. Our high-quality car wraps offer a dynamic and cost-effective way to achieve a custom look, protect your paint, and deliver unmatched advertising reach on the move.",
        benefits: [
          "Maximize Advertising ROI: A single wrapped car can generate thousands of daily impressions, turning every trip into a powerful marketing campaign at a fraction of traditional ad costs.",
          "Total Paint Protection: Shield your vehicle's original paint from UV fading, minor scratches, and road debris, preserving its resale value.",
          "Achieve Any Look: Whether it's a bold company brand, a sleek matte finish, or a full-color graphic, the possibilities are endless without the permanence of a paint job.",
          "Build Instant Credibility: A professionally wrapped vehicle projects a successful, established, and trustworthy image for your business.",
        ],
        gallery: [
          "assets/images/carwrap1.jpg",
          "assets/images/carwrap2.jpg",
          "assets/images/carwrap3.jpg",
          "assets/images/carwrap4.jpg",
        ],
      },
    ],
  },
  {
    service: "CUSTOM SIGNS MARKERS",
    slug: "custom-signs-markers",
    subservices: [
      {
        name: "Impactful Light boxes and Blade Signs",
        image_url: "https://example.com/images/lightbox-signs.jpg",
        description:
          "We create sophisticated, high-visibility illuminated signage that makes your business literally shine. Perfect for capturing attention day and night, projecting a modern and professional image.",
        benefits: [
          "Maximum 24/7 Visibility: An illuminated sign ensures your business is clearly seen during the day and stands out at night, increasing brand recognition.",
          "Professional and Modern Image: Projects confidence, stability, and quality to your potential customers.",
          "Attracts More Clients: Acts as the centerpiece of your outdoor marketing strategy, driving a steady flow of customers to your establishment.",
          "Long-Lasting and Efficient Solution: LED technology offers superior brightness with minimal energy consumption and a long lifespan, providing savings in the long run.",
        ],
        gallery: [
          "assets/images/lightbox1.jpg",
          "assets/images/lightbox2.jpg",
          "assets/images/lightbox3.jpg",
          "assets/images/lightbox4.jpg",
        ],
      },
      {
        name: "Premium Aluminum Signs",
        image_url: "https://example.com/images/aluminum-signs.jpg",
        description:
          "Durable, professional, and weather-resistant aluminum signage designed to deliver clear messaging for years. Perfect for indoor and outdoor use, these signs offer a sleek, modern look with exceptional longevity.",
        benefits: [
          "Long-Lasting Durability: Resists rust, fading, and harsh weather conditions, ensuring your message stays clear and vibrant.",
          "Elevate Your Professional Image: Sleek, polished designs enhance your brand's credibility and visibility.",
          "Indoor and Outdoor Versatility: Perfect for storefronts, offices, warehouses, parks, and public spaces.",
          "Low Maintenance: Once installed, aluminum signs require minimal upkeep, saving time and resources.",
        ],
        gallery: [
          "assets/images/aluminum1.jpg",
          "assets/images/aluminum2.jpg",
          "assets/images/aluminum3.jpg",
          "assets/images/aluminum4.jpg",
        ],
      },
      {
        name: "Custom Window Clings and Perforated Window Film",
        image_url: "https://example.com/images/window-clings.jpg",
        description:
          "Transform your windows into powerful marketing tools with our custom window clings. These versatile, adhesive-free graphics promote your business, enhance privacy, and add style—all while remaining easily removable without residue.",
        benefits: [
          "Increase Visibility: Attract passersby with eye-catching designs that turn windows into advertising space.",
          "Cost-Effective Advertising: Promote sales, events, or branding without blocking natural light.",
          "Enhance Privacy: Use perforated films to maintain outward visibility while preventing outsiders from looking in.",
          "Non-Permanent Solution: Perfect for seasonal promotions, rental spaces, or temporary campaigns.",
        ],
        gallery: [
          "assets/images/windowcling1.jpg",
          "assets/images/windowcling2.jpg",
          "assets/images/windowcling3.jpg",
          "assets/images/windowcling4.jpg",
        ],
      },
      {
        name: "Front-Lit Channel Letter Signs",
        image_url: "https://example.com/images/frontlit-signs.jpg",
        description:
          "Make your brand shine with custom front-lit channel letter signs. These professional, eye-catching signs are perfect for storefronts, offices, and buildings, offering maximum visibility day and night with their elegant illuminated design.",
        benefits: [
          "24/7 Brand Visibility: Stand out during the day with sleek, professional lettering and at night with vibrant illumination.",
          "Build Trust and Credibility: A well-crafted channel letter sign signals an established, professional business.",
          "Energy-Efficient and Durable: LED technology ensures long-lasting performance with minimal maintenance.",
          "Customizable to Your Brand: Choose from a wide range of colors, finishes, and lighting effects to perfectly match your brand identity.",
        ],
        gallery: [
          "assets/images/frontlit1.jpg",
          "assets/images/frontlit2.jpg",
          "assets/images/frontlit3.jpg",
          "assets/images/frontlit4.jpg",
        ],
      },
      {
        name: "Back-Lit Channel Letter Signs",
        image_url: "https://example.com/images/backlit-signs.jpg",
        description:
          "Create stunning visual impact with our custom back-lit channel letter signs. These elegant illuminated signs use halo-lit effects to project your brand's identity onto any surface, delivering sophisticated visibility and modern appeal.",
        benefits: [
          "Elegant Nighttime Presence: Creates a sophisticated halo effect that makes your business stand out after dark",
          "Modern Professional Image: Projects contemporary, upscale branding that attracts quality customers",
          "Energy Efficient Operation: LED technology provides brilliant illumination with minimal power consumption",
          "Durable and Weather-Resistant: Built to withstand outdoor elements while maintaining pristine appearance",
          "Architectural Enhancement: Ads striking visual interest to your building's facade without being overpowering",
        ],
        gallery: [
          "assets/images/backlit1.jpg",
          "assets/images/backlit2.jpg",
          "assets/images/backlit3.jpg",
          "assets/images/backlit4.jpg",
        ],
      },
      {
        name: "Monument and Pylon Signs",
        image_url: "https://example.com/images/monument-signs.jpg",
        description:
          "Make a lasting statement with our custom monument and pylon signs. These ground-level or elevated structures provide superior visibility, establish your brand presence, and create a professional gateway to your location.",
        benefits: [
          "Establish Permanent Presence: Create a landmark identity that reinforces your brand credibility",
          "Maximize Property Visibility: Ensure your location is easily found by customers and visitors",
          "Professional Image: Project stability and success with high-end architectural signage",
          "24/7 Brand Exposure: Illuminated options keep your business visible day and night",
          "Durable Investment: Built to withstand weather and maintain appearance for years with minimal maintenance",
        ],
        gallery: [
          "assets/images/monument1.jpg",
          "assets/images/monument2.jpg",
          "assets/images/monument3.jpg",
          "assets/images/monument4.jpg",
        ],
      },
      {
        name: "Non-Illuminated Signs",
        image_url: "https://example.com/images/nonilluminated-signs.jpg",
        description:
          "Make a clear, professional statement with our custom non-illuminated signs. Perfect for businesses, offices, and public spaces, these signs offer a clean, sophisticated look while effectively communicating your message.",
        benefits: [
          "Cost-Effective Solution: Professional signage without the ongoing energy costs of illuminated options",
          "Elegant Simplicity: Clean, minimalist design that enhances your space's aesthetic",
          "Durability and Weather Resistance: Long-lasting materials that maintain their appearance over time",
          "Versatile Application: Ideal for indoor offices, retail spaces, and outdoor areas where illumination isn't required",
          "Easy Maintenance: Simple cleaning and care with no electrical components to maintain",
        ],
        gallery: [
          "assets/images/nonilluminated1.jpg",
          "assets/images/nonilluminated2.jpg",
          "assets/images/nonilluminated3.jpg",
          "assets/images/nonilluminated4.jpg",
        ],
      },
      {
        name: "Indoor Signs",
        image_url: "https://example.com/images/indoor-signs.jpg",
        description:
          "Enhance navigation, reinforce branding, and improve communication within your space with our custom indoor signage solutions. From office directories to safety signs, we create clear, professional signs that elevate your interior environment.",
        benefits: [
          "Improve Navigation and Efficiency: Help visitors and employees move through your space confidently and save time",
          "Reinforce Brand Identity: Keep your brand visible and consistent throughout your interior environment",
          "Promote Safety and Compliance: Clearly mark exits, hazards, and required protocols with professional safety signage",
          "Enhance Professionalism: A well-signed space appears more organized, welcoming, and trustworthy",
          "Flexible and Scalable: Update or expand your signage as your business grows or changes",
        ],
        gallery: [
          "assets/images/indoor1.jpg",
          "assets/images/indoor2.jpg",
          "assets/images/indoor3.jpg",
          "assets/images/indoor4.jpg",
        ],
      },
      {
        name: "Neon Flex Signs",
        image_url: "https://example.com/images/neon-signs.jpg",
        description:
          "Capture the vibrant, nostalgic glow of traditional neon with the durability and versatility of modern LED technology. Our Neon Flex signs offer eye-catching illumination, customizable designs, and energy-efficient performance for any space.",
        benefits: [
          "Stunning Visual Impact: Add a retro-modern aesthetic that grabs attention and enhances ambiance.",
          "Versatile Applications: Perfect for storefronts, bars, restaurants, events, home decor, and creative branding.",
          "Cost-Effective and Safe: Achieve the neon look without the high energy costs or fragility of traditional glass neon.",
          "Eco-Friendly Lighting: LED-based technology reduces environmental impact and operational costs.",
          "Customizable Creativity: Bring any idea to life—from elegant script to bold graphics—with limitless design possibilities.",
        ],
        gallery: [
          "assets/images/neon1.jpg",
          "assets/images/neon2.jpg",
          "assets/images/neon3.jpg",
          "assets/images/neon4.jpg",
        ],
      },
    ],
  },
  {
    service: "PRINTS",
    slug: "prints",
    subservices: [
      {
        name: "Professional Business Cards",
        image_url: "https://example.com/images/business-cards.jpg",
        description:
          "Make a powerful first impression with premium business cards that reflect your brand's quality and professionalism. From sleek minimalist designs to bold creative statements, we deliver cards that get noticed and remembered.",
        benefits: [
          "Strong First Impression: Professionally designed cards establish immediate credibility",
          "Effective Networking Tool: Create memorable connections that lead to more business opportunities",
          "Brand Consistency: Maintain your professional image across all marketing materials",
          "Tangible Marketing: Physical cards often make a stronger impact than digital contacts",
          "Versatile Information: Display essential contact details and social media handles in one place",
        ],
        gallery: [
          "assets/images/businesscards1.jpg",
          "assets/images/businesscards2.jpg",
          "assets/images/businesscards3.jpg",
          "assets/images/businesscards4.jpg",
        ],
      },
      {
        name: "Flyers and Brochures",
        image_url: "https://example.com/images/flyers-brochures.jpg",
        description:
          "Capture attention and communicate your message effectively with professionally designed flyers and brochures. Whether for promotions, events, or informational purposes, we create print materials that inform, engage, and drive action.",
        benefits: [
          "Effective Promotion: Reach your target audience with compelling visuals and clear messaging",
          "Tangible Marketing: Physical materials that customers can hold and reference later",
          "Versatile Use: Ideal for events, product launches, service menus, company overviews, and direct mail",
          "Brand Consistency: Maintain professional branding across all your printed materials",
          "Cost-Efficient Marketing: High-impact results without the expense of large-scale advertising",
        ],
        gallery: [
          "assets/images/flyers1.jpg",
          "assets/images/flyers2.jpg",
          "assets/images/flyers3.jpg",
          "assets/images/flyers4.jpg",
        ],
      },
      {
        name: "Carbonless Forms Invoices or Receipts",
        image_url: "https://example.com/images/carbonless-forms.jpg",
        description:
          "Streamline your paperwork with professional carbonless forms. Perfect for invoices, receipts, work orders, and contracts, these multi-part forms create instant copies without the mess of carbon paper, improving efficiency and organization.",
        benefits: [
          "Instant Copies: Create clear, legible copies for you and your clients simultaneously",
          "Professional Appearance: Well-designed forms build trust and credibility",
          "Time-Saving Efficiency: Eliminate the need for photocopying or manual duplicate writing",
          "Organization Made Easy: Color-coded copies help you and your clients file documents correctly",
          "Versatile Applications: Ideal for service businesses, contractors, medical offices, and retail",
        ],
        gallery: [
          "assets/images/forms1.jpg",
          "assets/images/forms2.jpg",
          "assets/images/forms3.jpg",
          "assets/images/forms4.jpg",
        ],
      },
      {
        name: "Custom Stickers and Decals",
        image_url: "https://example.com/images/stickers-decals.jpg",
        description:
          "Make your mark with high-quality, versatile stickers and decals. Perfect for branding, promotions, product labeling, or personal expression, our durable stickers are designed to stick and stay wherever you need them.",
        benefits: [
          "Boost Brand Visibility: Use stickers as affordable, portable advertising on products, packaging, or as free giveaways",
          "Versatile Applications: Ideal for branding, event promotions, product labels, bumper stickers, and window decals",
          "Durable and Long-Lasting: Weather-resistant and scratch-proof options for indoor or outdoor use",
          "Easy to Apply: Peel-and-stick convenience with no mess or special tools required",
          "Cost-Effective Marketing: Reach a wide audience with a low-cost, high-impact promotional tool",
        ],
        gallery: [
          "assets/images/stickers1.jpg",
          "assets/images/stickers2.jpg",
          "assets/images/stickers3.jpg",
          "assets/images/stickers4.jpg",
        ],
      },
    ],
  },
  {
    service: "WIDE FORMAT SIGNS AND BANNERS",
    slug: "wide-format-signs-and-banners",
    subservices: [
      {
        name: "Micro-Perf Adhesive Vinyl",
        image_url: "https://example.com/images/microperf-vinyl.jpg",
        description:
          "Achieve high-impact, see-through graphics without blocking natural light. Our micro-perf adhesive vinyl is perfect for turning windows and glass surfaces into one-way vision advertising spaces, combining visibility with functionality.",
        benefits: [
          "Maximize Advertising Space: Transform idle windows into engaging marketing displays",
          "Maintain Natural Light: Enjoy unobstructed views and brightness while promoting your brand",
          "Versatile Applications: Ideal for storefronts, office windows, vehicle windows, and event spaces",
          "Durable and Long-Lasting: Resists fading, peeling, and weather elements for lasting impact",
          "Cost-Effective Branding: Reach a broader audience with minimal investment and no structural changes",
        ],
        gallery: [
          "assets/images/microperf1.jpg",
          "assets/images/microperf2.jpg",
          "assets/images/microperf3.jpg",
          "assets/images/microperf4.jpg",
        ],
      },
      {
        name: "Banner Printing",
        image_url: "https://example.com/images/banner-printing.jpg",
        description:
          "Make a big statement with high-quality, durable banners perfect for any event or promotion. From indoor gatherings to outdoor advertising, our custom banners are designed to capture attention and deliver your message effectively.",
        benefits: [
          "High Visibility: Ideal for grand openings, sales, events, trade shows, and directional signage",
          "Versatile Use: Suitable for indoor and outdoor promotions, hanging, or freestanding displays",
          "Cost-Effective Advertising: Reach a broad audience with a reusable, impactful marketing tool",
          "Quick Turnaround: Get your message up fast with our efficient design and printing process",
          "Professional Impact: Enhance your brand's credibility with clean, well-designed banners",
        ],
        gallery: [
          "assets/images/banner1.jpg",
          "assets/images/banner2.jpg",
          "assets/images/banner3.jpg",
          "assets/images/banner4.jpg",
        ],
      },
      {
        name: "Frosted Vinyl Window Films",
        image_url: "https://example.com/images/frosted-vinyl.jpg",
        description:
          "Add privacy, style, and sophistication to any glass surface with our frosted vinyl films. Perfect for offices, storefronts, and homes, they provide an elegant frosted glass effect while maintaining brightness and a modern aesthetic.",
        benefits: [
          "Privacy Without Darkness: Obscures visibility while still allowing natural light",
          "Professional Appearance: Creates a clean, modern look for offices and businesses",
          "Brand Customization: Incorporate logos, patterns, or text for branded privacy solutions",
          "UV Protection: Helps reduce sun glare and protects interiors from harmful UV rays",
          "Versatile Applications: Ideal for conference rooms, storefronts, bathroom windows, and interior partitions",
        ],
        gallery: [
          "assets/images/frosted1.jpg",
          "assets/images/frosted2.jpg",
          "assets/images/frosted3.jpg",
          "assets/images/frosted4.jpg",
        ],
      },
      {
        name: "Transparent Vinyl Graphics",
        image_url: "https://example.com/images/transparent-vinyl.jpg",
        description:
          "Add seamless branding and messaging to any transparent surface with our clear vinyl graphics. Perfect for storefront windows, glass doors, and displays, these nearly invisible applications keep views clear while effectively promoting your brand.",
        benefits: [
          "Maintain Visibility: Keep glass surfaces transparent while adding effective branding",
          "Professional Appearance: Create a clean, integrated look that enhances your space",
          "Versatile Applications: Ideal for storefronts, office glass, vehicle windows, and display cases",
          "Promotional Flexibility: Perfect for seasonal promotions, business hours, or permanent branding",
          "Easy Updates: Remove and replace graphics as needed without damaging surfaces",
        ],
        gallery: [
          "assets/images/transparent1.jpg",
          "assets/images/transparent2.jpg",
          "assets/images/transparent3.jpg",
          "assets/images/transparent4.jpg",
        ],
      },
      {
        name: "Roll-Up Banners",
        image_url: "https://example.com/images/rollup-banners.jpg",
        description:
          "Professional, portable, and powerful—our roll-up banners offer a sleek and easy way to display your brand at events, trade shows, and in-store promotions. Set up in seconds and make a lasting impression wherever you go.",
        benefits: [
          "Maximize Portability: Lightweight and easy to carry—ideal for events, presentations, and pop-up displays",
          "Quick Setup: Unfold, extend, and secure in seconds—no tools or technical skills required",
          "Reusable and Cost-Effective: Use repeatedly for multiple events, saving time and resources",
          "Enhance Brand Visibility: Showcase logos, promotions, or key messages with high-impact visuals",
          "Versatile Use: Perfect for trade shows, conferences, retail spaces, receptions, and more",
        ],
        gallery: [
          "assets/images/rollup1.jpg",
          "assets/images/rollup2.jpg",
          "assets/images/rollup3.jpg",
          "assets/images/rollup4.jpg",
        ],
      },
      {
        name: "A-Frame Sidewalk Signs with Printing",
        image_url: "https://example.com/images/aframe-signs.jpg",
        description:
          "Capture foot traffic and promote your daily offers with durable, weather-resistant A-frame sidewalk signs. Perfect for cafes, retail stores, and events, these portable signs turn passersby into customers.",
        benefits: [
          "Increase Walk-In Traffic: Attract attention from both directions of foot traffic with eye-catching designs",
          "Promote Daily Specials: Easily update offers, events, or menus with interchangeable inserts or chalkboard surfaces",
          "Cost-Effective Advertising: Reusable and long-lasting—pay once, promote for years",
          "Versatile and Portable: Move indoors or outdoors as needed—no permanent installation required",
          "Builds Brand Presence: Reinforce your logo and brand style right at the street level",
        ],
        gallery: [
          "assets/images/aframe1.jpg",
          "assets/images/aframe2.jpg",
          "assets/images/aframe3.jpg",
          "assets/images/aframe4.jpg",
        ],
      },
      {
        name: "Outdoor Car Magnets",
        image_url: "https://example.com/images/car-magnets.jpg",
        description:
          "Turn any vehicle into a mobile billboard with our durable, high-quality outdoor car magnets. Perfect for temporary promotions, business identification, or personal expression, they're easy to apply, remove, and reuse without damaging your vehicle's paint.",
        benefits: [
          "Mobile Advertising: Reach thousands of potential customers wherever you drive",
          "Cost-Effective Marketing: Get ongoing exposure for a fraction of traditional advertising costs",
          "Easy to Use: Simply wipe clean and apply—no tools or installation required",
          "Non-Permanent Solution: Perfect for temporary campaigns, business branding, or event promotions",
          "Vehicle Paint Protection: Safe for car surfaces—no residue or damage when properly applied and removed",
        ],
        gallery: [
          "assets/images/carmagnets1.jpg",
          "assets/images/carmagnets2.jpg",
          "assets/images/carmagnets3.jpg",
          "assets/images/carmagnets4.jpg",
        ],
      },
      {
        name: "Custom Flag Printing",
        image_url: "https://example.com/images/custom-flags.jpg",
        description:
          "Make a statement that moves with custom-printed flags! Ideal for branding, events, or promotions, our high-quality flags are designed to catch the eye and stand up to the elements, helping your message soar.",
        benefits: [
          "High-Visibility Branding: Draw attention to your business, booth, or event from a distance",
          "Versatile and Portable: Easy to set up, take down, and transport for any occasion",
          "Durable and Reusable: Built to withstand wind, sun, and rain for repeated use",
          "Cost-Effective Advertising: A one-time investment for ongoing promotional impact",
          "Customizable Designs: Showcase logos, slogans, or promotional messages in any size or style",
        ],
        gallery: [
          "assets/images/flags1.jpg",
          "assets/images/flags2.jpg",
          "assets/images/flags3.jpg",
          "assets/images/flags4.jpg",
        ],
      },
      {
        name: "Yard Signs",
        image_url: "https://example.com/images/yard-signs.jpg",
        description:
          "Make a local impact with durable, weather-resistant yard signs. Perfect for real estate, political campaigns, local advertising, realtors, event directions, our signs are built to stand out and withstand the elements.",
        benefits: [
          "Hyper-Local Advertising: Target neighborhoods, events, or high-traffic areas effectively",
          "Easy Installation: Lightweight yet sturdy—set up quickly without tools or expertise",
          "Weather-Resistant: Designed to endure rain, wind, and sun without warping or fading",
          "Cost-Effective and Reusable: Ideal for short-term campaigns or reusable seasonal promotions",
          "Versatile Use: Great for open houses, campaign rallies, construction sites, or community events",
        ],
        gallery: [
          "assets/images/yardsigns1.jpg",
          "assets/images/yardsigns2.jpg",
          "assets/images/yardsigns3.jpg",
          "assets/images/yardsigns4.jpg",
        ],
      },
    ],
  },
];

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
    (service) => service.slug === serviceName
  );

  if (!currentService) {
    return (
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
    );
  }

  return (
    <>
      <section className='flex flex-col items-center justify-center text-center relative'>
        <HeaderSection
          title={currentService.service}
          // text='ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae debitis deleniti dignissimos.'
        />

        {/* Fondo */}
        <div className='fixed inset-0 flex items-center justify-center z-0'>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <CarrucelServices currentService={currentService} />
      </section>
    </>
  );
}
