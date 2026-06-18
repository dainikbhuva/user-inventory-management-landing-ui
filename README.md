# UserPortal Landing Page

Marketing site for **UserPortal** — the user & inventory management platform. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
cd landing-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set the employee portal URL (where Sign in / Sign up links go):

```env
NEXT_PUBLIC_PORTAL_URL=http://localhost:5174
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PORTAL_URL` | Base URL of `user-ui` (default: `http://localhost:5174`) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

## Structure

```
landing-ui/
  src/
    app/                 # Next.js App Router (layout, page, globals)
    components/landing/  # Navbar, Hero, Features, Pricing, etc.
    lib/site.ts          # App name, portal URL helpers
```

## Monorepo layout

This repo also contains:

- `api` — backend API
- `user-ui` — employee portal (Vite + React)
- `admin-ui` — platform admin
- `landing-ui` — this marketing site
