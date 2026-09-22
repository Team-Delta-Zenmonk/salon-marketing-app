import * as React from "react";
import { cn } from "@/lib/utils";
import { EllipsisCell } from "@/components/ellipse-cell";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value, title, ...props }, ref) => {
    const valString = value !== undefined && value !== null ? String(value) : "";
    const computedTitle = title ?? (valString ? valString : undefined);

    return (
      <EllipsisCell value={valString} className="w-full min-w-0 block">
        <input
          type={type}
          value={value}
          title={computedTitle}
          className={cn(
            "flex h-11 w-full min-w-0 truncate rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            className
          )}
          ref={ref}
          {...props}
        />
      </EllipsisCell>
    );
  }
);
Input.displayName = "Input";
