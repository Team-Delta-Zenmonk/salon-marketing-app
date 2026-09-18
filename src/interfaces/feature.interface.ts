import type { LucideIcon } from "lucide-react";

export interface SchedulePreviewItem {
  time: string;
  title: string;
  staff: string;
  status: string;
  amount: string;
}

export interface StorefrontPreview {
  header: string;
  url: string;
  service: string;
  specialist: string;
  price: string;
  deposit: string;
}

export interface InvoicePreview {
  header?: string;
  invoiceNo: string;
  subtotal: string;
  tax: string;
  total: string;
  payment: string;
}

export interface StaffPreview {
  header?: string;
  staff: string;
  monthRevenue: string;
  commission: string;
  rebookRate: string;
}

export interface InventoryPreview {
  header?: string;
  alert: string;
  item: string;
  remaining: string;
  supplier: string;
}

export type PillarPreview =
  | ({ header: string; items: SchedulePreviewItem[] } & Record<string, unknown>)
  | StorefrontPreview
  | InvoicePreview
  | StaffPreview
  | InventoryPreview;

export interface Pillar {
  title: string;
  tag: string;
  desc: string;
  icon: LucideIcon;
  bullets: string[];
  preview: PillarPreview;
}

