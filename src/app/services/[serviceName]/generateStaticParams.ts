// app/services/[serviceName]/generateStaticParams.ts

const services = [
  {
    service: "PROMO ITEMS",
    slug: "promo-items",
  },
  {
    service: "CAR WRAP",
    slug: "car-wrap",
  },
  {
    service: "CUSTOM SIGNS MARKERS",
    slug: "custom-signs-markers",
  },
  {
    service: "PRINTS",
    slug: "prints",
  },
  {
    service: "WIDE FORMAT SIGNS AND BANNERS",
    slug: "wide-format-signs-and-banners",
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.slug,
  }));
}
