export const ENV = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8080",
  MANAGEMENT_APP_URL: import.meta.env.VITE_MANAGEMENT_APP_URL || "http://localhost:3002",
  STOREFRONT_DOMAIN: import.meta.env.VITE_STOREFRONT_DOMAIN || "salon.com",
  STOREFRONT_URL: import.meta.env.VITE_STOREFRONT_URL || "http://localhost:3000",
};
