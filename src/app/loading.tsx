import React from "react";
import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="text-xs font-medium text-muted-foreground tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
}
