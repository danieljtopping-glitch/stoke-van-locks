# Stoke Van Locks — Website

Production-ready static website for Stoke Van Locks, built with Astro v5 + Tailwind CSS v3.
Deployed to Netlify. Form handling via Netlify Forms (no backend required).

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Commands

| Command             | Action                                      |
|---------------------|---------------------------------------------|
| `npm run dev`       | Start development server at localhost:4321  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview production build locally            |

## Project Structure

```
/
├── src/
│   ├── config/
│   │   └── site.ts          ← ALL business data lives here
│   ├── layouts/
│   │   └── Layout.astro     ← HTML shell, SEO, JSON-LD schema
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── WhyUs.astro
│   │   ├── Services.astro
│   │   ├── HowItWorks.astro
│   │   ├── Areas.astro
│   │   ├── Gallery.astro
│   │   ├── Reviews.astro
│   │   ├── FAQs.astro
│   │   ├── ContactForm.astro
│   │   ├── CookieBanner.astro
│   │   └── StickyMobileBar.astro
│   └── pages/
│       ├── index.astro      ← Homepage
│       ├── privacy.astro    ← Privacy Policy
│       └── cookies.astro    ← Cookie Policy
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og-image.svg         ← Replace with real PNG before launch
│   └── images/              ← Add real photos here
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
├── DEPLOY.md                ← Step-by-step deployment guide
├── CONTENT.md               ← List of placeholder content to replace
└── TODO.md                  ← Pre-launch checklist
```

## Updating Business Details

All contact details, services, areas covered, and FAQs are defined in one file:

**[src/config/site.ts](src/config/site.ts)**

To update the phone number, email, WhatsApp link, or any other business data — edit this file only.
Everything else updates automatically.

## Changing the Phone Number

In `src/config/site.ts`, update:

```ts
phone: {
  display: '07843 353 100',    // displayed to users
  href: 'tel:+447843353100',   // used in links (international format, no spaces)
},
```

## Changing the WhatsApp Pre-filled Message

In `src/config/site.ts`, update the `whatsapp.href` value. The message must be URL-encoded.
Use https://www.urlencoder.org/ to encode your message, then append it after `?text=`.

## Adding Real Photos

1. Place `.jpg` or `.webp` files in `/public/images/`
2. Open `src/components/Gallery.astro`
3. Replace the `placeholders` array with your real image data
4. Use `<img>` tags pointing to `/images/your-photo.jpg`

For best performance, use Astro's built-in Image component:
```astro
import { Image } from 'astro:assets';
```

## Adding Real Reviews

Open `src/components/Reviews.astro` and replace the `placeholderReviews` array
with real customer testimonials.

## Tech Stack

- **Framework:** Astro v5 (static output)
- **CSS:** Tailwind CSS v3
- **Fonts:** Inter (self-hosted via @fontsource/inter)
- **Forms:** Netlify Forms (HTML attributes only, no backend)
- **Deployment:** Netlify
- **Node:** 20 LTS (see .nvmrc)

## Deployment

See [DEPLOY.md](DEPLOY.md) for step-by-step instructions.
