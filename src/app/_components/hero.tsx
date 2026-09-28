import React from "react";
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenDemoButton } from "@/components/open-demo-button";
import { HeroCarousel } from "./hero-carousel";
import { getManagementAppUrl } from "@/lib/domain";

const demoImages = [
  "/demo-image/Screenshot from 2026-09-23 16-19-22.png",
  "/demo-image/Screenshot from 2026-09-23 16-19-35.png",
  "/demo-image/Screenshot from 2026-09-23 16-19-48.png",
  "/demo-image/Screenshot from 2026-09-23 16-21-42.png",
  "/demo-image/Screenshot from 2026-09-23 16-21-50.png",
  "/demo-image/Screenshot from 2026-09-23 16-22-01.png",
  "/demo-image/Screenshot from 2026-09-23 16-22-19.png",
  "/demo-image/Screenshot from 2026-09-23 16-22-27.png",
  "/demo-image/Screenshot from 2026-09-23 16-22-58.png",
  "/demo-image/Screenshot from 2026-09-23 16-26-07.png",
];

export const Hero: React.FC = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm animate-in fade-in duration-500 max-w-full text-balance">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-primary">
              The Next-Generation Operating System for Salons & Spas
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
            Elevate Your Salon. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-600 to-primary">
              Automate Every Booking.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
            Stop losing hours to missed calls, double-bookings, and manual paper logs. {appName} delivers a multi-staff smart scheduler, an instant branded web storefront, effortless POS invoicing, and real-time stock control.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a href={getManagementAppUrl("/signup")} className="w-full sm:w-auto">
              <Button size="xl" className="w-full sm:w-auto font-semibold gap-2 group text-base">
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <OpenDemoButton
              variant="outline"
              size="xl"
              className="w-full sm:w-auto text-base font-medium"
            >
              Book a 1-on-1 VIP Demo
            </OpenDemoButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>Live in under 3 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>Instant branded subdomain</span>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-18 relative mx-auto max-w-5xl rounded-xl p-3 sm:p-4 bg-gradient-to-b from-border/70 to-border/30 border border-border shadow-2xl">
          <div className="rounded-2xl bg-card border border-border/70 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-background/80 px-4 py-1 text-xs text-muted-foreground border border-border/70 font-mono">
                <ShieldCheck className="h-3 w-3 text-emerald-600" />
                <span>app.salon.com/dashboard</span>
              </div>
              <div className="text-[11px] font-medium text-muted-foreground hidden sm:block">
                Salon Management Suite
              </div>
            </div>

            <HeroCarousel images={demoImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
