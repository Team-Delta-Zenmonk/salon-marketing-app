"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {useEffect} from "react";

export type ModalCloseReason = "backdropClick" | "escapeKeyDown" | "closeButton";

interface ModalProps {
  isOpen: boolean;
  onClose: (
    event?: React.SyntheticEvent | KeyboardEvent,
    reason?: ModalCloseReason
  ) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  disabled = false,
}: ModalProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();

  const onCloseRef = React.useRef(onClose);
  onCloseRef.current = onClose;


  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current(e, "escapeKeyDown");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in",
          disabled ? "cursor-default" : "cursor-pointer"
        )}
        onClick={(e) => onClose(e, "backdropClick")}
      />


      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(
          "relative w-full max-w-lg rounded-2xl sm:rounded-xl border border-border bg-background p-4 sm:p-6 shadow-2xl z-10 transition-all animate-in zoom-in-95 duration-200 my-auto h-auto max-h-[calc(100vh-2rem)] max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden",
          className
        )}
      >
        <button
          type="button"
          onClick={(e) => onClose(e, "closeButton")}
          disabled={disabled}
          aria-disabled={disabled}
          aria-label="Close"
          className={cn(
            "absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0 z-20 bg-background/80 backdrop-blur-xs",
            disabled ? "opacity-30 cursor-not-allowed pointer-events-none" : "cursor-pointer"
          )}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {(title || description) && (
          <div className="mb-3 sm:mb-4 space-y-1 pr-8 shrink-0">
            {title && (
              <h2 id={titleId} className="text-base sm:text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p id={descriptionId} className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0 pr-1 py-1">
          {children}
        </div>
      </div>
    </div>
  );
}
