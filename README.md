# RemoHires — Landing Page

Marketing landing page for **RemoHires**, a remote recruitment platform that
connects companies with vetted remote talent across every time zone.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Fonts: Bricolage Grotesque (display), Inter (body), Geist Mono (data labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The `/api/lead` route handler proxies lead-form submissions (from `/` and
`/quotes`) to the RemoHires Leads backend, server-side, so the API key is
never exposed to the browser.

| Variable      | Required | Description                                                                                    |
| ------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `FRM_API_KEY` | Yes      | `x-api-key` for `https://frm-v1.remohires.com/api/submit`. Without it, lead submissions fail closed (visitors see a retry error, no lead is sent, no GTM event fires). |
| `FRM_API_URL` | No       | Overrides the backend URL. Defaults to `https://frm-v1.remohires.com/api/submit`.                 |

The backend also enforces an origin allowlist — confirm with whoever manages
`frm-v1.remohires.com` that this app's production domain is allowed.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx         # Fonts, metadata, root layout
│  ├─ page.tsx           # Landing page sections
│  └─ globals.css        # Design tokens + Tailwind theme
└─ components/
   └─ coverage-panel.tsx # Signature "live coverage" console
```
