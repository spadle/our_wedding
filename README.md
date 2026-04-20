# Paul × Wendy — 10.10.26

An editorial, interactive wedding-planning companion built as a React + Vite site. Lives at the intersection of a save-the-date, a task tracker, and a quiet shared ledger.

## What's inside

- **Hero** — live countdown to October 10, 2026
- **Ceremony** — the plan at a glance (Catholic Mass + restaurant)
- **Guests** — Her Circle & His Circle, ~29 souls
- **Tasks** — 10 chapters, each expandable with subtasks, progress bars, and the ability to add what we missed
- **Budget** — 15 categories with allocated vs. spent, inline-editable and locally saved
- **Timeline** — month by month, from April to October
- **Postscript** — a little love note at the end

State persists in browser `localStorage` (no server, no accounts).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This repo is already configured for Vercel (`vercel.json`). Two ways:

### Option A — Connect the GitHub repo (recommended)

1. Push this repo to https://github.com/spadle/our_wedding
2. Visit https://vercel.com/new
3. Choose "Import Git Repository" → pick `our_wedding`
4. Vercel auto-detects Vite — just click **Deploy**
5. Every push to `main` re-deploys automatically

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS with a custom ivory/oxblood/brass palette
- Motion (framer-motion v11) for animation
- Fraunces (display) + Instrument Sans (body), via Google Fonts

## Editing content

All copy and data live under `src/data/`:

- `guests.ts` — guest list by circle
- `tasks.ts` — task groups and subtasks
- `budget.ts` — suggested budget categories
- `timeline.ts` — month-by-month milestones

Edit those files, save, push — the deployed site updates automatically.
