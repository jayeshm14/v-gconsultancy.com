# DEPLOYMENT GUIDE — VG CONSULTANCY

## 1. Pre-Deployment Verification

Run locally before deploying:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Configure environment variables per [ENVIRONMENT_VARIABLES.md](file:///e:/Projects/v-gconsultancy.com/ENVIRONMENT_VARIABLES.md) (such as `RESEND_API_KEY` or `FORM_WEBHOOK_URL` for live form email/CRM forwarding).

---

## 2. Cloudflare Pages Deployment (Configured)

This repository includes `wrangler.jsonc`, `scripts/build-cloudflare.mjs`, `public/_redirects`, `public/_headers`, and `functions/api/[[route]].ts` for Cloudflare Pages + Pages Functions (`CLOUDFLARE_ACCOUNT_ID=899dabdbc832953085048440677fe2a9`):

```bash
# 1. Build static output into ./out (automatically preserves src/app/api for Node.js)
npm run build:cloudflare

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name=vg-consultancy --branch=main
```

Set secret environment variables on Cloudflare Pages:
```bash
npx wrangler pages secret put RESEND_API_KEY --project-name=vg-consultancy
npx wrangler pages secret put CONTACT_RECIPIENT_EMAIL --project-name=vg-consultancy
```

---

## 3. Alternative — Node.js / Docker / VPS Hosting

```bash
npm ci
npm run build
npm run start
```

### Custom Domain & DNS Cutover (`v-gconsultancy.com`)
1. Attach custom domain `v-gconsultancy.com` (and `www.v-gconsultancy.com`) inside Cloudflare Pages after verification.
2. Preserve existing DNS MX/TXT email records for `vgconsultancy.com` / `v-gconsultancy.com`.
3. After cutover, verify `/sitemap.xml`, `/robots.txt`, legacy `.html` redirects, and live form submissions.
