export const ENV = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080",
  MANAGEMENT_APP_URL: process.env.NEXT_PUBLIC_MANAGEMENT_APP_URL || "http://localhost:3002",
  STOREFRONT_DOMAIN: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN || "salon.com",
  STOREFRONT_URL: process.env.NEXT_PUBLIC_STOREFRONT_URL || "http://localhost:3000",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "Veloura",
};
