import {
  Calendar,
  Store,
  Receipt,
  Users,
  Package,
} from "lucide-react";
import type { Pillar } from "@/interfaces/feature.interface";

export const FEATURE_PILLARS: Pillar[] = [
  {
    title: "Smart Calendar & Multi-Staff Scheduler",
    tag: "Zero Double-Bookings",
    desc: "An ultra-fluid drag-and-drop scheduler engineered for high-volume days. Visualize each stylist's column, set automatic buffer times between treatments, and manage walk-ins with single-click reassignments.",
    icon: Calendar,
    bullets: [
      "Color-coded stylist columns and custom service durations",
      "Automated buffer times for sanitation & setup",
      "Real-time sync across desktop, tablet, and mobile",
      "Double-booking prevention algorithm",
    ],
    preview: {
      header: "Staff Schedule • Today",
      items: [
        { time: "09:30 AM", title: "Balayage & Gloss", staff: "Elena A.", status: "In Chair", amount: "₹1,850" },
        { time: "11:00 AM", title: "Precision Cut & Beard", staff: "Marcus R.", status: "Upcoming", amount: "₹650" },
        { time: "12:15 PM", title: "Aromatherapy Facial", staff: "Aria N.", status: "Confirmed", amount: "₹1,200" },
      ],
    },
  },
  {
    title: "Instant Dynamic Storefront (slug.salon.com)",
    tag: "24/7 Client Self-Booking",
    desc: "Every salon receives a dedicated, luxury booking web app live the moment you register. Customers explore treatment menus, select preferred specialists, and reserve slots with instant UPI and card prepayments.",
    icon: Store,
    bullets: [
      "Free branded subdomain: yoursalon.salon.com",
      "Nested sub-services hierarchy with transparent pricing",
      "Specialist bios, portfolios, and real-time availability",
      "Instant SMS and email calendar invites for clients",
    ],
    preview: {
      header: "Storefront Live Preview",
      url: "crown-blade.salon.com",
      service: "Executive Haircut & Royal Shave",
      specialist: "Marcus Reed",
      price: "₹850.00",
      deposit: "Instant UPI / Card",
    },
  },
  {
    title: "Fast POS & Tax Invoicing",
    tag: "Checkout in Under 10s",
    desc: "Speed up front-desk checkout. Bundle itemized services with retail hair care products, split bills between cash, card, and UPI, calculate automatic GST/VAT, and print thermal receipts.",
    icon: Receipt,
    bullets: [
      "Split-tender payments (Cash + UPI + Card)",
      "Instant thermal receipt & PDF invoicing",
      "Automatic retail inventory stock deduction on sale",
      "End-of-day cash drawer reconciliation & tip tracking",
    ],
    preview: {
      invoiceNo: "INV-2026-084",
      subtotal: "₹2,400.00",
      tax: "₹216.00 (GST 9%)",
      total: "₹2,616.00",
      payment: "Paid via UPI (₹2,000) + Cash (₹616)",
    },
  },
  {
    title: "Staff Commissions & Performance",
    tag: "Happy Stylists, Zero Math",
    desc: "Eliminate end-of-month payroll headaches. Set custom tiered commission rates for service revenue versus product retail sales, track stylist hours, and monitor individual rebooking rates.",
    icon: Users,
    bullets: [
      "Tiered commission rules per service category",
      "Individual staff login portals with privacy bounds",
      "Real-time daily tip calculations",
      "Automated commission summary reports",
    ],
    preview: {
      staff: "Elena Alvarez",
      monthRevenue: "₹1,48,200",
      commission: "42% (₹62,244)",
      rebookRate: "78% Client Retention",
    },
  },
  {
    title: "Inventory Intelligence & Low-Stock Alerts",
    tag: "Never Run Out of Color",
    desc: "Keep retail shelves and backbar color supplies fully stocked. Product quantities automatically deplete when added to client invoices or backbar treatment logs, alerting you before you run out.",
    icon: Package,
    bullets: [
      "Retail vs Backbar inventory segregation",
      "Automated reorder threshold alerts via notification",
      "Supplier SKU and purchase cost tracking",
      "Historical usage analytics to minimize product waste",
    ],
    preview: {
      alert: "Low Stock Warning",
      item: "Olaplex No. 3 Hair Perfector",
      remaining: "3 units left (Reorder at 5)",
      supplier: "BeautySupply Direct",
    },
  },
];
