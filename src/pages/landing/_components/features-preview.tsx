import React from "react";
import { ShieldAlert } from "lucide-react";
import {
  type Pillar,
  type SchedulePreviewItem,
  type StorefrontPreview,
  type InvoicePreview,
  type StaffPreview,
  type InventoryPreview,
} from "@/interfaces/feature.interface";

interface FeaturesPreviewProps {
  activeTab: number;
  current: Pillar;
}

export const FeaturesPreview: React.FC<FeaturesPreviewProps> = ({
  activeTab,
  current,
}) => {
  return (
    <div className="rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-6 shadow-md space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-foreground">
            {(current.preview as { header?: string }).header || current.title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
          Live Preview
        </span>
      </div>

      {activeTab === 0 && (
        <div className="space-y-2.5">
          {((current.preview as { items: SchedulePreviewItem[] }).items || []).map(
            (item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl border border-border bg-card/60"
              >
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {item.time} • {item.staff}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-primary">
                    {item.amount}
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                    {item.status}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {activeTab === 1 && (
        <div className="space-y-3">
          {(() => {
            const preview = current.preview as StorefrontPreview;
            return (
              <>
                <div className="p-3 rounded-xl border border-primary/20 bg-primary/5 space-y-1">
                  <div className="text-[11px] text-muted-foreground">
                    Tenant URL:
                  </div>
                  <div className="text-sm font-mono font-bold text-primary">
                    https://{preview.url}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card/60 space-y-1 text-xs">
                  <div className="font-semibold text-foreground">
                    {preview.service}
                  </div>
                  <div className="text-muted-foreground">
                    With: {preview.specialist}
                  </div>
                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-border">
                    <span className="font-bold text-foreground">
                      {preview.price}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                      ✓ {preview.deposit}
                    </span>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {activeTab === 2 && (
        <div className="space-y-3 font-mono text-xs">
          {(() => {
            const preview = current.preview as InvoicePreview;
            return (
              <>
                <div className="p-3 rounded-xl border border-border bg-card/60 space-y-2">
                  <div className="flex justify-between text-muted-foreground text-[11px]">
                    <span>Receipt #{preview.invoiceNo}</span>
                    <span>Today</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal:</span>
                    <span>{preview.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax:</span>
                    <span>{preview.tax}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-border">
                    <span>Total Due:</span>
                    <span>{preview.total}</span>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-600 font-sans font-medium bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  ✓ {preview.payment}
                </div>
              </>
            );
          })()}
        </div>
      )}

      {activeTab === 3 && (
        <div className="space-y-3">
          {(() => {
            const preview = current.preview as StaffPreview;
            return (
              <>
                <div className="p-3 rounded-xl border border-border bg-card/60 space-y-2">
                  <div className="text-xs font-bold text-foreground">
                    {preview.staff}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div>
                      <div className="text-[10px] text-muted-foreground">
                        Monthly Sales:
                      </div>
                      <div className="font-bold text-foreground">
                        {preview.monthRevenue}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground">
                        Commission:
                      </div>
                      <div className="font-bold text-primary">
                        {preview.commission}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-foreground p-2.5 rounded-lg bg-muted/60">
                  🎯 {preview.rebookRate}
                </div>
              </>
            );
          })()}
        </div>
      )}

      {activeTab === 4 && (
        <div className="space-y-3">
          {(() => {
            const preview = current.preview as InventoryPreview;
            return (
              <>
                <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    <span>{preview.alert}</span>
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    {preview.item}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {preview.remaining}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground p-2.5 rounded-lg bg-card border border-border">
                  Vendor: <strong>{preview.supplier}</strong>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};
