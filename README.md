# CREATIONS 2.0 — Landing Page

Sales landing page for **CREATIONS 2.0**, a 90-day content/marketing program by Academia da Magia for travel agents. Built with React + Vite from the `design_handoff_creations_landing` design reference.

## Stack

- React 19 + Vite
- Plain CSS (design tokens as CSS custom properties in `src/index.css`, responsive layout via real `@media` queries at the 760px breakpoint)

## Structure

- `src/data.js` — all copy/content arrays (pillars, journey steps, encounters, missions, calendar, deliverables, FAQ)
- `src/config.js` — `CHECKOUT_URL` / `WHATSAPP_GROUP_URL` config points; update once the real links are available
- `src/components/` — one component per section, composed in `src/App.jsx`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
