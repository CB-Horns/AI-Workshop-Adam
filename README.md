# Christopher T. Brown, Ph.D. — Personal Resume Site

Single-page resume website for **Christopher T. Brown**, a technical executive and
commercialization leader in advanced materials, AI, OLEDs, and quantum computing.

## Live URL

Coming soon — deployed automatically on Vercel.

Vercel is connected to the GitHub repo so every push triggers a build. See the
"Deliberately skipped" section below for the deployment status on day one.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com) (v4)
- Static / server-rendered; light/dark theme toggle that defaults to the visitor's
  system preference

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Content source

All content is drawn from the resume attached to the CHR-8 task
(`2026_08_10 CTB resume.pdf`). The LinkedIn profile shared for this task is
linked in the page header.

## Deliberately skipped

- No residential or street address anywhere on the site or in the repo (privacy).
- No phone number published (no `INCLUDE PHONE` override was provided; privacy).
- No email address published (none appears in the resume; privacy).
- No client-side data fetching, contact form, analytics, or multiple pages (per the
  CHR-8 PRD phase 1 scope).
- A contact form and a downloadable PDF of the resume are listed as future / phase 2
  work in the PRD and were not built.