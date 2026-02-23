# jamey.build

Personal site for Jamey Hurst — blog, design, photography, and tech.

**Live:** [jamey.build](https://jamey.build)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + custom CSS
- **Fonts:** Lora (serif) + Outfit (sans-serif) via `next/font`
- **Hosting:** Cloudflare Pages
- **Domain:** Cloudflare Registrar

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` auto-deploy via Cloudflare Pages. The build uses `@cloudflare/next-on-pages` with the `nodejs_compat` compatibility flag configured in `wrangler.toml`.

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Red | `#DB2E2E` | Logo, hero overline, nav underlines |
| Blue | `#2E578C` | Card badges, quote section background |
| Green | `#63996B` | Footer accents, about section |
