import React, { useState } from "react";
import { Calculator, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { getManagementAppUrl } from "@/lib/domain";

export const RoiCalculator: React.FC = () => {
  const [stylists, setStylists] = useState<number>(5);
  const [appointmentsPerDay, setAppointmentsPerDay] = useState<number>(6);
  const [avgTicket, setAvgTicket] = useState<number>(650);
  const appName = import.meta.env.VITE_APP_NAME || "Veloura";

  const workingDays = 26;
  const totalMonthlyAppointments = stylists * appointmentsPerDay * workingDays;
  const grossMonthlyRevenue = totalMonthlyAppointments * avgTicket;

  const hoursSavedPerMonth = Math.round((totalMonthlyAppointments * 10) / 60);

  const recoveredNoShows = Math.round(totalMonthlyAppointments * 0.08);
  const recoveredRevenue = recoveredNoShows * avgTicket;

  const monthlyCost = 2499;
  const netMonthlyGain = Math.max(0, recoveredRevenue - monthlyCost);
  const roiMultiplier = Math.round(netMonthlyGain / monthlyCost);

  return (
    <section id="calculator" className="py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="text-xs">
            <Calculator className="h-3 w-3 mr-1" /> Interactive Growth Model
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Calculate Your Salon's Revenue Potential in Rupees (₹).
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            See how much time your team saves and how much lost no-show revenue you recover every month with {appName}.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-7">
              <h3 className="text-xl font-bold text-foreground">
                Your Salon Baseline
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-foreground">Stylists & Specialists</span>
                  <span className="text-primary font-mono text-base px-2.5 py-0.5 rounded-lg bg-primary/10 border border-primary/20">
                    {stylists} team members
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={stylists}
                  onChange={(e) => setStylists(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>1 Solo Stylist</span>
                  <span>10 Medium Studio</span>
                  <span>20 Large Salon</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-foreground">Appointments per Stylist / Day</span>
                  <span className="text-primary font-mono text-base px-2.5 py-0.5 rounded-lg bg-primary/10 border border-primary/20">
                    {appointmentsPerDay} bookings/day
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={appointmentsPerDay}
                  onChange={(e) => setAppointmentsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>2 Relaxed</span>
                  <span>7 Active</span>
                  <span>14 High Volume</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-foreground">Average Service Ticket Price</span>
                  <span className="text-primary font-mono text-base px-2.5 py-0.5 rounded-lg bg-primary/10 border border-primary/20">
                    ₹{avgTicket}
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="3000"
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>₹150 Barber</span>
                  <span>₹650 Salon</span>
                  <span>₹3,000 Luxury Spa</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-muted-foreground">
                Total monthly volume: <strong>{formatNumber(totalMonthlyAppointments)} appointments</strong> generating approximately <strong>{formatCurrency(grossMonthlyRevenue)}</strong> in gross revenue.
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-background p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Your Estimated Monthly Advantage
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600">
                  {roiMultiplier}x Estimated ROI
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <DollarSign className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Recovered No-Show Revenue / Month</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  +{formatCurrency(recoveredRevenue)}
                </div>
                <div className="text-[11px] text-emerald-600 font-medium">
                  Saving ~{recoveredNoShows} appointments from being missed
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-border/60">
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>Staff Hours Saved on Admin Work / Month</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  {hoursSavedPerMonth} Hours
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Equal to ~{Math.round(hoursSavedPerMonth / 8)} full working days recovered
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <a href={getManagementAppUrl("/signup")}>
                  <Button size="lg" className="w-full justify-center font-bold gap-2 group">
                    <span>Unlock This Growth — Start Free Trial</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <p className="text-center text-[11px] text-muted-foreground mt-2">
                  Instant activation • Zero software setup fees • 14 days 100% free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
