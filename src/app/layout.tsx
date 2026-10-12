import type { Metadata, Viewport } from "next";
import React from "react";
import "./global.css";
import { StoreProvider } from "./store-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoModal } from "./_components/demo-modal";
import { FloatingWidget } from "@/components/floating-widget";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://salon-marketing-app.vercel.app";
const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${appName} — The Operating System for Modern Salons & Spas`,
    template: `%s | ${appName} Salon OS`,
  },

  description:
    "All-in-one salon management software. Multi-staff appointment scheduling, custom branded booking storefronts, lightning-fast POS billing with GST, and real-time inventory intelligence. Start your 14-day free trial — no credit card required.",

  applicationName: `${appName} Salon OS`,

  keywords: [
    "salon management software",
    "salon billing software India",
    "best salon software",
    "beauty parlour management system",
    "beauty parlour billing software",
    "spa booking software",
    "spa management software",
    "barbershop POS software",
    "hair salon appointment software",

    "salon appointment scheduling app",
    "online salon booking storefront",
    "multi-staff salon scheduler",
    "salon inventory management",
    "salon GST invoicing software",
    "salon staff commission tracking",
    "prevent salon no shows",
    "salon CRM software",

    "salon software free trial",
    "Fresha alternative",
    "Vagaro alternative",
    "Zenoti alternative",

    appName,
    `${appName} Salon OS`,
  ],

  authors: [{ name: `${appName} Technologies Inc.` }],
  creator: `${appName} Technologies Inc.`,
  publisher: `${appName} Technologies Inc.`,

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${appName} Salon OS`,
    title: `${appName} — The Operating System for Modern Salons & Spas`,
    description:
      "Automate appointments, launch branded client storefronts, speed up POS checkout, and track inventory in real time. 14-day free trial with zero setup fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} — The Operating System for Modern Salons & Spas`,
    description:
      "Automate salon appointments, launch branded storefronts, POS invoicing & inventory. Start free for 14 days.",
  },

  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),

  category: "Business Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <StoreProvider>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <DemoModal />
          <FloatingWidget />
        </StoreProvider>
      </body>
    </html>
  );
}
