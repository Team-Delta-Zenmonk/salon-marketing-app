"use client";

import React, { useEffect } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, PhoneCall, Loader2 } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { OpenDemoButton } from "@/components/open-demo-button";
import { getManagementAppUrl } from "@/lib/domain";
import type { PlanItem } from "@/interfaces/plan.interface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchSubscriptionPlans } from "@/features/plans/plans.action";
import type { BackendPlan } from "@/features/plans/plans.slice";
import EllipsisCell from "@/components/ellipse-cell";

const DEFAULT_HIGHLIGHTS: Record<string, string[]> = {
  trial: [
    "14-day complete platform exploration",
    "Instant branded storefront (slug.salon.com)",
    "Smart appointment scheduler & calendar",
    "Walk-in booking & customer management",
    "Basic service categories & staff setup",
    "Stripe card deposit capability",
  ],
  monthly: [
    "Unlimited client bookings & appointments",
    "Branded custom storefront (slug.salon.com)",
    "Walk-in POS invoicing & thermal receipts",
    "Automated SMS & email appointment alerts",
    "Staff management, commissions & tips",
    "Real-time retail inventory depletion",
    "Daily rolling Stripe Connect payouts",
  ],
  yearly: [
    "Everything in Monthly Plan",
    "Save 2 months free every year",
    "Priority live chat & onboarding concierge",
    "Free client data migration from legacy tools",
    "Full POS, inventory & commission tracking",
    "Unlimited staff & specialist accounts",
    "Multi-device front desk & mobile sync",
  ],
  enterprise: [
    "Unlimited salon locations & staff chairs",
    "Multi-branch centralized command dashboard",
    "Custom domain setup (yourbrand.com)",
    "Dedicated VIP account manager & staff training",
    "Custom API integrations & webhook access",
    "99.98% Enterprise Uptime SLA guarantee",
  ],
  default: [
    "Full platform access & scheduler",
    "Online client bookings & reminders",
    "Staff, POS & appointment management",
    "Real-time analytics & reporting",
  ],
};

function formatPlanItem(plan: BackendPlan): PlanItem {
  const codeKey = (plan.code || String(plan.id)).toLowerCase();

  const priceDisplay =
    plan.amount === 0 || plan.formatted_price === "Free"
      ? "₹0"
      : plan.formatted_price || `₹${plan.amount.toLocaleString("en-IN")}`;

  const periodDisplay =
    plan.billing_cycle ||
    (plan.duration_days === 365
      ? "/ year"
      : plan.duration_days === 30
        ? "/ month"
        : plan.duration_days
          ? `for ${plan.duration_days} days`
          : "");

  const features =
    DEFAULT_HIGHLIGHTS[codeKey] ||
    (plan.description
      ? [plan.description, ...DEFAULT_HIGHLIGHTS.default.slice(1)]
      : DEFAULT_HIGHLIGHTS.default);

  const isPopular = codeKey === "yearly";
  const isDemo = codeKey === "enterprise";

  return {
    id: String(plan.id),
    name: plan.name,
    badge: isPopular ? "Best Value" : plan.amount === 0 ? "Zero Risk" : "",
    priceDisplay,
    periodDisplay,
    subtext: plan.duration_days
      ? `${plan.duration_days} days validity`
      : "Subscription plan",
    tagline:
      plan.description ||
      "Reliable and tailored salon management operating system.",
    popular: isPopular,
    features,
    ctaText: isDemo
      ? "Contact Us"
      : plan.amount === 0
        ? "Start Free Trial"
        : `Choose ${plan.name}`,
    ctaPath: isDemo
      ? "#"
      : `/signup?plan=${encodeURIComponent(plan.code || plan.id)}`,
    isDemo,
  };
}

export const Pricing: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    plans: reduxPlans,
    hasMore,
    page,
    isInitialLoading,
  } = useAppSelector((state) => state.plans);

  useEffect(() => {
    dispatch(fetchSubscriptionPlans({ page: 1, limit: 10, is_active: true }));
  }, [dispatch]);

  const fetchMorePlans = () => {
    if (hasMore) {
      dispatch(fetchSubscriptionPlans({ page: page + 1, limit: 10, is_active: true }));
    }
  };

  const displayedPlans: PlanItem[] = reduxPlans.map(formatPlanItem);

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

        {isInitialLoading && reduxPlans.length === 0 ? (
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch pt-4 pb-6 px-1 sm:px-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={`pricing-skeleton-${i}`}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[260px] max-w-[340px] rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between animate-pulse space-y-6"
              >
                <div className="space-y-4">
                  <div className="h-4 w-28 bg-muted rounded-md" />
                  <div className="h-6 w-36 bg-muted rounded-md" />
                  <div className="h-4 w-full bg-muted/60 rounded-md" />
                  <div className="pt-3 border-b border-border/50 space-y-2">
                    <div className="h-8 w-32 bg-muted rounded-md" />
                    <div className="h-3 w-40 bg-muted/60 rounded-md" />
                  </div>
                  <div className="space-y-2 pt-2">
                    {[1, 2, 3, 4].map((f) => (
                      <div key={f} className="h-3 bg-muted/60 rounded-md w-3/4" />
                    ))}
                  </div>
                </div>
                <div className="h-10 w-full bg-muted rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <InfiniteScroll
            dataLength={displayedPlans.length}
            next={fetchMorePlans}
            hasMore={hasMore}
            className="overflow-visible!"
            loader={
              <div className="flex justify-center py-8 w-full col-span-full">
                <Loader2 className="w-6 h-6 animate-spin text-primary/70" />
              </div>
            }
          >
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch pt-4 pb-6 px-1 sm:px-2">
              {displayedPlans.map((plan) => {
                const targetUrl = plan.ctaPath.startsWith("/")
                  ? getManagementAppUrl(plan.ctaPath)
                  : plan.ctaPath;

                return (
                  <Card
                    key={plan.id}
                    className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[260px] max-w-[340px] relative flex flex-col justify-between transition-all duration-300 ${plan.popular
                        ? "border-primary/80 bg-background shadow-xl ring-2 ring-primary/30 sm:scale-102"
                        : "border-border/80 bg-card hover:border-primary/40"
                      }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                        <span
                          className={`rounded-full px-3 py-0.5 text-[11px] font-bold shadow-sm uppercase tracking-wider ${plan.popular
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground border border-border"
                            }`}
                        >
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col flex-1">
                      <CardHeader className="p-5 sm:p-6 pb-4">
                        <CardTitle className="text-xl font-bold truncate">
                          <EllipsisCell value={plan.name} className="truncate" />
                        </CardTitle>
                        <CardDescription className="min-h-[44px] pt-1 text-xs break-words">
                          {plan.tagline}
                        </CardDescription>

                        <div className="pt-3 flex items-baseline gap-1 flex-wrap">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground font-mono break-all">
                            {plan.priceDisplay}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                            {plan.periodDisplay}
                          </span>
                        </div>

                        <div className="text-[10px] text-muted-foreground mt-0.5 font-medium truncate">
                          {plan.subtext}
                        </div>
                      </CardHeader>

                      <CardContent className="p-5 sm:p-6 pt-0 space-y-2.5 pb-6 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground pb-1">
                          Key Highlights
                        </div>
                        {plan.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug break-words">{feature}</span>
                          </div>
                        ))}
                      </CardContent>
                    </div>

                    <CardFooter className="p-5 sm:p-6 pt-0">
                      {plan.isDemo ? (
                        <OpenDemoButton
                          variant="outline"
                          size="default"
                          className="w-full justify-center font-bold gap-2 text-xs cursor-pointer min-w-0"
                        >
                          <PhoneCall className="h-3.5 w-3.5 shrink-0" />
                          <EllipsisCell value={plan.ctaText} className="truncate" />
                        </OpenDemoButton>
                      ) : (
                        <a href={targetUrl} rel="noopener noreferrer" className="w-full min-w-0">
                          <Button
                            variant={plan.popular ? "default" : "outline"}
                            size="default"
                            className="w-full justify-center font-bold gap-1.5 text-xs group cursor-pointer min-w-0"
                          >
                            <EllipsisCell value={plan.ctaText} className="truncate" />
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </InfiniteScroll>
        )}

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

export default Pricing;
