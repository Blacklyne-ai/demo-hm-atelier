# Judgement Calls & Operator-TODOs — HM Atelier

First-ever website for HM Atelier (Dubai). Content source = the public Instagram feed
**@hm_atelier__** (no prior website). Principle: **nothing invented** — no prices, years,
client counts or reviews. Gaps are flagged below, not faked.

---

## ⚠️ CRITICAL — confirm before going live

### 1. "WAEL WORKS" branding in the source footage
Several reels pulled from @hm_atelier__ show a craftsman wearing a **"WAEL WORKS"** branded
shirt. This means one of:
- HM Atelier and Wael Works are the same workshop under different names, **or**
- the content is shared with / originates from another workshop, **or**
- it is a collaboration.

**Action taken:** we deliberately did **not** show any frame with the "WAEL WORKS" logo or an
identifiable face, and we do **not** caption anyone as "Haroon Murtaza" in a photo. The About
section uses a hands-at-work craft still, not a portrait.
**Operator must confirm** the HM ↔ Wael relationship and the **rights to use this media** before
launch. Do not present third-party work as HM Atelier's own.

### 2. Media rights & marque trademarks
- All images/video are pulled from the public IG feed for this **demo**. Confirm usage rights for the live site.
- Marque names/logos (Rolls-Royce, Bugatti, Ferrari, Lamborghini, McLaren, Mercedes-Maybach, Porsche …)
  appear only as **reference works**, named cleanly, with a trademark disclaimer on `/work` and `/legal`.
  Have the client / legal counsel confirm this is acceptable (showing reference work is customary, but confirm).

---

## Operator-TODOs (supply real data → swap in)

| # | Item | Current state |
|---|------|---------------|
| 1 | **Exact address + Google Place ID** | Unknown (likely Al Quoz). Not guessed. Maps embed + real Google reviews omitted until supplied. |
| 2 | **Logo in high resolution / vector** | Only the 320px IG profile crest available. Recolored to cream/gold knockouts (not redrawn). Fine for nav/footer/favicon; request SVG for large use. |
| 3 | **Real media (photos/reels)** | Demo uses the IG feed. Request originals + rights (see Critical #1). |
| 4 | **Official contact details** | Phone `050 332 5795` came from a post (embroidery) — **tentative**, used for tel/WhatsApp. No public email yet. Confirm phone, WhatsApp, email, any website. |
| 5 | **Approved portrait of Haroon Murtaza** | None used (see Critical #1). Supply an approved photo for the About section. |
| 6 | **Dubai trade licence / firmierung** | Unknown. `/legal` marks registered details as "to be confirmed". |
| 7 | **Arabic version (RTL)** | `/ar` is a tasteful placeholder ("coming soon", noindex). Full RTL Arabic = Phase 2. |
| 8 | **Service scope** | Built from feed: wheels, seats/interiors, consoles & trim, floor mats, key cases, embroidery. Confirm; clarify if wrapping/foliation or worldwide shipping is offered. |

---

## Design / build decisions

- **Reference level:** user-set yacht editorial — Vanquish Yachts (VQ40) + Azimut Yachts
  (`docs/ref-*`). Black + giant product imagery + heavy headlines + spec strip + sticky feel,
  refined with Azimut's airy hero + outline pills. See `STYLE-GUIDE.md`.
- **Palette:** logo-pixel-extracted — near-black + cream/bone `#E8DAD1` (logo ground) + champagne
  gold `#C9A86A` (derived from real cognac leather `#E19B66` + gold marque emblem; the flag
  tricolore is decorative, not a UI colour).
- **Type:** Fraunces (couture serif display) + Hanken Grotesk (UI). Self-hosted variable woff2,
  `font-display:optional` → CLS 0.
- **Signature motion:** hero `<canvas>` frame-scrub from a real reel (Bugatti Chiron wheel, 124
  graded WebP frames, GSAP pin + scrub, Lenis smooth scroll); static-poster fallback for
  no-JS / `prefers-reduced-motion`. Second pinned sequence for the process.
- **Showcase:** `/work` tiles are poster → video loop on hover (desktop) / tap (mobile), lazy-loaded.
- **Poster accuracy:** IG cover frames often mismatched the reel's hashtag marque; every poster was
  re-picked from a frame that actually shows the named work (no wrong-marque exteriors, no shirt logo).
- **No contact form** (house rule) → WhatsApp / phone / Instagram tiles.
- **No invented facts** — spec strip is qualitative (Dubai · Bespoke · Exotic hides · Worldwide); no reviews/stats.
- **Quality:** Lighthouse desktop 100/100/100/100; mobile Performance 95, Accessibility 100, CLS 0.

## Source data pulled (kept out of git)
`.src-media/` holds the raw IG `web_profile_info` JSON + 11 reels + posters (~109 MB) and the media
pipeline (`media-pipeline.mjs`). Git-ignored; web assets live in `public/media/`.
