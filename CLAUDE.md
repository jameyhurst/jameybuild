# CLAUDE.md

## Project Overview
Personal website for Jamey Hurst at [jamey.build](https://jamey.build). Built with Next.js 16, hosted on Cloudflare Pages.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS in `@layer components` blocks
- **Fonts:** Lora (serif headings) + Outfit (sans-serif body) via `next/font/google`
- **Hosting:** Cloudflare Pages with `@cloudflare/next-on-pages`
- **Domain:** jamey.build (Cloudflare Registrar)

## Key Files
- `src/app/page.tsx` — Main homepage (client component with scroll animations)
- `src/app/layout.tsx` — Root layout with font loading and metadata
- `src/app/globals.css` — All custom styles in `@layer base` and `@layer components`
- `wrangler.toml` — Cloudflare Pages config (nodejs_compat flag, compatibility_date)
- `public/images/` — Personal photos (blog.jpg, design.jpg, tech.png)

## Design System
- **Color palette:** Red `#DB2E2E`, Blue `#2E578C`, Green `#63996B`
- **Background:** `#faf9f7` (warm off-white)
- **Text:** `#1a1a1a` (near-black), `#666666` (muted)
- **Style:** Swiss minimalism with 12-column grid, clean typography, subtle scroll animations

## Tailwind CSS v4 Notes
- Custom styles MUST go inside `@layer base {}` or `@layer components {}` — styles outside layers get overridden
- Avoid using `.container` as a class name — conflicts with Tailwind's built-in. Use `.wrap` instead
- CSS variables defined in `@theme {}` block, referenced as `var(--color-red)` etc.

## Deployment
- Pushes to `main` auto-deploy via Cloudflare Pages
- Build command: `npx @cloudflare/next-on-pages@1`
- Build output: `.vercel/output/static`
- `wrangler.toml` must include `pages_build_output_dir` and `compatibility_date` or Cloudflare ignores it

## AWS Profiles
The owner has two AWS CLI profiles configured in `~/.aws/`:
- `personal` (us-east-2) — Personal/learning account (previously "default")
- `fuelfox` (us-east-1)
