# ENVIRONMENT VARIABLES — VG CONSULTANCY

Copy `.env.example` to `.env.local` for local development or configure the variables below in your hosting provider (Cloudflare Workers/Pages, Vercel, or Node.js host). Never commit `.env.local` or secrets to Git.

| Variable | Required | Scope | Description |
|----------|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (Prod) | Public | Canonical base URL (`https://v-gconsultancy.com`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Public | Displayed primary email (`info@vgconsultancy.com`). |
| `CONTACT_RECIPIENT_EMAIL` | Recommended | Server | Destination inbox receiving form notifications (`info@vgconsultancy.com`). |
| `RESEND_API_KEY` | Optional* | Server Secret | API key from Resend (`resend.com`) for transactional email delivery from `/api/contact/`, `/api/consultation/`, and `/api/careers/`. |
| `RESEND_FROM_EMAIL` | Optional | Server | Verified sender address for Resend (e.g., `VG Consultancy <noreply@v-gconsultancy.com>`). |
| `FORM_WEBHOOK_URL` | Optional* | Server Secret | HTTPS webhook endpoint (CRM, Slack, n8n, Zapier) receiving validated JSON form payloads. |

> \*When neither `RESEND_API_KEY` nor `FORM_WEBHOOK_URL` is configured, the API routes validate submissions with Zod, enforce honeypot spam filtering, log safely on the server, and return `deliveryMode: "pending_configuration"` with a reference ID so the UI transparently informs the user without silently faking email delivery.
