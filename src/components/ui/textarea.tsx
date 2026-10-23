"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { EllipsisCell } from "@/components/ellipse-cell";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, ...props }, ref) => {
    const valString = value !== undefined && value !== null ? String(value) : "";

    return (
      <EllipsisCell value={valString} className="w-full min-w-0 block">
        <textarea
          value={value}
          className={cn(
            "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </EllipsisCell>
    );
  }
);
Textarea.displayName = "Textarea";
