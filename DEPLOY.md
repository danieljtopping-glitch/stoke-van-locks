# Deployment Guide — Stoke Van Locks

Step-by-step instructions to get the site live at **stokevanlocks.co.uk**.

No technical expertise required — just follow these steps in order.

---

## Overview

- **Hosting:** Netlify (free tier)
- **Domain:** stokevanlocks.co.uk (already purchased)
- **Build:** Automatic — Netlify builds the site from your code every time you push changes

---

## Step 1: Create a Free Netlify Account

1. Go to https://app.netlify.com/signup
2. Sign up with your email address (or GitHub if you have one)
3. Verify your email

---

## Step 2: Put the Code on GitHub (recommended)

If you haven't already, put this website folder on GitHub so Netlify can deploy it automatically.

**Option A: Using GitHub Desktop (easiest for non-developers)**

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account (create one free at github.com if needed)
3. In GitHub Desktop: File → Add Local Repository → choose this folder
4. Click "Publish Repository"
5. Keep "Keep this code private" checked
6. Click "Publish Repository"

**Option B: Using the terminal**

```bash
cd "/path/to/your/Vanlocks website"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/stoke-van-locks.git
git push -u origin main
```

---

## Step 3: Deploy to Netlify

1. Log in to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"** and authorise Netlify to access your GitHub
4. Select your repository (`stoke-van-locks` or whatever you named it)
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**
7. Wait 1–2 minutes for the first build to complete

Your site is now live at a temporary Netlify URL (something like `amazing-site-123abc.netlify.app`).

---

## Step 4: Connect Your Domain (stokevanlocks.co.uk)

### 4a. Add Your Domain in Netlify

1. In your Netlify dashboard, go to your site
2. Click **"Domain management"** → **"Add a domain"**
3. Type `stokevanlocks.co.uk` and click **"Verify"**
4. Click **"Add domain"**
5. Also add `www.stokevanlocks.co.uk` as an alias

### 4b. Update DNS Records at Your Domain Registrar

Log in to wherever you bought your domain (e.g. GoDaddy, 123-reg, Namecheap, etc.).

Find the **DNS settings** for `stokevanlocks.co.uk` and add/update these records:

**For the root domain (stokevanlocks.co.uk):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 3600 |
| A | @ | 99.83.190.102 | 3600 |

**For the www subdomain (www.stokevanlocks.co.uk):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | apex-loadbalancer.netlify.com | 3600 |

> **Note:** Netlify's IP addresses may change. For the most current values, check:
> Netlify Dashboard → Domain management → your domain → DNS panel.
> Netlify provides specific DNS instructions for your domain once you add it.

**Alternative: Use Netlify DNS (easier)**

Instead of the above, you can transfer your domain's nameservers to Netlify:
1. In Netlify: Domain management → your domain → click "Set up Netlify DNS"
2. Netlify will give you 4 nameserver addresses (e.g. `dns1.p01.nsone.net`)
3. At your domain registrar, change the nameservers to Netlify's 4 addresses
4. DNS will propagate within a few hours (up to 48 hours)

### 4c. SSL/HTTPS Certificate (automatic)

Once DNS propagates, Netlify automatically provisions a free SSL certificate via Let's Encrypt.
This enables `https://` — no action required from you.

---

## Step 5: Set Up Form Email Notifications

So you receive quote requests by email:

1. In Netlify: Go to your site → **"Forms"**
2. After your first form submission (or after the site deploys), you'll see **"quote-request"** listed
3. Click the form name
4. Click **"Form notifications"** → **"Add notification"** → **"Email notification"**
5. Enter the email address where you want to receive quotes: `info@stokevanlocks.co.uk`
6. Click **"Save"**

From now on, every quote request will be emailed to you automatically.

**Testing the form:**
1. Visit your live site
2. Fill in the quote form and submit it
3. Check your Netlify Forms dashboard (Site → Forms → quote-request)
4. Check your email for the notification

---

## Step 6: Submit to Google Search Console (SEO)

This tells Google your site exists and helps it appear in search results.

1. Go to https://search.google.com/search-console
2. Sign in with a Google account
3. Click **"Add property"** → enter `https://www.stokevanlocks.co.uk`
4. Verify ownership using the "HTML tag" method:
   - Google will give you a `<meta name="google-site-verification" ...>` tag
   - Add it to `src/layouts/Layout.astro` in the `<head>` section
   - Rebuild and redeploy
5. Back in Search Console, click **"Verify"**
6. Go to **"Sitemaps"** → enter `sitemap-index.xml` → click **"Submit"**

---

## Step 7: Set Up Google Business Profile (important for local SEO)

1. Go to https://business.google.com
2. Search for your business name
3. Add/claim your business listing
4. Verify ownership (Google will send a postcard or call)
5. Add your website URL: `https://www.stokevanlocks.co.uk`
6. Fill in your services, hours, and photos

This is one of the most important things you can do for appearing in local Google searches.

---

## Making Updates After Launch

**To change business details** (phone number, email, areas, services, FAQs):
1. Edit `src/config/site.ts`
2. Save the file
3. Commit and push to GitHub
4. Netlify will automatically rebuild and redeploy (takes ~1 minute)

**To add photos:**
1. Place `.jpg` or `.webp` files in `public/images/`
2. Update `src/components/Gallery.astro` to reference them
3. Commit, push, Netlify redeploys

**To update copy** (text on the page):
1. Open the relevant component in `src/components/`
2. Edit the text
3. Commit, push, Netlify redeploys

---

## Troubleshooting

**Site not loading after DNS change:**
DNS changes can take up to 48 hours to propagate worldwide. This is normal — wait and try again.

**Form submissions not arriving by email:**
Check Netlify → Forms → Notifications is set up with the correct email address.
Also check your spam folder.

**Build fails on Netlify:**
Check the build log in Netlify → Deploys → click the failed deploy → read the error.
Common cause: a typo in an Astro component. Fix locally with `npm run build` to see the error.

**Need help?**
Netlify support: https://answers.netlify.com (free community support)
Astro documentation: https://docs.astro.build
