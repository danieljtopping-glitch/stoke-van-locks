# Content Placeholders — Stoke Van Locks

This document lists everything that needs to be provided or replaced before the site is fully ready.

Items marked **[REQUIRED]** must be done before launch.
Items marked **[RECOMMENDED]** will improve the site but aren't blocking.
Items marked **[OPTIONAL]** are nice to have.

---

## Logo

**[REQUIRED]**

- A logo file is referenced in the site but not yet provided.
- Current state: Text-based placeholder ("Stoke Van Locks" with a lock icon).
- When ready: Provide the logo as an SVG file (ideal) or PNG with transparent background.
- Place the file at: `/public/images/logo.svg` (or `.png`)
- Then update `src/components/Header.astro` and `src/components/Footer.astro`
  to replace the text logo with an `<img>` tag.

---

## Gallery / Installation Photos

**[REQUIRED]** — major credibility gap without real photos

- Need: 10–20 photos of completed installations.
- Format: `.jpg` or `.webp` (compress to < 300KB each for performance).
- Recommended subjects:
  - Deadlock installed on a Transit rear door (close-up)
  - Slam lock on a Vivaro or Sprinter
  - Hook lock installation
  - Full van showing multiple locks fitted
  - Before/after comparisons (door handle area + lock fitted)
  - Installer at work (optional, humanises the brand)

- File naming: `gallery-01.jpg`, `gallery-02.jpg`, etc.
- Place in: `/public/images/`
- Then update `src/components/Gallery.astro` to reference real images.

---

## Customer Reviews / Testimonials

**[REQUIRED]** — placeholder reviews are currently shown

- Need: 3–6 real customer reviews.
- Ideal format: Get customers to leave Google Business Profile reviews,
  then copy quotes from there (with permission).
- Information needed per review:
  - Quote text (1–3 sentences)
  - Customer's first name + last initial (e.g. "J. Brown")
  - Location (town/city, e.g. "Newcastle-under-Lyme")
  - Star rating (presumably 5 stars)

- Update: `src/components/Reviews.astro` — replace the `placeholderReviews` array.

---

## OG Image (Social Sharing Preview)

**[RECOMMENDED]**

- Current state: SVG placeholder (amber/navy branded image).
- Social networks (Facebook, WhatsApp, LinkedIn) require a PNG image for link previews.
- Required size: 1200 × 630 pixels, PNG format.
- Suggested content: Business name, tagline, phone number, logo — on navy background.
- Save as: `/public/og-image.png`
- Update `src/layouts/Layout.astro`: change `/og-image.svg` to `/og-image.png`

---

## Insurance Wording Confirmation

**[REQUIRED]**

- Current wording in `src/components/WhyUs.astro`:
  "Public liability insurance in place (details available on request)"
- If you can confirm you hold a current public liability insurance policy,
  the wording can be updated to: "Fully insured with public liability cover"
- Comment in the file: `<!-- TODO: Confirm insurance wording with client -->`

---

## Tagline Confirmation

**[REQUIRED]**

- The tagline "If your van needs locking, ring Topping." is included in the Hero section
  as an optional italic line.
- If you do not want it shown: open `src/components/Hero.astro` and remove the
  `<p>` tag containing the tagline.
- If you want to keep it: leave as-is.

---

## Service Hours (for Schema)

**[RECOMMENDED]**

- The JSON-LD schema in `src/layouts/Layout.astro` currently says:
  `"openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-14:00"`
- If your hours differ, or if you prefer to remove hours entirely (since you work
  by appointment), update or remove the `openingHours` field.
- Schema format guide: https://schema.org/openingHours

---

## Map

**[RECOMMENDED]**

- Current state: Placeholder graphic with concentric circles and "Map coming soon" text.
- Options:
  1. **Static image:** Take a screenshot of Google Maps showing the Stoke area
     and save it as `/public/images/service-area-map.jpg`
  2. **OpenStreetMap embed:** Privacy-friendly, no GDPR issues.
     Example embed: `https://www.openstreetmap.org/export/embed.html?bbox=-2.5,52.8,-1.8,53.2&layer=mapnik`
  3. **Google Maps embed:** Requires a Google Maps API key and GDPR considerations.
- Update: `src/components/Areas.astro` — replace the placeholder `<div>` with your chosen map.

---

## Google Site Verification (Search Console)

**[RECOMMENDED]** — after deployment

- Google will provide a meta tag to add to `<head>` in `src/layouts/Layout.astro`
- Example: `<meta name="google-site-verification" content="XXXX" />`
- See DEPLOY.md Step 6 for full instructions.

---

## Social Media Links

**[OPTIONAL]**

- If you have a Facebook page or other social profiles, add them to `src/config/site.ts`:
  ```ts
  social: {
    facebook: 'https://facebook.com/YourPageName',
  }
  ```
- Then add social icons to the Footer component.

---

## Checklist Summary

| Item | Status | Priority |
|------|--------|----------|
| Logo file | Pending | Required |
| 10–20 installation photos | Pending | Required |
| 3–6 real customer reviews | Pending | Required |
| Confirm insurance wording | Pending | Required |
| Confirm tagline use | Pending | Required |
| OG image (PNG, 1200×630) | Pending | Recommended |
| Confirm/update service hours in schema | Pending | Recommended |
| Map embed or image | Pending | Recommended |
| Google Search Console verification | After launch | Recommended |
| Social media links | Pending | Optional |
