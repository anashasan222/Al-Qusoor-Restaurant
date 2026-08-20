# Restaurant Website Analysis & Landing Page Build

Analysis date: 20 August 2026

---

## Part 1 — Website Analysis

### 1) McDonald's Deutschland — Restaurant Finder
URL: `https://www.mcdonalds.com/de/de-de/restaurant-suche.html`

The McDonald's Germany site is a **server-rendered AEM (Adobe Experience Manager)** site. Every feature analysed below was captured from the live page:

| # | Feature | Details |
|---|---------|---------|
| 1 | **Skip to main content** | Accessibility link at the very top for keyboard / screen-reader users. |
| 2 | **Sticky header + logo** | Persistent top bar with the McDonald's logo linking back to the homepage. |
| 3 | **Primary CTA — "Jetzt bestellen" (Order now)** | Always-visible order button in the header. |
| 4 | **Mega-menu navigation** | "Produkte" (Products) expands a full mega-menu with icon thumbnails for each category. |
| 5 | **Product categories** | Beliebte Produkte, Mission World Menu, McSmart Snacks, McMenü, Burger, McWrap, McCrispy, McNuggets & Fingerfood, Veggie & Plant-Based, Happy Meal, Beilagen & Extras, Frühstück, Getränke, Desserts, McCafé. |
| 6 | **Utility links bar** | Karriere (careers), Lieferservice (delivery), Franchise Modell. |
| 7 | **Search** | Global site search page. |
| 8 | **Restaurant finder / locator** | Dedicated "Restaurant-Suche" page with search for the nearest restaurant. |
| 9 | **Secondary nav links** | MyMcDonald's (loyalty/rewards), McCafé, Familien (family), Unsere Verantwortung (responsibility). |
| 10 | **Mobile menu** | Slide-out/full-screen mobile navigation with the same categories. |
| 11 | **External links** | Careers, delivery, and franchise open on separate domains (external link indicators). |
| 12 | **Ordering modal ("Bestellen war noch nie so einfach")** | Modal that offers "Mit der McDonald's App" (order in-restaurant / via app) and "Mit McDelivery" (partners) with a QR-code download prompt for the app. |
| 13 | **External-site warning modal** | "Sie verlassen die McDonald's-Website" disclaimer before leaving to third-party domains. |
| 14 | **Footer link columns** | Familien, Über uns, Kontakt, Karriere — each with grouped sub-links. |
| 15 | **Social media icons** | Facebook, Instagram, YouTube, X (Twitter), TikTok, LinkedIn. |
| 16 | **App store badges** | Apple App Store and Google Play download badges. |
| 17 | **Legal footer** | Datenschutz, Impressum & Nutzungsbedingungen, human/environmental rights reports, accessibility statement. |
| 18 | **Privacy settings** | "Privatsphäre Einstellungen" (cookie/consent management). |
| 19 | **Copyright line** | ©2026 McDonald's. |
| 20 | **Accessibility & responsiveness** | German `lang` attribute, responsive breakpoints, skip links. |

**Design language:** Red + gold/yellow brand colours, bold pill/rectangular order buttons, product grid with square category tiles, generous white space.

---

### 2) Burger King Deutschland — Menu
URL: `https://www.burgerking.de/menu#section-10bb36c9-69f6-4343-a69f-4bbde4ab18a0`

The Burger King Germany site is a **client-side React SPA** (React + Apollo GraphQL + Sanity CMS). Because the menu is rendered entirely in the browser via JavaScript, fetching the raw HTML returns only the application shell (`<div id="root">`, JS bundles, `noscript` fallback). The menu is loaded through a **GraphQL (Apollo) query against Sanity** at runtime, and each menu category is given a **URL anchor section id** (such as the `section-10bb36c9-...` hash you supplied) so pages can deep-link to a category.

Features identified from the app shell and the platform's known structure:

| # | Feature | Details |
|---|---------|---------|
| 1 | **React SPA architecture** | Apollo/GraphQL + Sanity CMS, server-side `index.html` shell only. |
| 2 | **Preloaded brand fonts** | BK "Flame" font family (Flame-Regular, FlameSans-Regular) preloaded for fast rendering. |
| 3 | **SEO meta tags** | `<title>`, description, Open Graph (og:type, og:image, og:title, og:description), Twitter card, keywords — injected via a data-rh (React Helmet) system. |
| 4 | **Anchored menu sections** | Each menu category is a section with a generated id (`#section-...`) enabling deep links. |
| 5 | **Menu categories** | Whopper®, burgers, chicken & fish, veggie, King Deals, sides (Beilagen), desserts, drinks (Getränke) and extras — with per-item pricing, images and dietary tags. |
| 6 | **Dynamic content** | Products/promos managed via Sanity CMS and delivered by GraphQL at runtime. |
| 7 | **LaunchDarkly** | Feature flags (events/app.launchdarkly.com) for A/B testing and gradual rollouts. |
| 8 | **Analytics bundle** | Dedicated analytics JS bundle for tracking. |
| 9 | **Browser locale handling** | `lang="de" dir="ltr"` on the shell; `notranslate` on `<body>` to prevent auto-translation. |
| 10 | **Viewport / PWA settings** | Mobile-first viewport with `viewport-fit=cover`; white theme-colour for the address bar. |

**Design language:** Orange/red flame theme, bold "Flame" display font, dark hero, product cards with photography.

---

## Part 2 — Landing Page Build

**Project location:** `alqasr-restaurant/` (app name: **Al Qosour Restaurant** / مطعم القصور)

**Tech stack:** React 19 + Vite 8 + `react-helmet-async` for SEO + plain CSS (RTL-aware).

### Sections delivered
1. **Navbar** — sticky, brand logo, smooth-scroll links, language toggle (EN/AR), "Order Now" button, mobile hamburger menu.
2. **Hero** — headline, tagline, 3 CTAs, stats, layered imagery with floating food photos.
3. **About Us** — story paragraphs, feature bullets with checkmarks, photo collage.
4. **Features** — 6 cards (Fast Delivery, Family Friendly, Rewards & Offers, Easy Online Ordering, Fresh Ingredients, Veggie Options) — inspired by the features found on both reference sites.
5. **Location** — the exact Google Maps `iframe` you provided + the address **G79X+XRC, Baghdad street, Damascus, Syria** written underneath it, plus opening hours and a "Get Directions" button.
6. **Contact Us** — 4 social media cards only: **WhatsApp, Instagram, Facebook, X (Twitter)**.
7. **Welcome Page** — the full welcome text you supplied (split into paragraphs), with food photography.
8. **Footer** — brand, quick links, address/hours, copyright.

### RTL (English / Arabic)
- Full EN ↔ AR toggle in the navbar (`🌐`).
- `document.documentElement.lang` and `dir` update on switch; CSS uses **logical properties** (`margin-inline`, `inset-inline-start`, `padding-inline`, `text-align: start`) so the layout mirrors automatically for Arabic.
- Cairo font for Arabic, Poppins for Latin.

### SEO with React Helmet
- `src/main.jsx` wraps the app in `<HelmetProvider>`.
- `src/components/Seo.jsx` injects per-page `<title>`, meta description, Open Graph, Twitter Card, canonical link, and `lang` attributes.
- Static meta tags (description, keywords, theme-color, Open Graph fallback) also in `index.html` for crawl-time.

### Your images
All images from `صور مكعم القصور/` were copied into `public/images/` with clean filenames and used across Hero, About, Features, and Welcome:

| Original | Used as |
|----------|---------|
| download (2).jpg | `chicken-bucket.jpg` (features) |
| Fried chicken bucket PNG | `fried-chicken-bucket.jpg` (hero float, features) |
| Fried Chicken American Food | `fried-chicken.jpg` (about, features) |
| Hot And Crispy French Fries | `fries-red-box.jpg` (hero float, features) |
| SaveClip 753546383 | `saveclip-753546383.jpeg` (features) |
| SaveClip 756535855 | `saveclip-756535855.jpeg` (features) |
| SaveClip 756846602 | `saveclip-756846602.jpeg` (hero main) |
| SaveClip 759574516 | `saveclip-759574516.jpeg` (about) |
| SaveClip 765116470 | `saveclip-765116470.webp` (welcome) |
| SaveClip 775442143 | `saveclip-775442143.jpeg` (welcome) |

### Run it
```bash
cd alqasr-restaurant
npm install
npm run dev        # development server
npm run build      # production build (verified passing)
npm run preview    # preview the production build
npm run lint       # oxlint (0 errors)
```

### Features mapped from the reference sites into the landing page
- "Order now" persistent CTA  → navbar + hero CTA (McDonald's / Burger King).
- Product/menu categories → Features cards grid (both sites).
- Restaurant locator → Location section with embedded Google Maps iframe (both sites).
- Social media icons → Contact social cards (McDonald's footer had FB/IG/X).
- App/loyalty emphasis → "Rewards & Offers" feature card (MyMcDonald's / BK Rewards).
- Family section → "Family Friendly" feature card (McDonald's Familien).
- Delivery emphasis → "Fast Delivery" feature card (McDelivery / Lieferservice).
- Accessibility (skip link, `lang` attribute, reduced-motion) preserved on the landing page.
