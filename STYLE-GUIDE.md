# Style Guide: HM Atelier

> Bespoke luxury automotive interior design · Dubai · Artist: Haroon Murtaza (ھارون مرتضى)
> First-ever website. Content source = the social feed (@hm_atelier__ / Facebook "HM Atelier").
> Primary language: **English** (international luxury clientele). Arabic = placeholder switcher (RTL, Operator-TODO).

> **Direction (v2, per client):** LIGHT, very delicate, super-premium *without ever writing "premium"*.
> Quiet confidence. Reference grade = **MOO Immobilien** (`demo-moo-immobilien.pages.dev`). The earlier
> dark cinematic version was rejected as too heavy. This is the canonical direction.

---

## 1. Reference grade — MOO Immobilien (+ Azimut)

- **MOO Immobilien** is the bar: warm porcelain/greige base, Fraunces at *light* weight for large delicate
  serif headlines, Manrope for fine UI, a champagne/brass accent used barely-there, floating glass nav pill,
  1px hairlines, pill controls, and *air* — lots of whitespace. Premium is felt, never stated.
- **Azimut Yachts** (`docs/ref-azimut-*`) — airy refined hero, tracked eyebrow → light headline → outline pill.
- (Vanquish — earlier dark ref — retired with the dark direction.)

---

## 2. Logo

Original Instagram crest (`.src-media/profile.jpg`, 320px). On the light site it is used in its **original
near-black** form (dark crest on bone) — `logo-crest-original.png`. Cream/gold knockouts remain for dark contexts
(e.g. the About seal over a photo uses the gold variant). Never redrawn; recolored only.
> **Operator-TODO:** high-resolution vector logo.

---

## 3. Colour palette (light · warm · delicate)

| Token | Hex | Use |
|---|---|---|
| **Bone** | `#EEE7DD` | Page base — warm porcelain (anchored to the logo cream `#E8DAD1`) |
| **Surface** | `#F6F1E9` | Raised cards / footer |
| **Paper** | `#FFFFFF` | Highest surface |
| **Ink** | `#1A1714` | Headlines / primary text (crest near-black, warm) |
| **Graphite** | `#4A433B` | Body text |
| **Stone** | `#645B50` | Secondary text (AA-tuned on bone) |
| **Line** | `#DCD3C5` | 1px hairlines |
| **Brass** | `#A8875A` | Champagne accent — **fills, hairlines, dots only** |
| **Brass-deep** | `#6E5836` | Eyebrows, links, small accent text (AA on bone) |

Champagne is **barely there** — eyebrows, a hairline, a dot, a hover. The warmth comes from the bone + the
real leather imagery, not from colour. ⚠️ Tailwind auto-generates a `text-brass` utility from the `brass`
colour (light) that shadows custom rules — use the `text-brass-deep` utility for accent *text* (contrast).

One or two **dark image bands** (`--rgb-noir #181512`) give rhythm — full-bleed craft stills with light text.
The page itself stays light.

---

## 4. Typography (light + delicate)

- **Display — `Fraunces`** at **weight 380–420** (light, high-contrast couture serif), `font-optical-sizing:auto`,
  tracking ~ -0.018em. Italic used for a single accent word. Delicate, never bold.
- **UI / body — `Manrope`** (variable, 200–800), weight 400 body / 500–600 labels. Clean, quiet.
- Eyebrows: Manrope 500, 0.7rem, letter-spacing **0.3em**, brass-deep, with a fine 1px rule.
- Self-hosted variable woff2, `font-display:optional` → CLS 0.

---

## 5. Motion (restrained)

Delicate, not cinematic. Soft fade/translate reveals (IntersectionObserver), gentle parallax on full-bleed
stills, smooth Lenis scroll, magnetic CTA on fine pointers. `prefers-reduced-motion` fully respected.
No heavy pinned scrub (the dark-era hero canvas-scrub was removed as too heavy for this direction).

---

## 6. Video — portrait, embraced (not fought)

All source reels are 9:16 portrait. **They live in portrait frames**, never stretched fullscreen:
- **Hero**: a tall hairline-framed film panel beside the headline; autoplays a reel on desktop (poster on mobile → LCP).
- **Work**: a light gallery of portrait tiles; poster → reel on hover (desktop) / tap (mobile), lazy-loaded.
A **landscape** Higgsfield-generated atmosphere clip is proposed for a future wide cinematic band (the one thing
portrait reels can't supply) — see JUDGEMENT_CALLS.md.

---

## 7. Voice (binding)

Sovereign, terse, exclusive. Understatement. The craft and the marques speak for themselves.
- ✅ "bespoke interior designer" (verbatim bio) · "handcrafted in Dubai" · "exotic hides" · "made once, for one car"
- ❌ the word "premium"/"luxury excellence" as a slogan · "Where leather meets passion" · invented prices/years/reviews.

---

## 8. Real content inventory (`.src-media/`, from @hm_atelier__)

11 reels + an 8-image carousel — Rolls-Royce Cullinan, Bugatti Chiron wheel, Ferrari Purosangue, McLaren 720S
Alcantara, Porsche 911 door, Lamborghini Urus, Mercedes-Maybach crocodile wheel, cognac-leather espresso machine,
embroidery. Posters re-picked to match the named work; no third-party-branded frames (see JUDGEMENT_CALLS.md).
