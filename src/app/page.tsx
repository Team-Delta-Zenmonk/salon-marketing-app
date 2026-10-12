import React from "react";
import { Hero } from "./_components/hero";
import { SocialProof } from "./_components/social-proof";
import { Features } from "./_components/features";
import { Preview } from "./_components/preview";
import { RoiCalculator } from "./_components/roi-calculator";
import { Pricing } from "./_components/pricing";
import { Testimonials } from "./_components/testimonials";
import { Faq } from "./_components/faq";
import { Cta } from "./_components/cta";
import faqsData from "@/data/faqs.json";
import testimonialsData from "@/data/testimonials.json";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://salon-marketing-app.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${appName} Salon OS`,
      description:
        "The modern operating system empowering salon owners, spas, and barbershops to streamline scheduling, elevate client experiences, and accelerate revenue.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },

    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: `${appName} Technologies Inc.`,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/management-icon.png`,
        width: 512,
        height: 512,
      },
      description:
        "The modern operating system empowering salon owners, spas, and barbershops to streamline scheduling, elevate client experiences, and accelerate revenue.",
      sameAs: [],
    },

    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: `${appName} Salon OS`,
      description:
        "All-in-one salon management platform with smart multi-staff scheduling, branded storefronts, POS invoicing with GST, and real-time inventory intelligence.",
      url: siteUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0",
        highPrice: "7999",
        offerCount: "4",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1200",
        bestRating: "5",
        worstRating: "1",
      },
      review: testimonialsData.map((t) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(t.rating),
          bestRating: "5",
        },
        reviewBody: t.quote
          .replaceAll("Zenmonk", appName)
          .replaceAll("ZenMonk", appName),
      })),
    },

    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqsData.map((faq) => ({
        "@type": "Question",
        name: faq.q
          .replaceAll("Zenmonk", appName)
          .replaceAll("ZenMonk", appName),
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a
            .replaceAll("Zenmonk", appName)
            .replaceAll("ZenMonk", appName),
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <SocialProof />
      <Features />
      <Preview />
      <RoiCalculator />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
