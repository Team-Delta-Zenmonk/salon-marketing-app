import React from "react";
import { Star, Quote, Sparkles, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Elena Rostova",
      role: "Founder & Creative Director",
      salon: "Atelier Luxe Salon • Beverly Hills",
      metric: "+38% Online Booking Growth",
      quote:
        "ZenMonk transformed our front desk. Our high-end clientele expects a flawless digital experience, and having our own custom booking portal at atelier-luxe.salon.com with upfront online deposits eliminated our weekend no-shows entirely.",
      rating: 5,
    },
    {
      name: "Devon Brooks",
      role: "Master Barber & Co-Owner",
      salon: "Crown & Blade Grooming Lounge • Brooklyn",
      metric: "14 Hours Saved Every Week",
      quote:
        "The POS checkout and split-tender billing is incredible. We bundle luxury pomades directly onto the haircut ticket, and inventory counts auto-deplete instantly. My stylists check their daily commission numbers from their phones without bugging management.",
      rating: 5,
    },
    {
      name: "Camille Dubois",
      role: "Operations Director",
      salon: "Savoir Wellness & Spa Group • Miami",
      metric: "₹3,80,000+ Recovered Revenue",
      quote:
        "Managing multiple treatment suites used to be a nightmare of overlapping paper schedules. ZenMonk's smart calendar with automated sanitation buffer times keeps all our estheticians perfectly synchronized across every room.",
      rating: 5,
    },
  ];

  return (
    <section id="proof" className="py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" /> Verified Salon Success
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Loved by Elite Stylists and Salon Owners Worldwide.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            See how top-tier salons streamlined operations, delighted clients, and accelerated profit margins with ZenMonk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between border-border/80 bg-card p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border/70">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <TrendingUp className="h-3 w-3" />
                    <span>{t.metric}</span>
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="text-[11px] font-medium text-primary mt-0.5">{t.salon}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
