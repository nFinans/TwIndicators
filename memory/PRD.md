# nFinans Premium Algo — Landing Page

## Original Problem Statement
> "txt dosyasında eklediğim wordpress sayfasının kodlarından yola çıkarak tradingview algoritmalarımızı tanıtan ve planları satın almalarını sağlayan bir (whop ödeme idleri ile birlikte) landing page hazırlamanı istiyorum..."

A bold, cinematic single-page landing site for the 5 nFinans TradingView algorithms + an All-In-One pack with inline Whop checkout. Source content was reverse-engineered from the user-supplied WordPress (Spectra) export in `TW.txt`.

## User Choices (verbatim)
- Backend: **No** — static frontend only.
- Design direction: **design_agent — cinematic / bolder**.
- Languages: **TR + EN** language toggle.
- Whop checkout: **Inline iframe** opens below the "Seç" button (original behaviour).

## Architecture
- **Frontend**: React 19 + Tailwind + framer-motion (no backend).
- Whop checkout loader (`https://js.whop.com/static/checkout/loader.js`) injected in `public/index.html`. Auto-mounts iframes when `div[data-whop-checkout-plan-id]` enters the DOM.
- Language state via `LangContext` (TR / EN) persisted to `localStorage` (`nf_lang`).
- Single source of truth: `src/data/algorithms.js` (5 algorithms + All-In-One pack with Whop plan_ids verbatim from TW.txt) and `src/data/i18n.js`.

## Files
```
frontend/
  public/index.html          (fonts + whop loader)
  src/
    App.js, App.css, index.css, tailwind.config.js
    data/
      algorithms.js          (5 algos + All-In-One; Whop plan_ids)
      i18n.js                (TR / EN strings)
    contexts/LangContext.jsx
    components/
      Header.jsx             (sticky nav + TR/EN toggle + mobile menu)
      Hero.jsx               (cinematic display type + stats + live marquee)
      AlgorithmsIntro.jsx
      AlgorithmSection.jsx   (per-algo: sticky number + image + 4-card pricing)
      PricingCard.jsx        (Seç → inline Whop iframe via WhopCheckout)
      WhopCheckout.jsx
      AllInOnePack.jsx       (highlight pack with line-through originals)
      About.jsx, Footer.jsx
```

## What's been implemented (2026-12)
- Sticky glass header with TR/EN toggle (persisted), mobile drawer, CTA.
- Cinematic hero: Cormorant Garamond display title, gradient accent, dual-CTA, stats row, live marquee ticker.
- 5 algorithm sections (ML Quant, Right Side Strategy, Liquidity Based SR, Sentiment & Momentum, tRend Cycles) — each with editorial number, eyebrow, title, tagline, hero image w/ "Pine Script v5" pulse badge, "TradingView'de Detaylı İncele" external link, full description, and 4-tier pricing grid.
- Whop inline checkout: click "Seç" → animated height transition reveals `div[data-whop-checkout-plan-id]` with correct plan_id (Whop loader auto-mounts the iframe). Toggle to close.
- All-In-One pack: hype banner, four cards with line-through originals (62.49 / 99.98 / 333.32 / 833.30) and current prices (49.99 / 79.99 / 149.99 / 249.99) with 5-feature checklist.
- About ("Biz Kimiz?") with 3 pillar cards.
- Legal footer: company name, MERSIS, VKN, address, WhatsApp link, email, live status strip.

## Verification
- Frontend tests: **testing_agent_v3 iteration 1 — 100% pass (13/13)**.
- All 24 Whop plan_ids match `TW.txt` verbatim.
- Language toggle, mobile menu, anchor nav, pricing/discount/popular badges, footer legal info all verified by the testing agent.

## Backlog / Next Tasks
- **P1** SEO meta tags (OG image, description, Twitter card) and `react-helmet`/native head edits.
- **P1** Footer KVKK / Cookie / Terms pages or modal links.
- **P2** Add testimonials / social-proof section (mentioned by analyzer for >$100 products).
- **P2** Localise Whop loading text + close-button label fully through `i18n.js`.
- **P2** Dynamic `<html lang>` attribute sync with LangContext.
- **P3** Replace stock TradingView preview images with real algorithm screenshots.
- **P3** Add a sticky "Live discount" banner & countdown to amplify the 70% Tanışma Bonusu.

## Personas
- Mid-to-advanced Turkish & international retail traders chasing Smart Money / Order Flow tooling.
- Quant-curious investors comparing premium TradingView indicators.

## Test Credentials
N/A — no auth in this build.
