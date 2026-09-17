import React from "react";
import { ArrowRight, Calendar, Clock, Sparkles, CheckCircle, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getManagementAppUrl } from "@/lib/domain";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 shadow-2xs backdrop-blur-sm animate-in fade-in duration-500">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-wide text-primary">
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
            Stop losing hours to missed calls, double-bookings, and manual paper logs. ZenMonk delivers a multi-staff smart scheduler, an instant branded web storefront, effortless POS invoicing, and real-time stock control.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a href={getManagementAppUrl("/signup")} className="w-full sm:w-auto">
              <Button size="xl" className="w-full sm:w-auto font-semibold gap-2 group text-base">
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Button
              variant="outline"
              size="xl"
              onClick={onOpenDemo}
              className="w-full sm:w-auto text-base font-medium"
            >
              Book a 1-on-1 VIP Demo
            </Button>
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

        <div className="mt-14 sm:mt-18 relative mx-auto max-w-5xl rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-border/70 to-border/30 border border-border shadow-2xl">
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

            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      Aura Luxury Salon & Spa — Live Dashboard
                    </h3>
                    <Badge variant="success" className="text-[11px]">
                      Storefront Active: aura.salon.com
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Real-time operational summary • Automated payouts active
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Today, Sept 17</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-muted/30 border border-border">
                  <div className="text-[11px] font-semibold text-muted-foreground">Total Bookings</div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mt-1">156</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ +12.5% this month</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/30 border border-border">
                  <div className="text-[11px] font-semibold text-muted-foreground">Total Customers</div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mt-1">892</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ +8.2% new clients</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="text-[11px] font-semibold text-muted-foreground">Today's Revenue</div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mt-1 font-mono">₹45,230</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ +18.1% vs avg</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/30 border border-border">
                  <div className="text-[11px] font-semibold text-muted-foreground">Avg. Ticket Size</div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mt-1 font-mono">₹290</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ +4.3% retail upsell</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background overflow-hidden">
                <div className="px-4 py-3 border-b border-border/80 bg-muted/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">Today's Live Appointment Queue</span>
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    18 Total Bookings Today
                  </span>
                </div>

                <div className="divide-y divide-border/60 text-xs">
                  <div className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs">
                        AS
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Aarav Sharma</div>
                        <div className="text-[11px] text-muted-foreground">Classic Haircut & Beard Sculpt • Jessica Taylor</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      <span className="font-mono font-bold text-foreground">₹550</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/25">
                        ● In Chair (10:30 AM)
                      </span>
                      <span className="text-[10px] text-muted-foreground hidden md:inline">Paid via Card</span>
                    </div>
                  </div>

                  <div className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        PP
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Priya Patel</div>
                        <div className="text-[11px] text-muted-foreground">Global Color & Balayage • David Smith</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      <span className="font-mono font-bold text-foreground">₹2,800</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                        ● Confirmed (11:45 AM)
                      </span>
                      <span className="text-[10px] text-muted-foreground hidden md:inline">Deposit Received</span>
                    </div>
                  </div>

                  <div className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-500/15 text-blue-700 flex items-center justify-center font-bold text-xs">
                        AI
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Ananya Iyer</div>
                        <div className="text-[11px] text-muted-foreground">Deluxe Gel Manicure • Sophia Loren</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      <span className="font-mono font-bold text-foreground">₹950</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/25">
                        ● Completed
                      </span>
                      <span className="text-[10px] text-muted-foreground hidden md:inline">Paid via UPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
