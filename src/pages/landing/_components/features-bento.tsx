import React, { useState } from "react";
import {
  Calendar,
  Store,
  Receipt,
  Users,
  Package,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl } from "@/lib/domain";

export const FeaturesBento: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: "Smart Calendar & Multi-Staff Scheduler",
      tag: "Zero Double-Bookings",
      desc: "An ultra-fluid drag-and-drop scheduler engineered for high-volume days. Visualize each stylist's column, set automatic buffer times between treatments, and manage walk-ins with single-click reassignments.",
      icon: Calendar,
      bullets: [
        "Color-coded stylist columns and custom service durations",
        "Automated buffer times for sanitation & setup",
        "Real-time sync across desktop, tablet, and mobile",
        "Double-booking prevention algorithm",
      ],
      preview: {
        header: "Staff Schedule • Today",
        items: [
          { time: "09:30 AM", title: "Balayage & Gloss", staff: "Elena A.", status: "In Chair", amount: "₹1,850" },
          { time: "11:00 AM", title: "Precision Cut & Beard", staff: "Marcus R.", status: "Upcoming", amount: "₹650" },
          { time: "12:15 PM", title: "Aromatherapy Facial", staff: "Aria N.", status: "Confirmed", amount: "₹1,200" },
        ],
      },
    },
    {
      title: "Instant Dynamic Storefront (slug.salon.com)",
      tag: "24/7 Client Self-Booking",
      desc: "Every salon receives a dedicated, luxury booking web app live the moment you register. Customers explore treatment menus, select preferred specialists, and reserve slots with instant UPI and card prepayments.",
      icon: Store,
      bullets: [
        "Free branded subdomain: yoursalon.salon.com",
        "Nested sub-services hierarchy with transparent pricing",
        "Specialist bios, portfolios, and real-time availability",
        "Instant SMS and email calendar invites for clients",
      ],
      preview: {
        header: "Storefront Live Preview",
        url: "crown-blade.salon.com",
        service: "Executive Haircut & Royal Shave",
        specialist: "Marcus Reed",
        price: "₹850.00",
        deposit: "Instant UPI / Card",
      },
    },
    {
      title: "Fast POS & Tax Invoicing",
      tag: "Checkout in Under 10s",
      desc: "Speed up front-desk checkout. Bundle itemized services with retail hair care products, split bills between cash, card, and UPI, calculate automatic GST/VAT, and print thermal receipts.",
      icon: Receipt,
      bullets: [
        "Split-tender payments (Cash + UPI + Card)",
        "Instant thermal receipt & PDF invoicing",
        "Automatic retail inventory stock deduction on sale",
        "End-of-day cash drawer reconciliation & tip tracking",
      ],
      preview: {
        invoiceNo: "INV-2026-084",
        subtotal: "₹2,400.00",
        tax: "₹216.00 (GST 9%)",
        total: "₹2,616.00",
        payment: "Paid via UPI (₹2,000) + Cash (₹616)",
      },
    },
    {
      title: "Staff Commissions & Performance",
      tag: "Happy Stylists, Zero Math",
      desc: "Eliminate end-of-month payroll headaches. Set custom tiered commission rates for service revenue versus product retail sales, track stylist hours, and monitor individual rebooking rates.",
      icon: Users,
      bullets: [
        "Tiered commission rules per service category",
        "Individual staff login portals with privacy bounds",
        "Real-time daily tip calculations",
        "Automated commission summary reports",
      ],
      preview: {
        staff: "Elena Alvarez",
        monthRevenue: "₹1,48,200",
        commission: "42% (₹62,244)",
        rebookRate: "78% Client Retention",
      },
    },
    {
      title: "Inventory Intelligence & Low-Stock Alerts",
      tag: "Never Run Out of Color",
      desc: "Keep retail shelves and backbar color supplies fully stocked. Product quantities automatically deplete when added to client invoices or backbar treatment logs, alerting you before you run out.",
      icon: Package,
      bullets: [
        "Retail vs Backbar inventory segregation",
        "Automated reorder threshold alerts via notification",
        "Supplier SKU and purchase cost tracking",
        "Historical usage analytics to minimize product waste",
      ],
      preview: {
        alert: "Low Stock Warning",
        item: "Olaplex No. 3 Hair Perfector",
        remaining: "3 units left (Reorder at 5)",
        supplier: "BeautySupply Direct",
      },
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" /> Complete Operating System
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Everything Your Salon Needs to Operate with Flawless Elegance.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            Designed specifically for modern hair salons, luxury spas, nail lounges, and premium barbershops.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md glow-orange-subtle scale-102"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{pillar.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {(() => {
          const current = pillars[activeTab];
          const CurrentIcon = current.icon;
          return (
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm transition-all animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-2xs">
                      <CurrentIcon className="h-6 w-6" />
                    </div>
                    <Badge variant="accent" className="text-xs font-medium">
                      {current.tag}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {current.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {current.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a href={getManagementAppUrl("/signup")}>
                      <Button className="gap-2 font-semibold group">
                        <span>Try This Feature Free</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-6 shadow-md space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-foreground">
                          {current.preview.header || current.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        Live Preview
                      </span>
                    </div>

                    {activeTab === 0 && (
                      <div className="space-y-2.5">
                        {current.preview.items?.map((item: any, i: number) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border bg-card/60">
                            <div>
                              <div className="text-xs font-semibold text-foreground">{item.title}</div>
                              <div className="text-[10px] text-muted-foreground">{item.time} • {item.staff}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-bold text-primary">{item.amount}</div>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl border border-primary/20 bg-primary/5 space-y-1">
                          <div className="text-[11px] text-muted-foreground">Tenant URL:</div>
                          <div className="text-sm font-mono font-bold text-primary">
                            https://{current.preview.url}
                          </div>
                        </div>
                        <div className="p-3 rounded-xl border border-border bg-card/60 space-y-1 text-xs">
                          <div className="font-semibold text-foreground">{current.preview.service}</div>
                          <div className="text-muted-foreground">With: {current.preview.specialist}</div>
                          <div className="flex items-center justify-between pt-2 mt-2 border-t border-border">
                            <span className="font-bold text-foreground">{current.preview.price}</span>
                            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                              ✓ {current.preview.deposit}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl border border-border bg-card/60 space-y-2">
                          <div className="flex justify-between text-muted-foreground text-[11px]">
                            <span>Receipt #{current.preview.invoiceNo}</span>
                            <span>Today</span>
                          </div>
                          <div className="flex justify-between text-foreground">
                            <span>Subtotal:</span>
                            <span>{current.preview.subtotal}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Tax:</span>
                            <span>{current.preview.tax}</span>
                          </div>
                          <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-border">
                            <span>Total Due:</span>
                            <span>{current.preview.total}</span>
                          </div>
                        </div>
                        <div className="text-[11px] text-emerald-600 font-sans font-medium bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                          ✓ {current.preview.payment}
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl border border-border bg-card/60 space-y-2">
                          <div className="text-xs font-bold text-foreground">{current.preview.staff}</div>
                          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                            <div>
                              <div className="text-[10px] text-muted-foreground">Monthly Sales:</div>
                              <div className="font-bold text-foreground">{current.preview.monthRevenue}</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-muted-foreground">Commission:</div>
                              <div className="font-bold text-primary">{current.preview.commission}</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-foreground p-2.5 rounded-lg bg-muted/60">
                          🎯 {current.preview.rebookRate}
                        </div>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                            <ShieldAlert className="h-3.5 w-3.5" />
                            <span>{current.preview.alert}</span>
                          </div>
                          <div className="text-xs font-semibold text-foreground">{current.preview.item}</div>
                          <div className="text-[11px] text-muted-foreground">{current.preview.remaining}</div>
                        </div>
                        <div className="text-xs text-muted-foreground p-2.5 rounded-lg bg-card border border-border">
                          Vendor: <strong>{current.preview.supplier}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
