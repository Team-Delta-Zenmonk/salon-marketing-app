# ZenMonk Salon Platform — Marketing Website (`salon.com`)

The official public-facing B2B marketing website for the ZenMonk Salon Management Platform. Designed for high conversion, showcasing platform capabilities, interactive ROI simulation, SaaS plan pricing tiers, and seamless onboarding entry points for prospective salon owners.

---

## Key Features

- **High-Conversion Showcase:** Hero presentation with smooth entrance animations and clear value propositions for salon owners.
- **Interactive ROI Calculator:** Dynamic slider estimating salon revenue growth, appointment uplift, and saved operational hours by switching to ZenMonk.
- **Synchronized Pricing Grid:** Monthly (₹2,499 / mo) vs. Yearly (₹24,990 / yr — includes 2 months free) toggle with itemized feature breakdowns.
- **Onboarding Funnels:** Direct CTA redirects to `https://app.salon.com/register` for self-serve registration, plus a modal contact form for enterprise and sales-led inquiries.
- **Responsive Modern UI:** Built with TailwindCSS v4 and Framer Motion micro-interactions.

---

## Tech Stack

- **Framework:** React 19 + Vite 8 (TypeScript)
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (variable Google font)

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Default development settings:
   ```env
   VITE_PORT=3004
   VITE_MANAGEMENT_APP_URL=http://localhost:3000
   VITE_ADMIN_APP_URL=http://localhost:3003
   VITE_API_URL=http://localhost:8080/api
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3004`.

4. **Production build & typecheck:**
   ```bash
   npm run build
   ```

---

## Production Deployment

- **Production Domain:** `https://salon.com`
- **Target Platform:** Vercel / Cloudflare Pages / Static Edge CDN
- **Routing:** Single-page application with hash-based anchor navigation (`#features`, `#pricing`, `#testimonials`, `#contact`).
