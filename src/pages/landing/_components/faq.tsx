import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import faqsData from "@/data/faqs.json";
import type { FaqItem } from "@/interfaces/faq.interface";

const appName = import.meta.env.VITE_APP_NAME || "Veloura";
const faqs: FaqItem[] = faqsData.map((faq) => {
  return {
    ...faq,
    q: faq.q.replace("Zenmonk", appName),
    a: faq.a.replace("Zenmonk", appName),
  };
});

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Everything you need to know about getting started with the {appName} operating system.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id || i}
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
