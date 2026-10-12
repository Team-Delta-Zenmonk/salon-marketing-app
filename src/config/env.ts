export const ENV = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://salon-management-service.vercel.app",
  MANAGEMENT_APP_URL: process.env.NEXT_PUBLIC_MANAGEMENT_APP_URL || "https://salon-management-app-beta.vercel.app",
  STOREFRONT_DOMAIN: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN || "salon.com",
  STOREFRONT_URL: process.env.NEXT_PUBLIC_STOREFRONT_URL || "https://salon-public-app.vercel.app",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "Veloura",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://salon-marketing-app.vercel.app",
  GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};
