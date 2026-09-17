import React from "react";
import { Star, TrendingUp, ShieldCheck, Award } from "lucide-react";

export const SocialProof: React.FC = () => {
  const stats = [
    {
      value: "500+",
      label: "Modern Salons & Spas",
      subtext: "Across 14 countries",
      icon: Award,
    },
    {
      value: "₹15 Cr+",
      label: "Appointments Processed",
      subtext: "Zero transaction failures",
      icon: TrendingUp,
    },
    {
      value: "99.98%",
      label: "Platform Uptime SLA",
      subtext: "Cloud-native infrastructure",
      icon: ShieldCheck,
    },
    {
      value: "4.9 / 5.0",
      label: "Salon Owner Rating",
      subtext: "From 1,200+ verified reviews",
      icon: Star,
    },
  ];

  const brands = [
    "Atelier Luxe",
    "Crown & Blade Barbershop",
    "Savoir Hair Studio",
    "The Velvet Room Spa",
    "Aura Wellness Club",
    "Monochrome Cuts",
  ];

  return (
    <section className="border-y border-border/80 bg-card/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-background/60 border border-border/70 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border/60">
          <p className="text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-6">
            Trusted by founders and lead stylists at premier studios
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {brands.map((brand, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-bold tracking-widest uppercase text-muted-foreground/80 hover:text-foreground transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
