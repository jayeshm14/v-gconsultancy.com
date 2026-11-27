# VG Consultancy — Corporate Website (`v-gconsultancy.com`)

Production-ready Next.js 14 (App Router, TypeScript, Tailwind CSS) corporate website rebuild for **VG Consultancy** (`https://v-gconsultancy.com/`), established in 2016.

**Positioning:** *Engineering Intelligence. Enabling Growth.* — An AI-enabled technology and digital engineering partner helping businesses innovate, modernize, and scale across India and global markets.

## Technology Stack

- **Framework:** Next.js 14.2.0 (App Router, TypeScript strict mode)
- **UI & Styling:** React 18.3, Tailwind CSS 3.4, custom brand tokens preserving VG Consultancy's Midnight Navy (`#101C32`) & Signature Gold (`#DDA255`) heritage
- **Fonts:** Self-hosted `Inter` and `Manrope` via `next/font/local` (zero external font latency)
- **Icons:** `lucide-react`
- **Validation & Forms:** `zod` client + server validation, honeypot spam protection, Next.js API Route Handlers (`/api/contact/`, `/api/consultation/`, `/api/careers/`)

## Local Development & Build Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Type-check and lint
npx tsc --noEmit
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## Key Documentation

- [DISCOVERY_REPORT.md](file:///e:/Projects/v-gconsultancy.com/DISCOVERY_REPORT.md)
- [BRAND_GUIDELINES.md](file:///e:/Projects/v-gconsultancy.com/BRAND_GUIDELINES.md)
- [SITEMAP.md](file:///e:/Projects/v-gconsultancy.com/SITEMAP.md)
- [ROUTE_INVENTORY.md](file:///e:/Projects/v-gconsultancy.com/ROUTE_INVENTORY.md)
- [SEO_CHECKLIST.md](file:///e:/Projects/v-gconsultancy.com/SEO_CHECKLIST.md)
- [DEPLOYMENT_GUIDE.md](file:///e:/Projects/v-gconsultancy.com/DEPLOYMENT_GUIDE.md)
- [ENVIRONMENT_VARIABLES.md](file:///e:/Projects/v-gconsultancy.com/ENVIRONMENT_VARIABLES.md)
- [TEST_REPORT.md](file:///e:/Projects/v-gconsultancy.com/TEST_REPORT.md)
- [CONTENT_VERIFICATION_REPORT.md](file:///e:/Projects/v-gconsultancy.com/CONTENT_VERIFICATION_REPORT.md)
