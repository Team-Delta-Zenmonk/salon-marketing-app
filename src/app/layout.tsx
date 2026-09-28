import type { Metadata } from "next";
import React from "react";
import "./global.css";
import { StoreProvider } from "./store-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoModal } from "./_components/demo-modal";
import { FloatingWidget } from "@/components/floating-widget";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";

export const metadata: Metadata = {
  title: `${appName} — The Operating System for Modern Salons & Spas`,
  description:
    "Elevate your salon business. Automated client scheduling, custom branded storefronts, lightning-fast POS invoicing, and real-time inventory intelligence in one unified platform.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${appName} — The Operating System for Modern Salons & Spas`,
    description:
      "Elevate your salon business. Automated client scheduling, custom branded storefronts, lightning-fast POS invoicing, and real-time inventory intelligence in one unified platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} — The Operating System for Modern Salons & Spas`,
    description:
      "Elevate your salon business. Automated client scheduling, custom branded storefronts, lightning-fast POS invoicing, and real-time inventory intelligence in one unified platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary min-h-screen flex flex-col">
        <StoreProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <DemoModal />
          <FloatingWidget />
        </StoreProvider>
      </body>
    </html>
  );
}
