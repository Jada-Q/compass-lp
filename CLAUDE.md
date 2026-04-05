# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

COMPASS Landing Page — Japanese-language marketing site for a foreign worker compliance management SaaS targeting Japanese SMEs, supervising organizations (監理団体), and registered support organizations (登録支援機関).

Deployed at: https://compass-lp-psi.vercel.app

Related project: `~/Desktop/projects/compass/` (the main COMPASS application — FastAPI + Next.js)

## Commands

```bash
pnpm dev          # Local dev server
pnpm build        # Static export build (output: out/)
vercel --prod     # Deploy to Vercel
```

## Architecture

Single-page static site. All content is in `src/app/page.tsx` (one React component, no client-side JS needed). Static export via `output: "export"` in next.config.mjs.

- `src/app/layout.tsx` — SEO metadata (title, description, OGP, keywords)
- `src/app/page.tsx` — Full landing page: Hero → Problem → Features → Comparison → Steps → FAQ → Contact CTA
- `public/robots.txt`, `public/sitemap.xml` — SEO files (update sitemap URL if domain changes)

Contact CTA uses a `mailto:` link to `ptp.qiuyu@gmail.com` with pre-filled subject and body template.

## Conventions

- All user-facing text is Japanese
- Code and commits in English
- Commit format: `type: description`
- No external UI libraries — Tailwind utility classes only
