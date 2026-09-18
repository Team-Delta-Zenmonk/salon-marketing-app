import React from "react";
import { Sparkles, ShieldCheck, Lock, Activity } from "lucide-react";
import { getManagementAppUrl, getStorefrontDomain } from "@/lib/domain";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const appName = import.meta.env.VITE_APP_NAME || "Veloura";

  return (
    <footer className="border-t border-border/80 bg-card/60 text-card-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          <div className="sm:col-span-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-foreground font-sans">
                  {appName}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              The modern operating system empowering salon owners, high-end spas, and barbershops to streamline scheduling, elevate client experiences, and accelerate revenue.
            </p>

            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl sm:rounded-full border border-border bg-background px-3.5 py-2 sm:py-1.5 text-xs text-muted-foreground shadow-2xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-foreground">All Systems Operational</span>
              <span className="hidden sm:inline text-muted-foreground/60">•</span>
              <span className="w-full sm:w-auto text-[11px] sm:text-xs text-muted-foreground">99.98% Uptime SLA</span>
            </div>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Smart Scheduler</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Client Storefronts</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">POS & Invoicing</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Staff & Commissions</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Inventory Tracking</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Portals & Access
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={getManagementAppUrl("/login")} className="hover:text-foreground transition-colors">
                  Salon Owner Login
                </a>
              </li>
              <li>
                <a href={getManagementAppUrl("/signup")} className="hover:text-foreground transition-colors">
                  Start 14-Day Free Trial
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-foreground transition-colors">
                  Salon Success Stories
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-foreground transition-colors">
                  Salon Growth ROI
                </a>
              </li>
              <li>
                <a href="https://admin.salon.com" className="hover:text-foreground transition-colors text-xs opacity-75">
                  {appName} Internal Admin
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3.5 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Enterprise Trust
            </h4>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>PCI-DSS Level 1 Payment Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>256-bit TLS In-Transit Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Automated Stripe Reconciliation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-border/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center md:text-left">
          <p>© {currentYear} {appName} Technologies Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Security & Trust</a>
            <span className="w-full sm:w-auto text-center">Apex Domain: <strong className="text-foreground">{getStorefrontDomain()}</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
