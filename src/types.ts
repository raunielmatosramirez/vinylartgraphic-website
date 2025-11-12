// types/services.ts
export interface Subservice {
  name: string;
  description: string;
  benefits: string[];
  gallery: string[];
}

export interface Service {
  service: string;
  image_url: string;
  subservices: Subservice[];
}