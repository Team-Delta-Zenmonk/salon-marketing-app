import React from "react";
import { Sparkles, ShieldCheck, Lock, Activity } from "lucide-react";
import { getManagementAppUrl, getStorefrontDomain } from "@/lib/domain";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/60 text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-foreground font-sans">
                  ZenMonk
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              The modern operating system empowering salon owners, high-end spas, and barbershops to streamline scheduling, elevate client experiences, and accelerate revenue.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-muted-foreground shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-foreground">All Systems Operational</span>
              <span className="text-muted-foreground/60">•</span>
              <span>99.98% Uptime SLA</span>
            </div>
          </div>

          <div className="space-y-4">
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

          <div className="space-y-4">
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
                  ZenMonk Internal Admin
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Enterprise Trust
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
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

        <div className="mt-14 pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} ZenMonk Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Security & Trust</a>
            <span>Apex Domain: <strong className="text-foreground">{getStorefrontDomain()}</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
