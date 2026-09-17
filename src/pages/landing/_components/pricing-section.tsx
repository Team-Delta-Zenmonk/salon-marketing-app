import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getManagementAppUrl } from "@/lib/domain";

interface PricingSectionProps {
  onOpenDemo?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const plans = [
    {
      id: "trial",
      name: "14-Day Free Trial",
      badge: "Zero Risk",
      priceDisplay: "₹0",
      periodDisplay: "for 14 days",
      subtext: "No credit card required • Instant access",
      tagline: "Test-drive the full ZenMonk operating system with zero commitment.",
      popular: false,
      features: [
        "14-day complete platform exploration",
        "Instant branded storefront (slug.salon.com)",
        "Smart appointment scheduler & calendar",
        "Walk-in booking & customer management",
        "Basic service categories & staff setup",
        "Stripe card deposit capability",
      ],
      ctaText: "Start Free Trial",
      ctaUrl: getManagementAppUrl("/signup"),
      isDemo: false,
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      badge: "Pay As You Go",
      priceDisplay: "₹2,499",
      periodDisplay: "/ month",
      subtext: "Billed monthly • Cancel or pause anytime",
      tagline: "Flexible month-to-month subscription for busy salons & spas.",
      popular: false,
      features: [
        "Unlimited client bookings & appointments",
        "Branded custom storefront (slug.salon.com)",
        "Walk-in POS invoicing & thermal receipts",
        "Automated SMS & email appointment alerts",
        "Staff management, commissions & tips",
        "Real-time retail inventory depletion",
        "Daily rolling Stripe Connect payouts",
      ],
      ctaText: "Choose Monthly Plan",
      ctaUrl: getManagementAppUrl("/signup?plan=monthly"),
      isDemo: false,
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      badge: "Best Value • Save ~20%",
      priceDisplay: "₹24,990",
      periodDisplay: "/ year",
      subtext: "Equivalent to ₹2,082/mo • 2 Months Free",
      tagline: "The most cost-effective plan for salons maximizing long-term revenue.",
      popular: true,
      features: [
        "Everything in Monthly Plan",
        "Save ₹4,998 every year (2 months free)",
        "Priority live chat & onboarding concierge",
        "Free client data migration from legacy tools",
        "Full POS, inventory & commission tracking",
        "Unlimited staff & specialist accounts",
        "Multi-device front desk & mobile sync",
      ],
      ctaText: "Choose Yearly Plan",
      ctaUrl: getManagementAppUrl("/signup?plan=yearly"),
      isDemo: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Multi-Location",
      priceDisplay: "Custom",
      periodDisplay: "tailored pricing",
      subtext: "Custom contract & SLA for franchises",
      tagline: "Tailored solutions for salon chains, multi-branch groups & franchises.",
      popular: false,
      features: [
        "Unlimited salon locations & staff chairs",
        "Multi-branch centralized command dashboard",
        "Custom domain setup (yourbrand.com)",
        "Dedicated VIP account manager & staff training",
        "Custom API integrations & webhook access",
        "99.98% Enterprise Uptime SLA guarantee",
      ],
      ctaText: "Contact Us / VIP Demo",
      ctaUrl: "#",
      isDemo: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-card/40 border-y border-border/80 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <Badge variant="default" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" /> Transparent INR Pricing
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Simple, Transparent Plans in Indian Rupees (₹).
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            No hidden setup fees. No surprise transaction commissions. Start free for 14 days and pick the right plan for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/80 bg-background shadow-xl ring-2 ring-primary/30 scale-102"
                    : "border-border/80 bg-card hover:border-primary/40"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span
                      className={`rounded-full px-3 py-0.5 text-[11px] font-bold shadow-xs uppercase tracking-wider ${
                        plan.popular
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground border border-border"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="min-h-[44px] pt-1 text-xs">
                      {plan.tagline}
                    </CardDescription>

                    <div className="pt-3 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {plan.periodDisplay}
                      </span>
                    </div>

                    <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                      {plan.subtext}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-2.5 pb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground pb-1">
                      Key Highlights
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </div>

                <CardFooter className="pt-0">
                  {plan.isDemo ? (
                    <Button
                      variant="outline"
                      size="default"
                      onClick={onOpenDemo}
                      className="w-full justify-center font-bold gap-2 text-xs"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      <span>{plan.ctaText}</span>
                    </Button>
                  ) : (
                    <a href={plan.ctaUrl} className="w-full">
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        size="default"
                        className="w-full justify-center font-bold gap-1.5 text-xs group"
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-border/80 bg-background/80 p-6 text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>14-Day 100% Risk-Free Trial Guarantee</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No credit card is required to create your salon account. You will get instant access to your scheduler, custom storefront subdomain, and staff accounts. If you choose not to subscribe, your trial simply concludes with zero charges.
          </p>
        </div>
      </div>
    </section>
  );
};

