"use client";

import React from "react";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ reset }: ErrorProps) {
  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="glass-panel border border-border/80 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-xl space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/15 text-destructive">
            <AlertCircle className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Something went wrong
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              An unexpected error occurred while loading this page. Please try again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Button
              onClick={() => reset()}
              className="w-full sm:w-auto gap-2 text-sm font-semibold cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto gap-2 text-sm font-medium cursor-pointer"
              >
                <Home className="h-4 w-4" />
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
