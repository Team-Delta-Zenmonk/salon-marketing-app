import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./_components/hero-section";
import { SocialProof } from "./_components/social-proof";
import { FeaturesBento } from "./_components/features-bento";
import { PlatformPreview } from "./_components/platform-preview";
import { RoiCalculator } from "./_components/roi-calculator";
import { PricingSection } from "./_components/pricing-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { FaqSection } from "./_components/faq-section";
import { CtaBanner } from "./_components/cta-banner";
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
      <Header onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        <HeroSection onOpenDemo={handleOpenDemo} />

        <SocialProof />

        <FeaturesBento />

        <PlatformPreview />

        <RoiCalculator />

        <PricingSection onOpenDemo={handleOpenDemo} />


        <TestimonialsSection />

        <FaqSection />

        <CtaBanner onOpenDemo={handleOpenDemo} />
      </main>

      <Footer />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
};
