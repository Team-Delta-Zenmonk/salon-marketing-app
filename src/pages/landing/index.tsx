import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWidget } from "@/components/floating-widget";
import { Hero } from "./_components/hero";
import { SocialProof } from "./_components/social-proof";
import { Features } from "./_components/features";
import { Preview } from "./_components/preview";
import { RoiCalculator } from "./_components/roi-calculator";
import { Pricing } from "./_components/pricing";
import { Testimonials } from "./_components/testimonials";
import { Faq } from "./_components/faq";
import { Cta } from "./_components/cta";
import { DemoModal } from "./_components/demo-modal";

export const LandingPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/15 selection:text-primary">
      <Header />

      <main className="flex-1">
        <Hero onOpenDemo={handleOpenDemo} />

        <SocialProof />

        <Features />

        <Preview />

        <RoiCalculator />

        <Pricing onOpenDemo={handleOpenDemo} />

        <Testimonials />

        <Faq />

        <Cta onOpenDemo={handleOpenDemo} />
      </main>

      <Footer />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />

      <FloatingWidget onOpenDemo={handleOpenDemo} />
    </div>
  );
};
