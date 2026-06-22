// ── HM Atelier — master data. EVERYTHING here is sourced from the real
//    @hm_atelier__ feed or the brief. Nothing invented (no prices, years,
//    client counts, reviews). Gaps are Operator-TODOs (see JUDGEMENT_CALLS.md).
export const site = {
  name: "HM Atelier",
  short: "HM Atelier",
  legal: "HM Atelier", // Operator-TODO: confirm trade name / Dubai trade licence
  founder: "Haroon Murtaza",
  founderRole: "Luxury, bespoke interior designer", // verbatim Instagram bio
  tagline: "Bespoke luxury automotive interiors",
  metaDescription:
    "HM Atelier — bespoke luxury automotive interiors, handcrafted in Dubai. Steering wheels, seats, consoles and key cases in fine leather and exotic hides for Rolls-Royce, Bugatti, Ferrari, Lamborghini and McLaren. By Haroon Murtaza.",

  // Contact — Instagram & Threads verified. Phone appeared in a post (embroidery);
  // treat as tentative until confirmed. UAE dialling.
  phone: "050 332 5795",
  phoneHref: "tel:+971503325795",
  whatsappHref: "https://wa.me/971503325795",
  email: "", // Operator-TODO: official enquiry email not yet published
  instagramHref: "https://www.instagram.com/hm_atelier__/",
  facebookHref: "https://www.facebook.com/search/top?q=HM%20Atelier", // Operator-TODO: exact page URL
  threadsHref: "https://www.threads.net/@hm_atelier__",
  instagramHandle: "@hm_atelier__",
  followers: "2,846",

  city: "Dubai",
  country: "AE",
  countryName: "United Arab Emirates",
  // No exact street address yet (likely Al Quoz). Do NOT guess. Maps omitted until confirmed.
  addressLine: "Dubai · United Arab Emirates",
  addressNote: "Atelier address on request — by appointment",

  url: "https://demo-hm-atelier.pages.dev",

  // Languages: English primary; Arabic = placeholder switcher (RTL, Phase 2).
  languages: { primary: "en", secondary: "ar" },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Craft", href: "/craft" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ── Hero (verbatim brief copy, sovereign + terse) ──
export const heroLine = {
  kicker: "Bespoke automotive interiors · Dubai",
  titleA: "Bespoke interiors for the",
  titleB: "world's finest cars.",
  sub: "Handcrafted in Dubai — fine leather, exotic hides, millimetre precision. Each interior commissioned, never repeated.",
} as const;

// ── Spec strip (Vanquish-style; qualitative facts only, no invented numbers) ──
export const specs = [
  { v: "Dubai", k: "The atelier" },
  { v: "Bespoke", k: "Made to commission" },
  { v: "Exotic hides", k: "Crocodile · Python · Alcantara" },
  { v: "Worldwide", k: "Collectors & showrooms" },
] as const;

// ── Work / Portfolio (real pieces from the feed; media in /public/media/work) ──
// Brand names are reference works, named cleanly (markenrecht: Operator-TODO).
export const work = [
  { slug: "bugatti-chiron",       marque: "Bugatti",        part: "Chiron · Steering wheel",      note: "Black leather, red contrast stitch, illuminated emblem." },
  { slug: "rolls-royce-cullinan", marque: "Rolls-Royce",    part: "Cullinan · Interior",          note: "Bespoke interior panels in the marque's signature calm." },
  { slug: "crocodile-console",    marque: "Exotic hide",    part: "Crocodile console & wheel",    note: "Hand-matched crocodile, set into console and wheel." },
  { slug: "ferrari-purosangue",   marque: "Ferrari",        part: "Purosangue · Seat embroidery", note: "Headrest crest, embroidered into the seat." },
  { slug: "mclaren-720s",         marque: "McLaren",        part: "720S · Alcantara interior",    note: "Full interior re-skinned in Alcantara." },
  { slug: "porsche-911",          marque: "Porsche",        part: "911 · Door design",            note: "Door panel rebuilt with embroidered leatherwork." },
  { slug: "lamborghini-urus",     marque: "Lamborghini",    part: "Urus · Steering wheel",        note: "Wheel rebuilt in leather, paddle shifters preserved." },
  { slug: "rolls-royce-wheel",    marque: "Rolls-Royce",    part: "Steering wheel",               note: "Re-wrapped wheel, marque roundel preserved." },
  { slug: "lamborghini-espresso", marque: "Beyond the car", part: "Espresso machine · Cognac leather", note: "The atelier's hand, applied past the cabin." },
] as const;

// ── Services (belegt aus dem Feed) ──
export const services = [
  { icon: "Disc3",        title: "Steering wheels",       text: "Re-wrapped and rebuilt in leather, crocodile or python — marque hubs preserved." },
  { icon: "Armchair",     title: "Seats & full interiors", text: "Single seats to complete cabins, re-trimmed to your specification." },
  { icon: "PanelTop",     title: "Consoles & door trim",  text: "Centre consoles, door cards and trim, made to match the whole." },
  { icon: "Layers",       title: "Floor mats",            text: "Bespoke mats in fine leather and exotic hides." },
  { icon: "KeyRound",     title: "Key cases",             text: "Python and crocodile key cases for Maybach, Mercedes and more." },
  { icon: "Sparkles",     title: "Embroidery",            text: "Hand and machine embroidery for upholstery and headlining." },
] as const;

// ── Craft / Materials (close-up stills in /public/media/craft) ──
export const materials = [
  { img: "crocodile-hide",  title: "Exotic hides",     text: "Crocodile and python, hand-selected and matched across every panel." },
  { img: "leather-cutting", title: "Fine leather",     text: "Full-grain and Alcantara, cut and skived by hand to the millimetre." },
  { img: "perforation",     title: "Perforation",      text: "Laser-clean perforation and diamond patterns, set into seat and door." },
  { img: "embroidery",      title: "Embroidery",       text: "Bespoke monograms and motifs, stitched into upholstery and headlining." },
] as const;

// ── Marques worked on (reference works, from the feed) ──
export const marques = [
  "Rolls-Royce", "Bugatti", "Ferrari", "Lamborghini", "McLaren",
  "Maybach", "Bentley", "Mercedes-Benz", "Porsche",
] as const;

// ── About / Haroon (only the verbatim bio + the craft; nothing invented) ──
export const about = {
  name: "Haroon Murtaza",
  role: "Luxury, bespoke interior designer", // verbatim bio
  paras: [
    "Haroon Murtaza is the hand behind HM Atelier — a Dubai workshop given over entirely to one thing: the inside of extraordinary cars.",
    "Every commission begins with the material. Fine leather, crocodile, python, Alcantara — selected, cut and stitched by hand, then set into steering wheels, seats, consoles and key cases for the world's most exclusive marques.",
    "Nothing is catalogued and nothing is repeated. Each interior is made once, for one car, to a single specification.",
  ],
} as const;

// ── Process (the craft, told as beats; reuses the pinned scroll sequence) ──
export const process = [
  { num: "01", phase: "The brief",    title: "Your specification", text: "We start from the car and the client — the marque, the material, the detail you want and no one else will have." },
  { num: "02", phase: "The material", title: "Hide & leather",     text: "Hides are hand-selected and matched; leather is cut and skived by hand to the millimetre." },
  { num: "03", phase: "The hand",     title: "Stitch & form",      text: "Panels are formed, perforated, embroidered and stitched — wheels, seats, consoles, trim." },
  { num: "04", phase: "The fit",      title: "Set into the car",   text: "Every piece is fitted to its car so the finish reads as though it left the factory that way." },
] as const;

// ── Commission channels (no contact form per house rule — direct lines) ──
export const channels = [
  { kind: "whatsapp", icon: "MessageCircle", label: "WhatsApp",  value: "Message the atelier", href: "https://wa.me/971503325795" },
  { kind: "phone",    icon: "Phone",         label: "Telephone", value: "050 332 5795",        href: "tel:+971503325795" },
  { kind: "instagram",icon: "Instagram",     label: "Instagram", value: "@hm_atelier__",       href: "https://www.instagram.com/hm_atelier__/" },
] as const;
