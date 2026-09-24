import React from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl } from "@/lib/domain";

interface CtaProps {
  onOpenDemo: () => void;
}

export const Cta: React.FC<CtaProps> = ({ onOpenDemo }) => {
  const appName = import.meta.env.VITE_APP_NAME || "Veloura";
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl bg-gradient-to-br from-primary/15 via-card to-background border border-primary/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold tracking-wide text-primary uppercase">
                Instant Activation
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Transform Your Salon's Growth Today.
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
              Join over 500+ forward-thinking salon owners who replaced messy spreadsheets and missed appointments with {appName}'s unified operating system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a href={getManagementAppUrl("/signup")} className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto font-bold gap-2 group text-base shadow-lg shadow-primary/25">
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="xl"
                onClick={onOpenDemo}
                className="w-full sm:w-auto text-base font-semibold"
              >
                Schedule VIP Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Zero setup fees • 14 days free • Instant access to custom subdomain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
