# Style Guide: HM Atelier

> Bespoke luxury automotive interior design · Dubai · Artist: Haroon Murtaza (ھارون مرتضى)
> First-ever website. Content source = the social feed (@hm_atelier__ / Facebook "HM Atelier").
> Primary language: **English** (international luxury clientele). Arabic = placeholder switcher (RTL, Operator-TODO).

---

## 1. Visual references (the level we are matching) — saved by user

The aesthetic north star is **luxury yacht editorial**, not "car workshop". Two references the user explicitly set:

### A. Vanquish Yachts — VQ40 (`vanquish-yachts.com`)  → `docs/ref-vanquish-vq40-*.png`
The structural blueprint. Take 1:1:
- **Pure black** background end to end (`#0a0a0a`-ish). The product is lit; everything else recedes.
- **Edge-to-edge product photography** is the hero of *every* section — the image carries it, text is sparse.
- **Giant, left-aligned, uppercase headlines** ("PURE VQ DNA", "ADVANCED COMPOSITE", "REFINED INTERIOR") in a heavy display face, sitting on black above each image.
- **Minimal spec strip**: a row of big numbers with tiny labels. No prose.
- **Generous black negative space** between sections — slow, confident rhythm.
- **Sticky section sub-nav** bottom-right (VQ40 / Features / Arrangement / Request info).
- **Massive script wordmark** in the footer.

### B. Azimut Yachts (`azimutyachts.com/en`)  → `docs/ref-azimut-*.png`
The refinement layer. Take:
- **Refined, airy hero**: small tracked eyebrow ("UPRISING BEAUTY") over a large, *light-weight* headline, with a slim **outline pill CTA** ("DISCOVER MORE →").
- Centered, delicate logo treatment; lots of breathing room.
- Charcoal over pure black for softer, calmer surfaces.

**Synthesis for HM Atelier:** Vanquish's black + colossal product imagery + heavy editorial headlines + spec strips + sticky sub-nav, refined by Azimut's airy hero (eyebrow → light headline → outline pill) and calm spacing. Result must feel like a couture house for hypercar interiors — closer to Hermès saddlery than to a garage.

(Internal level benchmarks also noted in brief: demo-pony-sylt — scroll-scrub technique; astonservicehamburg.de & route66-hh.de — editorial automotive heritage.)

---

## 2. Logo

Source: Instagram profile crest (`@hm_atelier__`), pulled to `.src-media/profile.jpg` (320×320 — low-res).
- A near-black **shield/crest** with a thin double-line border.
- Interlocked gothic **"HM" monogram**, "ATELIER" in spaced serif caps beneath.
- A tiny **Italian tricolore wave** (green-white-red) — a nod to Italian leather heritage. Decorative only; NOT a UI color.

**Treatment:** the crest is the original logo (non-negotiable #1: never redraw). For the dark site it is recolored to a single **cream/bone** knockout on transparent (`logo-crest-cream.png`) so it reads as a refined seal on black; the original cream-ground crest is kept for light contexts + favicon source. Nav lockup = cream crest + typeset "HM ATELIER" wordmark (the crest already contains the word "ATELIER").

> **Operator-TODO:** request the logo in high resolution + vector (SVG/transparent PNG). 320px is fine for nav/footer/favicon, not for a large hero lockup.

---

## 3. Colour palette (logo-pixel-extracted; logo has priority)

| Token | Hex | Source |
|---|---|---|
| **Brand Black** | `#161616` | Logo crest / monogram (reads as a soft near-black, not pure #000) |
| **Cream / Bone** | `#E8DAD1` | Logo background — **pixel-extracted** (corner `#E8DAD1`, strip `#E9DBD2`). Primary light tone: type + surfaces on dark. |
| **Cognac (leather)** | `#E19B66` | **Pixel-extracted** from real work (Lamborghini espresso-machine reupholstery, cognac leather). Basis of the accent. |
| **Champagne Gold (accent)** | `#C9A86A` | Derived from the cognac leather + the gold Lamborghini emblem — desaturated to a metallic champagne. **Used extremely sparingly**: hairlines, small-caps labels, focal hover, the live-status dot. Never as fill on large areas. |
| **Dark BG** | `#0A0908` | Cinematic studio black, warm-tinted (Vanquish-level). Page background. |
| **Surface** | `#16130F` | Warm charcoal panel (leather-tinted), one step up from BG. |
| **Surface 2 / line** | `#241F18` | Hairlines, card borders, dividers. |
| **Muted text** | `#A89E8F` | Warm desaturated cream for secondary copy on dark. |

**Character:** dark, luxurious, leather, flawless. Mostly black; warm cream as the contrast voice; accent (champagne gold) almost subliminal. Real material proves the palette: black leather + bone/white croco + cognac/gold hardware. We deliberately avoid the "luxury gold #FFD700" cliché — our gold is a quiet, warm, metallic champagne pulled from the actual hides.

Accent is justified by real material, not by the flag (per monochrome-logo rule: derive accent from the work, differentiate from category default).

---

## 4. Typography

Self-hosted woff2, `font-display: optional` (zero CLS — Fontsource's `swap` default causes headline reflow; we override).

- **Display / Headlines — `Fraunces`** (high-contrast "old-style" serif, optical-size aware).
  *Why:* HM's craft is couture leatherwork + hand embroidery + exotic hides — fashion-house / saddlery territory, not mechanics. A couture serif reads as bespoke tailoring and **differentiates from every other automotive site** (which all default to heavy grotesks). Set large, tight tracking; uppercase only for short editorial labels.
- **Body / UI — `Hanken Grotesk`** (clean, modern, neutral grotesk).
  *Why:* quiet, legible, contemporary — lets the serif and the imagery lead. Used for paragraphs, nav, labels, buttons, spec numbers.

Type behaviour: huge display sizes with `text-balance`; long-form copy capped ~62ch; small-caps tracked eyebrows in Hanken (letter-spacing ~0.22em).

---

## 5. Motion

Dezent + smooth; `prefers-reduced-motion` fully respected (static poster fallback).
- **Signature: a cinematic scroll-scrub hero** built from a real HM reel (Rolls-Royce Cullinan / Bugatti work) — frames extracted to WebP, scrubbed on `<canvas>` against scroll (GSAP ScrollTrigger pin + Lenis smooth scroll), à la PONY/MOO. Graceful fallback to a static poster + crest + claim.
- Section reveals: short opacity/translate, transform-only (LCP-safe). Hero headline never animates opacity.
- Showcase video loops (the other reels) play muted/inline on view; pause off-screen.

---

## 6. Voice (binding)

Sovereign, terse, exclusive. Understatement. The craft and the marques (Rolls-Royce, Bugatti, Ferrari, Lamborghini, McLaren) speak for themselves. No advertising shout.

- ✅ "bespoke interior designer" (verbatim bio) · "handcrafted in Dubai" · "exotic hides" · "millimetre precision" · "commission your interior"
- ❌ "Where leather meets passion" · "Premium Luxury Excellence" · invented prices / years / client counts / reviews · the brief's banned formulas.

EN spelling (millimetre, colour). No emojis (Lucide icons only). German dash rule does not apply (English site).

---

## 7. Brand character

Bespoke automotive interior · hypercar level · Dubai · exotic leather & hides · hand embroidery · Italian-leather heritage · international clientele.

---

## 8. Real content inventory (pulled from @hm_atelier__, `.src-media/`)

12 most-recent posts secured (11 reels + 1 eight-image carousel) — all real HM work:
- Rolls-Royce Cullinan interiors (×3 reels) · Rolls-Royce two-tone steering wheel
- Bugatti Chiron · Ferrari Purosangue · McLaren 720S (Alcantara full interior, + 8-img process carousel)
- Porsche 911 (door design) · Lamborghini Urus
- White crocodile-leather console · purple-embroidered Rolls door · Lamborghini espresso machine in cognac leather

These are the showcase + scrub source. Full mapping in `JUDGEMENT_CALLS.md`.
