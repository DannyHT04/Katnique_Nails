# Katnique Nails

Landing page for Katnique Nails, 10960 S. Eastern Ave. #104, Henderson, NV 89052.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build`: production build
- `npm run start`: serve the production build
- `npm run lint`: run ESLint

## Editing content

Most updates only touch [`src/lib/site.ts`](src/lib/site.ts):

| What | Where in `site.ts` |
| --- | --- |
| Phone, address, Instagram, booking link | `site` |
| Business hours (one line per day; use `"Closed"` for days off) | `site.hours` |
| Services and prices | `services` |
| Gallery photos | `gallery` |

The page layout and sections (hero, about, services, gallery, visit) live in [`src/app/page.tsx`](src/app/page.tsx).

### Colors and fonts

The palette comes from the shop's mood board and is defined in [`src/app/globals.css`](src/app/globals.css). Change a value in `:root` to update it across the whole site. The colors are available as Tailwind classes (`bg-wood`, `text-gold`, `border-greige`, and so on).

Fonts (Jost, Cormorant Garamond, Great Vibes) are loaded in [`src/app/layout.tsx`](src/app/layout.tsx).

### Images

All photos are in `public/images/`, with nail photos in `public/images/gallery/`. To add a gallery photo:

1. Save it to `public/images/gallery/` (JPG or WebP; around 1000px wide is plenty).
2. Add a line to the `gallery` list in `site.ts` with its path and a short description of the nails, for example `{ src: "/images/gallery/13.jpg", alt: "Red French tips" }`.

Next.js resizes and converts images automatically, so there's no need to shrink them by hand.

## SEO

Page title, description and social share previews are set in [`src/app/layout.tsx`](src/app/layout.tsx). Business details for Google (address, phone, hours) are generated from `site.ts` in [`src/lib/structured-data.ts`](src/lib/structured-data.ts). `robots.txt` and `sitemap.xml` are generated automatically.

When the site gets a custom domain, set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel (for example `https://katniquenails.com`) so links point to the real domain. Until then it uses Vercel's production URL.

## Still to do

- [ ] Custom favicon (still the Next.js default)
- [ ] Online booking link, if one is set up (the Book buttons call the salon for now)
