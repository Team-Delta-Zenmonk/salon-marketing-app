import React from "react";
import { MessageCircle } from "lucide-react";

interface FloatingWidgetProps {
  onOpenDemo: () => void;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({ onOpenDemo }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />
      <span className="absolute inline-flex h-20 w-20 rounded-full bg-[#25D366]/15 animate-pulse pointer-events-none" />

      <button
        onClick={onOpenDemo}
        className="group relative flex h-15 w-15 items-center justify-center rounded-full bg-white text-[#25D366] border border-emerald-100 shadow-xl shadow-emerald-950/15 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 z-10"
        aria-label="Book VIP Demo"
      >
        <MessageCircle className="h-7 w-7 fill-[#25D366] text-[#25D366] group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
