# BRAND GUIDELINES — VG CONSULTANCY

**Brand Name:** VG Consultancy  
**Domain:** `https://v-gconsultancy.com/`  
**Established:** 2016  
**Tagline:** Engineering Intelligence. Enabling Growth.  
**Primary Positioning:** An AI-enabled technology and digital engineering partner helping businesses innovate, modernize and scale.

---

## 1. LOGO & VISUAL HERITAGE PRESERVATION

- **Preserved Asset:** `public/images/logo.png` (extracted from live `v-gconsultancy.com` HTML, `88x45` px aspect ratio).
- **Usage:** Displayed in the primary navigation bar (paired with `VG Consultancy` wordmark) and footer on a dark navy surface (`#101C32`) or clean light header with crisp contrast. Never replaced by an AI-generated substitute.
- **Favicon & Touch Icon:** Derived directly from `public/images/logo.png` so browser tabs and bookmarks retain brand consistency.

---

## 2. COLOUR SYSTEM & ACCESSIBILITY RESOLUTION

### Design Decision: Preserving Brand Heritage + International Enterprise Clarity
The legacy `v-gconsultancy.com` site established a recognizable identity built on **Dark Navy (`#101923`)** and **Signature Gold (`#DDA255` / `#B88A47`)**. The rebuild preserves this recognizable identity while adopting the international enterprise hybrid structure (Midnight Navy `#101C32`, Cloud White `#F4F7FB`, Primary Text `#192436`, Secondary Text `#64748B`, plus restrained Technology Blue `#246BFD` and Innovation Teal `#16B89A` engineering indicators).

| Role | Token | Hex | Contrast Usage Rule |
|------|-------|-----|---------------------|
| Midnight Navy | `brand-dark` | `#101C32` | Hero backgrounds, dark CTAs, footer |
| Deep Slate Navy | `brand-navy` | `#182638` | Dark secondary cards & borders |
| Signature Gold | `brand-gold` | `#DDA255` | Primary CTA fill (with `#101C32` dark ink), dark-surface highlights |
| Accessible Bronze | `brand-bronze-text` | `#8C5E1A` | Text links, kickers, and badges on light surfaces (WCAG AA >= 4.5:1 on `#FFFFFF` and `#F4F7FB`) |
| Technology Blue | `brand-blue` | `#246BFD` | Engineering capability tags, focus accents, restrained highlights |
| Innovation Teal | `brand-teal` | `#0F9D84` | Verified status indicators, step progress, positive confirmation |
| Cloud White | `brand-light` | `#F4F7FB` | Alternating light section surfaces |
| Pure White | `brand-white` | `#FFFFFF` | Card surfaces, primary light background |
| Primary Ink | `brand-ink` | `#192436` | Headings & primary body copy on light backgrounds |
| Muted Slate | `brand-muted` | `#475569` | Secondary copy on light backgrounds (high-contrast AA) |
| Dark Surface Copy | `brand-on-dark-muted` | `#CBD5E1` | Secondary copy on `#101C32` dark backgrounds (10.5:1 contrast) |

> **Accessibility Guardrail:** Never render `#DDA255` text directly on `#FFFFFF` for small body text, and never render `#192436` headings on `#101C32` dark sections. Explicit surface-aware text classes are mandatory.

---

## 3. TYPOGRAPHY

- **Display / Headings:** `Manrope` (`--font-manrope`, weights 600, 700, 800) — crisp geometric authority for international B2B credibility.
- **Body / UI:** `Inter` (`--font-inter`, weights 400, 500, 600, 700) — high legibility across dense technical specifications and forms.
- **Scale & Hierarchy:** Single `<h1>` per page (`clamp(2.25rem, 4vw, 3.75rem)`), structured `<h2>` section headings, `<h3>`/`<h4>` card titles, `1rem` (`16px`) minimum body size with `1.65–1.75` line height.

---

## 4. TONE OF VOICE & VISUAL RESTRICTIONS

- **Tone:** Confident, engineering-led, business-outcome oriented, transparent, internationally clear English.
- **Strictly Prohibited:** Generic AI robot illustrations, neon cyber gradients, excessive glassmorphism, floating random blobs, unverified metrics/awards/client logos, and clickbait copy.
