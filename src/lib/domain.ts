import { ENV } from "@/config/env";

export const getStorefrontDomain = (): string => {
  return ENV.STOREFRONT_DOMAIN || "salon.com";
};

export const getManagementAppUrl = (path: string = ""): string => {
  const devUrl = ENV.MANAGEMENT_APP_URL || "http://localhost:3000";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return path ? `${devUrl.replace(/\/$/, "")}${normalizedPath}` : devUrl;
};

export const getStorefrontUrl = (slug?: string): string => {
  const devBaseUrl = ENV.STOREFRONT_URL || "http://localhost:3001";
  return devBaseUrl;
};
