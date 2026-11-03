import type { MetadataRoute } from "next";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Salops";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${appName} — Salon Management Platform`,
    short_name: appName,
    description:
      "All-in-one salon OS: scheduling, storefronts, POS invoicing, and inventory.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7ed",
    theme_color: "#f97316",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

