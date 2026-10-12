import type { MetadataRoute } from "next";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";

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
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

