# TODO — Pre-Launch Checklist

Everything that should be done or verified before going live at stokevanlocks.co.uk.

---

## Content (must complete before launch)

- [ ] Replace placeholder gallery photos with real installation photos (see CONTENT.md)
- [ ] Replace placeholder reviews with real customer testimonials (see CONTENT.md)
- [ ] Provide logo file and update Header + Footer components
- [ ] Confirm insurance wording — update `src/components/WhyUs.astro` if confirmed
- [ ] Decide on tagline — keep or remove from `src/components/Hero.astro`
- [ ] Confirm service hours are correct in JSON-LD schema (or remove `openingHours`)
- [ ] Create branded OG image (1200×630 PNG) and replace `/public/og-image.svg`

---

## Technical Checks

- [ ] Run `npm run build` locally — ensure 0 errors
- [ ] Run `npm run preview` locally — check all pages load correctly
- [ ] Test mobile view: sticky bottom bar visible, Call/WhatsApp/Quote all tappable
- [ ] Test anchor nav: clicking header links scrolls to correct sections without header overlap
- [ ] Test hamburger menu: opens and closes correctly on mobile
- [ ] Test FAQ accordion: opens/closes, aria-expanded updates correctly
- [ ] Test cookie banner: shows on first visit, hides after accept/reject, doesn't reshow
- [ ] Test contact form: fill in all fields, submit — verify it appears in Netlify Forms dashboard
- [ ] Verify form email notification is set up in Netlify (Site → Forms → Notifications)
- [ ] Check Privacy Policy page loads at /privacy
- [ ] Check Cookie Policy page loads at /cookies
- [ ] Verify sitemap at /sitemap-index.xml after deployment
- [ ] Verify robots.txt at /robots.txt

---

## Browser / Device Testing

- [ ] Chrome on desktop (Windows or Mac)
- [ ] Safari on iPhone — check safe-area-inset on sticky bar and cookie banner
- [ ] Chrome on Android
- [ ] Firefox on desktop

---

## SEO / Performance

- [ ] Submit sitemap to Google Search Console (see DEPLOY.md Step 6)
- [ ] Validate JSON-LD schema: paste page HTML at https://search.google.com/test/rich-results
- [ ] Run Lighthouse audit (Chrome → DevTools → Lighthouse → Mobile):
  - Target: Performance 90+, Accessibility 100, SEO 100, Best Practices 90+
- [ ] Set up Google Business Profile and link website URL (see DEPLOY.md Step 7)
- [ ] Check all page titles and meta descriptions are correct and keyword-relevant

---

## Post-Launch (nice to have)

- [ ] Add privacy-respecting analytics (Plausible or Fathom recommended — no cookie consent needed)
  - Plausible: https://plausible.io (£9/month, GDPR-compliant, no cookies)
  - Add script tag to Layout.astro, update Cookie Policy if needed
- [ ] Add OpenStreetMap embed to Areas section (replace "Map coming soon" placeholder)
- [ ] Set up email forwarding if needed (info@stokevanlocks.co.uk → personal inbox)
- [ ] Monitor Netlify Forms dashboard weekly for new enquiries
- [ ] Collect 5+ Google reviews — link to Google Business Profile in footer
- [ ] Consider adding a /services page if SEO warrants it (monitor Search Console impressions)
- [ ] Consider self-hosting Inter font locally if not already done (already done via @fontsource)

---

## Optional Enhancements

- [ ] Add a /thank-you page for Netlify form redirects (cleaner than query param approach)
  - Update ContactForm.astro: `action="/thank-you"` on the form
  - Create `src/pages/thank-you.astro` with a "Thank you for your enquiry" message
- [ ] Add a floating WhatsApp button (in addition to sticky bar) for desktop users
- [ ] Add before/after photo slider in Gallery section (requires minimal JS)
- [ ] Add a "Fleet enquiries" section or dedicated page if fleet business grows
- [ ] Add structured data for FAQs (FAQ Schema) to potentially show rich results in Google
  - Schema: `@type: "FAQPage"` with `mainEntity` array of `Question` + `acceptedAnswer`
- [ ] Set up Netlify notifications to receive enquiries via SMS (using Zapier integration)
