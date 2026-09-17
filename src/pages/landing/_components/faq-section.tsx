import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need to enter credit card details to start the 14-day free trial?",
      a: "No! You can register your salon, configure your custom subdomain (e.g., yoursalon.salon.com), add services and staff, and start taking appointments immediately with zero credit card required. You only choose a plan when you are ready to continue beyond 14 days.",
    },
    {
      q: "How do my customers book appointments?",
      a: "Every salon gets their own branded storefront at yoursalon.salon.com the second you complete onboarding. You can put this link in your Instagram bio, Google Business Profile, WhatsApp messages, or website. Customers can view treatments, choose specialists, and book directly without needing to download an app.",
    },
    {
      q: "Can I migrate my existing client and service data from another tool?",
      a: "Yes! ZenMonk supports one-click CSV imports for client contacts, service menus, and retail inventory items. If you are switching from Vagaro, Fresha, Mindbody, or Square, our concierge team can also assist with automated migration.",
    },
    {
      q: "What hardware is required for POS invoicing and thermal receipts?",
      a: "ZenMonk runs smoothly in any modern web browser on iPad, Android tablets, Mac, and Windows PCs. For receipt printing, we support standard ESC/POS 58mm and 80mm thermal receipt printers (via Bluetooth, USB, or LAN), as well as standard AirPrint and A4 PDF printing.",
    },
    {
      q: "How does payment processing and direct bank settlement work?",
      a: "Salons connect their preferred payment gateway directly inside their billing settings. When customers pay online or pre-pay booking deposits via UPI, cards, or net banking, funds settle directly into your salon's registered bank account. ZenMonk never holds your salon's revenue.",
    },
    {
      q: "Can I change plans or cancel my subscription at any time?",
      a: "Absolutely. You can switch between Monthly and Annual billing or upgrade to Enterprise anytime inside your Billing dashboard. There are zero cancellation fees or lock-in contracts.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/30 border-t border-border/80 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="default" className="text-xs">
            <HelpCircle className="h-3 w-3 mr-1" /> Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about getting started with the ZenMonk operating system.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border/80 bg-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-primary/10 text-primary" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
