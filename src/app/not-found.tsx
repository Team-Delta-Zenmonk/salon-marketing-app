"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, Home, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getManagementAppUrl } from "@/lib/domain";

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Veloura";

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          <span>404 - Page Not Found</span>
        </div>

        <div className="glass-panel border border-border/80 rounded-3xl p-8 sm:p-12 shadow-xl glow-orange-subtle backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 border border-primary/30 text-primary mb-6 shadow-sm">
            <Compass className="h-10 w-10 animate-spin-slow" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Lost in Space?
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            The page you are trying to reach does not exist or may have been moved to a new destination on {appName} Salon OS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              onClick={handleGoBack}
              className="w-full sm:w-auto gap-2 px-6 py-5 text-sm font-medium cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>

            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 px-6 py-5 text-sm font-semibold cursor-pointer">
                <Home className="h-4 w-4" />
                Back to Home Page
              </Button>
            </Link>

            <a href={getManagementAppUrl("/signup")} className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto gap-2 px-6 py-5 text-sm font-semibold cursor-pointer">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
