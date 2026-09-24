import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl } from "@/lib/domain";
import { FEATURE_PILLARS } from "./features.constants";
import { FeaturesPreview } from "./features-preview";

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentPillar = FEATURE_PILLARS[activeTab];
  const CurrentIcon = currentPillar.icon;

  return (
    <section id="features" className="py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" /> Complete Operating System
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Everything Your Salon Needs to Operate with Flawless Elegance.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            Designed specifically for modern hair salons, luxury spas, nail lounges, and premium barbershops.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FEATURE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md glow-orange-subtle scale-102"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{pillar.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm transition-all animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-2xs">
                  <CurrentIcon className="h-6 w-6" />
                </div>
                <Badge variant="accent" className="text-xs font-medium">
                  {currentPillar.tag}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {currentPillar.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed">
                {currentPillar.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentPillar.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href={getManagementAppUrl("/signup")}>
                  <Button className="gap-2 font-semibold group">
                    <span>Try This Feature Free</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FeaturesPreview activeTab={activeTab} current={currentPillar} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
