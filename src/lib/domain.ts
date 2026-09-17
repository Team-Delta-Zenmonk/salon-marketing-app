
export const getStorefrontDomain = (): string => {
  return import.meta.env.VITE_STOREFRONT_DOMAIN || "salon.com";
};

export const getManagementAppUrl = (path: string = ""): string => {
  const isDev =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  const devUrl = import.meta.env.VITE_MANAGEMENT_APP_URL || "http://localhost:3000";
  const baseDomain = getStorefrontDomain();
  const prodUrl = `https://app.${baseDomain}`;

  const base = isDev ? devUrl : prodUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return path ? `${base}${normalizedPath}` : base;
};

export const getStorefrontUrl = (slug?: string): string => {
  const isDev =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  const devBaseUrl = import.meta.env.VITE_STOREFRONT_URL || "http://localhost:3001";
  const baseDomain = getStorefrontDomain();

  if (isDev) {
    return slug ? `${devBaseUrl}/?salon=${slug}` : devBaseUrl;
  }

  return slug ? `https://${slug}.${baseDomain}` : `https://${baseDomain}`;
};
