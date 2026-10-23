"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { cn } from "@/lib/utils";

export interface EllipsisCellProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: string;
  maxLines?: number;
  maxChars?: number;
  className?: string;
  forceTooltip?: boolean;
  children?: React.ReactNode;
}

export const EllipsisCell: React.FC<EllipsisCellProps> = ({
  value,
  maxLines = 1,
  maxChars,
  className,
  forceTooltip = false,
  children,
  ...props
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTypingRef = useRef(false);
  const isHoveredRef = useRef(false);

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<{
    top: number;
    left: number;
    placement: "top" | "bottom";
  }>({ top: 0, left: 0, placement: "top" });

  const isCharTruncated = Boolean(maxChars && value && value.length > maxChars);
  const displayValue = isCharTruncated ? `${value.slice(0, maxChars)}...` : (value || "");

  // Check overflow: single-line inputs only check horizontal scrollWidth
  const checkOverflow = useCallback((): boolean => {
    if (isCharTruncated) return true;
    const element = elementRef.current;
    if (!element) return false;

    const target = (element.querySelector("input, textarea") as HTMLElement) || element;
    const isInput = target instanceof HTMLInputElement || target.tagName === "INPUT";
    const isTextarea = target instanceof HTMLTextAreaElement || target.tagName === "TEXTAREA";

    if (isInput) {
      return target.scrollWidth > target.clientWidth + 1;
    }
    if (isTextarea || maxLines > 1) {
      return (
        target.scrollHeight > target.clientHeight + 1 ||
        target.scrollWidth > target.clientWidth + 1
      );
    }
    return target.scrollWidth > target.clientWidth + 1;
  }, [isCharTruncated, maxLines]);

  const updatePosition = useCallback(() => {
    if (!elementRef.current) return;
    const element = elementRef.current;
    const inputTarget = element.querySelector("input, textarea") as HTMLElement | null;

    let rect: DOMRect;
    if (inputTarget) {
      rect = inputTarget.getBoundingClientRect();
    } else {
      try {
        const range = document.createRange();
        range.selectNodeContents(element);
        const rangeRect = range.getBoundingClientRect();
        rect = rangeRect.width > 0 ? rangeRect : element.getBoundingClientRect();
      } catch {
        rect = element.getBoundingClientRect();
      }
    }

    const placement: "top" | "bottom" = rect.top < 65 ? "bottom" : "top";
    const top = placement === "top" ? rect.top - 8 : rect.bottom + 8;
    const targetCenter = rect.left + rect.width / 2;
    const left = Math.max(140, Math.min(window.innerWidth - 140, targetCenter));

    setTooltipPos({ top, left, placement });
  }, []);

  // Suppress tooltip while typing; show on hover only when done typing
  const handleTyping = useCallback(() => {
    setShowTooltip(false);
    isTypingRef.current = true;
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);

    typingTimerRef.current = setTimeout(() => {
      isTypingRef.current = false;
      if (isHoveredRef.current && (checkOverflow() || forceTooltip)) {
        updatePosition();
        setShowTooltip(true);
      }
    }, 500);
  }, [checkOverflow, forceTooltip, updatePosition]);

  // Keep position accurate on scroll or resize when visible
  useEffect(() => {
    if (!showTooltip) return;
    const reposition = () => updatePosition();
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
    };
  }, [showTooltip, updatePosition]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    isHoveredRef.current = true;
    if (!isTypingRef.current && (checkOverflow() || forceTooltip)) {
      updatePosition();
      setShowTooltip(true);
    }
    props.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    isHoveredRef.current = false;
    setShowTooltip(false);
    props.onMouseLeave?.(e);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = (elementRef.current?.querySelector("input, textarea") as HTMLElement) || elementRef.current;
    const isFormElement = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
    if (isFormElement) {
      setShowTooltip(false);
    }
    props.onMouseDown?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    handleTyping();
    props.onKeyDown?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    setShowTooltip(false);
    isTypingRef.current = false;
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    props.onBlur?.(e);
  };

  const portalContent = showTooltip && Boolean(value) && typeof window !== "undefined" && (
    <div
      className={cn(
        "fixed z-[99999] px-3 py-1.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-2xl border border-neutral-700 pointer-events-none max-w-[280px] sm:max-w-xs break-words text-center -translate-x-1/2 animate-in fade-in-0 zoom-in-95",
        tooltipPos.placement === "top" ? "-translate-y-full" : "translate-y-0"
      )}
      style={{
        top: `${tooltipPos.top}px`,
        left: `${tooltipPos.left}px`,
      }}
    >
      {value}
    </div>
  );

  return (
    <>
      <span
        ref={elementRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onContextMenu={(e) => {
          if (showTooltip) e.preventDefault();
        }}
        className={cn(
          children
            ? "min-w-0 max-w-full pointer-events-auto [&_*]:pointer-events-auto"
            : "overflow-hidden text-ellipsis min-w-0 max-w-full pointer-events-auto [&_*]:pointer-events-auto select-none",
          maxLines === 1 && !children ? "inline-block whitespace-nowrap truncate" : "",
          className
        )}
        style={
          maxLines > 1
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: maxLines,
                wordBreak: "break-word",
              }
            : undefined
        }
        {...props}
      >
        {children || displayValue}
      </span>
      {portalContent && ReactDOM.createPortal(portalContent, document.body)}
    </>
  );
};

export default EllipsisCell;
