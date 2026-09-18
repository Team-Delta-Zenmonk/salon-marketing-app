import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl } from "@/lib/domain";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Platform Tour", href: "#preview" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#proof" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-foreground font-sans">
                ZenMonk
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Salon OS
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-card/60 p-1.5 rounded-full border border-border/70 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a href={getManagementAppUrl("/login")}>
            <Button variant="outline" size="sm" className="text-xs font-medium">
              Sign In
            </Button>
          </a>

          <a href={getManagementAppUrl("/signup")}>
            <Button size="sm" className="text-xs font-semibold gap-1.5 group">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-xl p-2.5 text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border/80 bg-background/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a href={getManagementAppUrl("/login")} className="w-full">
              <Button variant="secondary" className="w-full justify-center">
                Sign In to Salon App
              </Button>
            </a>

            <a href={getManagementAppUrl("/signup")} className="w-full">
              <Button className="w-full justify-center font-semibold">
                Start 14-Day Free Trial
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
