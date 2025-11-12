export const generateGalleryLink = (subserviceName: string) => {
  return `/gallery-service/${subserviceName.toLowerCase()
    .replace(/[^a-z0-9]/g, "-")}`;
};
