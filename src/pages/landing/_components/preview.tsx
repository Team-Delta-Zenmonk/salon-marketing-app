import React, { useState } from "react";
import { Laptop, Smartphone, Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl, getStorefrontUrl } from "@/lib/domain";

export const Preview: React.FC = () => {
  const [viewMode, setViewMode] = useState<"admin" | "storefront">("admin");

  return (
    <section id="preview" className="py-20 lg:py-32 bg-card/30 border-y border-border/70 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" /> Dual-Sided Experience
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Two Powerful Experiences. One Unified Database.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            Toggle between the desktop management suite for your team and the mobile-first customer storefront for your clients.
          </p>

          <div className="inline-flex items-center p-1.5 rounded-2xl bg-card border border-border shadow-xs mt-4">
            <button
              onClick={() => setViewMode("admin")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                viewMode === "admin"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Laptop className="h-4 w-4" />
              <span>Salon Management App (Desktop)</span>
            </button>
            <button
              onClick={() => setViewMode("storefront")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                viewMode === "storefront"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone className="h-4 w-4" />
              <span>Client Storefront (Mobile & Web)</span>
            </button>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-xl border border-border/80 bg-card p-4 sm:p-8 shadow-xl">
          {viewMode === "admin" ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Salon Manager Command Center
                  </div>
                  <h4 className="text-xl font-bold text-foreground mt-0.5">
                    Live Booking Schedule & Revenue Stream
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <a href={getManagementAppUrl("/signup")}>
                    <Button size="sm" className="text-xs font-semibold">
                      Explore Management App
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted-foreground">Today's Revenue</div>
                  <div className="text-2xl font-bold text-foreground mt-1">₹24,100.00</div>
                  <div className="text-[10px] text-emerald-600 font-medium mt-1">↑ 18% vs last Wednesday</div>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted-foreground">Appointments</div>
                  <div className="text-2xl font-bold text-foreground mt-1">24 Booked</div>
                  <div className="text-[10px] text-muted-foreground mt-1">4 Walk-ins • 20 Online</div>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted-foreground">Chair Utilization</div>
                  <div className="text-2xl font-bold text-foreground mt-1">92% Capacity</div>
                  <div className="text-[10px] text-emerald-600 font-medium mt-1">Optimal staffing</div>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted-foreground">Retail Upsell</div>
                  <div className="text-2xl font-bold text-primary mt-1">₹4,200.00</div>
                  <div className="text-[10px] text-muted-foreground mt-1">11 products sold at POS</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Instant UPI & direct bank settlement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Real-time walk-in queue manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Exportable GST & payroll reports</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Customer Experience
                  </div>
                  <h4 className="text-xl font-bold text-foreground mt-0.5">
                    Frictionless Self-Booking on Any Device
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <a href={getStorefrontUrl("luxe")}>
                    <Button size="sm" variant="outline" className="text-xs font-semibold">
                      Visit Live Customer Demo
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 mx-auto w-full max-w-[280px] rounded-xl border-4 border-border/80 bg-background p-4 shadow-xl space-y-3">
                  <div className="text-center pb-2 border-b border-border/70">
                    <div className="text-xs font-bold text-foreground">Glow Hair & Spa</div>
                    <div className="text-[10px] text-muted-foreground">glow.salon.com</div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl border border-primary/20 bg-primary/5 text-xs">
                      <div className="font-semibold text-foreground">Signature Balayage</div>
                      <div className="text-[10px] text-muted-foreground">120 mins • From ₹1,800</div>
                      <span className="inline-block mt-1 text-[9px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-medium">
                        Selected
                      </span>
                    </div>

                    <div className="p-2 rounded-xl border border-border bg-card text-[11px]">
                      <div className="font-semibold text-foreground">Select Specialist</div>
                      <div className="text-[10px] text-muted-foreground">Elena Alvarez (Available 2:00 PM)</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-primary text-primary-foreground text-center font-bold text-xs shadow-sm">
                      Reserve Appointment (₹1,800)
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 rounded-2xl bg-background border border-border space-y-2">
                    <h5 className="text-sm font-bold text-foreground">
                      No App Download Required
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Clients simply tap your link on Instagram, Google Maps, or WhatsApp. Works instantly on iOS Safari, Chrome, and Android with zero install friction.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-background border border-border space-y-2">
                    <h5 className="text-sm font-bold text-foreground">
                      Upfront Deposits Eliminate No-Shows
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Require full or partial advance deposits during booking through integrated online payment gateways. Watch no-shows plummet by up to 85%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
