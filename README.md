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

Lead-form submissions go straight from the browser to the RemoHires Leads
backend via `submitLead()`. See [`docs/FORMS.md`](docs/FORMS.md) for the full
field reference, required env vars (`NEXT_PUBLIC_FORMS_API_URL`,
`NEXT_PUBLIC_FORMS_API_KEY`), and how to wire up a new form.

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
