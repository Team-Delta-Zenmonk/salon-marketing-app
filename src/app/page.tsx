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

export default function HomePage() {
  return (
    <>
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
