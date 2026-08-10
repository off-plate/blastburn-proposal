# RESUME BRIEF: Blast & Burn Gym homepage

You are resuming an unfinished build. Read this whole file, then continue from
"WHERE I LEFT OFF" at the bottom. Work autonomously until the homepage is done and deployed.

## The job, in one line

Build **TWO completely separate homepages** for Blast & Burn Gym, Durrës, at two different
URLs. Do NOT build a design system or sub-pages yet.

## THE TWO VARIANTS RULE, this is the point of the exercise

Michael: "treat those two as completely separate websites. They won't be sharing anything.
No brand, no colors, nothing. I just want to see how far you can push it and also see how
well you can listen to these things."

- **Two separate stylesheets. No shared CSS file, no shared tokens, no shared components.**
- Different palettes. Different typefaces. Different layout systems. Different section order.
  Different signature device. If a visitor saw them side by side they should not read as the
  same studio's work.
- The ONLY thing they share is the client facts (name, hours, address, the 5.0/113, the
  services) and the fact that both are heavily inspired by the references below.
- Copying large parts of the references is explicitly allowed: "maybe even copied of those
  designs that I shared with you". Take parts and recombine. One to one is not required.

Suggested split, but use judgement:
- **Variant ONE**, the ELITE / COREX direction: near-black ground, warm cream plus one hot
  accent (orange/tan), Anton or similar very heavy condensed display, giant word-as-section-
  header with photography overlapping the letterforms, marquee strip, 2-column photo class
  grid with labels bottom-left, numbered scope list.
- **Variant TWO**, the EVOLUTION / ROSTAVE direction: cool desaturated blue-greys
  (#475470 #63739A #E4E8F1 #2A2A2D), Helvetica-style neutral workhorse plus one aggressive
  techno display face, oversized wordmark bleeding across the hero, big stat numbers row,
  horizontal-scroll rail, tier row, floating UI cards over the hero photo.

Both must be fully dark with light type, per Michael's instruction.

## What Michael said, verbatim, and it overrides everything else here

- "this is fucking awful" about the previous attempt. It was scrapped. Do not resurrect it.
- "Lets build one functionaing homepage, verifie the approach and then we will build design
  system and then subpages."
- "Forgot the design system right now."
- "use similar visuals not from the Instagram do not use those that are very low quality very
  bad but use even commercial doesn't matter, but Google images ... because this website won't
  be commercially used, and if it will ever go to production, it will be changed by the actual
  photos so you don't have to care about that"
- "it has to definitely be dark mode it with like lighter fonts and it could be lighter images
  ... it's gonna be fully dark"
- "what I really liked is the fonts there are two different fonts approaches, but I want you to
  like choose one or something similar because they look really nice"
- "I believe the brand is more bluish but I'm not sure so you can have a look at their current
  website what they use the colors the most"

## References he gave (study these, they define the target)

1. https://powerlift.qodeinteractive.com/elementor/fullscreen-home/
2. https://themes.vamtam.com/?theme=f7&n=1&storefront=envato-market
3. Attached reference images, described:
   - **ELITE**: near-black ground, warm cream/tan accent, huge tight-tracked uppercase display
     headline, a big cut-out athlete photo bleeding into the hero, small floating UI cards
     (booking card, workout list) overlaid on the photo, logo strip, numbered class list
     (01 CARDIO / 02 STRENGTH / 03 YOGA / 04 COMBAT) with a photo panel beside it, facility
     grid with mixed photo sizes.
   - **ROSTAVE system**: Helvetica Neue as the workhorse plus one aggressive techno display
     face. Cool desaturated blue-greys (#475470, #63739A, #E4E8F1, #2A2A2D, #000000).
   - **EVOLUTION**: premium blue, oversized wordmark bleeding across the hero, big stat numbers
     (0% / 380+ / 24/7 / 100%), horizontal-scroll opportunity rail, pricing tier row.
   - **COREX**: black + orange #CE2D01 + off-white #FFF4ED, **Anton** for display, giant
     word-as-section-header ("COMMUNITY", "MOODBOARD") with photos overlapping the letters,
     marquee strip, 2-col photo class grid with labels bottom-left, numbered scope list.

**The shared DNA to hit:** full-bleed photography, enormous uppercase condensed/heavy display
type, very dark ground, one accent, generous scale, photos overlapping type, real editorial
grid. NOT a stack of bordered cards on a flat background, which is what the rejected attempt was.

## Verified client facts (research/01-extraction.md has the full set with sources)

- Blast & Burn Gym, Durrës, Albania. NOT Tirana.
- Google: **5.0 stars, 113 reviews** (CID 728856836562096617). Rating and count may be stated.
  Individual review TEXT could not be obtained (Google sign-in wall) — never invent a quote.
- Instagram **@blastandburn_gym, 9,711 followers**. TikTok same handle.
- Hours **09:00 to 22:00** (Google only; absent from their own site).
- Rruga Glaukia 17, Durrës, next to the Ibrahim Kodra school. Plus code 8FF5+63.
- Phone +355 69 455 3486. Email info@blastburn.al.
- Services: CrossFit, HIIT, Aerobics, Abs, Personal training, **Posture & rehabilitation**
  (the last one is sold on Instagram and missing from their website).
- **No prices published anywhere.** Michael approved invented placeholder prices for the
  proposal, but they MUST be flagged in the data file and disclosed on the page.
- Their real wall copy, quote exactly: "NO PAIN - NO POWER", "BEAST MODE: ON",
  "CHASING GREATNESS".
- Their current site is a 2017 WordPress template with Getty stock photos and fake
  testimonials from Arnold Schwarzenegger. That is the argument for the rebuild.

## Palette, PER VARIANT. They must not converge.

Evidence that exists: their current site's dominant colour is **#617687** (67 occurrences)
and their logo carries **#607080**, so a blue-grey reading is defensible. That evidence
belongs to variant TWO. Variant ONE deliberately ignores it and goes warm, because the two
are meant to be different companies' work.

- **Variant ONE:** near-black ground around #060606, off-white #FFF4ED, one hot accent
  (COREX orange #CE2D01 or a warm tan). No blue anywhere.
- **Variant TWO:** cool desaturated blue-greys, #2A2A2D ground, #475470 and #63739A,
  #E4E8F1 type. No warm accent anywhere.

Compute every contrast ratio numerically, do not eyeball. Both fully dark with light type.
The previous rejected attempt used a sampled wall red; do not reuse that palette in either.

## Type, PER VARIANT. They must not share a family.

- **Variant ONE:** a very heavy condensed uppercase display (Anton is named in the reference
  and is on Google Fonts) plus one neutral workhorse.
- **Variant TWO:** a Helvetica-style neutral workhorse plus one aggressive squared techno
  display face for the wordmark moments.

Verify every font actually loads before building on it. On the last attempt two chosen faces
did not exist on Fontshare and only a check caught it. Do not use Inter or Geist.

## Images

Use good stock/web photography of real gyms, dark and moody, matching the references. NOT the
low-quality Instagram/Google-Maps grabs from the previous attempt. Michael explicitly approved
this because the site is a proposal and photos get swapped in production. Download and convert
to webp. There are old raw photos in raw-photos/ (gitignored) if any are actually good, but
most are dim phone shots and were part of what he rejected.

## Hard rules

- No em dashes anywhere in visible copy.
- Never use the "not X, but Y" construction.
- Never state a number the client did not publish. Placeholder data must be flagged.
- No title-plus-subtitle pattern; no eyebrow/kicker above a heading.
- Read `.claude/design/DESIGN.md` in the Jarvis repo for the full forbidden list.
- Mobile must be verified in WebKit, not Chromium (`npx playwright install webkit` already done).
- The page body must never scroll sideways; wide content scrolls inside its own container.

## Repo and deploy

- Folder: `/Users/michaelflorianrvltdigital/Claude Helpers/blastburn-proposal`
- Repo: `off-plate/blastburn-proposal`, GitHub Pages from `main` branch `/docs`
- Live: https://off-plate.github.io/blastburn-proposal/
- **Variant ONE at `/one/`, variant TWO at `/two/`.** Each gets its OWN stylesheet
  (`docs/one/app.css` and `docs/two/app.css`), its own fonts, its own build. Nothing shared.
- `docs/index.html` is a plain two-link chooser, deliberately unstyled and minimal, so it
  cannot bias the comparison.
- Pages are served at a SUBPATH, so any build must rewrite root-absolute hrefs/srcs to
  `/blastburn-proposal/`. The previous build.mjs did this with a `rebase()` pass and a
  `BASE` env var; that approach worked and is worth repeating.
- Verify a deploy by comparing the live `app.css?v=` hash against the repo's docs/index.html.

## WHERE I LEFT OFF  (updated 2026-08-10, 23:5x, end of the interactive session)

### DONE, do not redo

- The rejected first attempt is deleted. Only `research/01-extraction.md`, `data/site.json`
  and `data/photos.json` survive from it.
- **Stock photography sourced.** 32 dark, moody gym photos from Pexels are in `src-img/`
  (gitignored). Openverse now needs an API key and Unsplash DOM scraping returns nothing;
  the route that worked was Playwright with a `response` listener capturing
  `images.pexels.com/photos/...` while scrolling a Pexels search page. Reuse that for more.
- **VARIANT ONE IS BUILT AND LIVE** at https://off-plate.github.io/blastburn-proposal/one/
  - Own stylesheet `docs/one/app.css`, own fonts `docs/one/fonts/` (Anton 400 +
    Familjen Grotesk 400/500/700, self-hosted from Fontshare, 115 KB total).
  - Palette: ground #060606, off-white #FFF4ED, hot orange #CE2D01 with #F2521F as the
    lifted cut for small text. No blue anywhere, deliberately.
  - Sections built: full-bleed hero with floating stats card, orange marquee of their real
    wall copy, numbered 01-06 class list with a sticky photo that swaps on hover, giant
    BEAST MODE word with three photos overlapping it, stats row, photo grid with labels
    bottom-left, four-tier price row with a visible placeholder disclosure, photo CTA band,
    four-column footer.
  - Verified: desktop 6668px no failed requests, mobile 7369px in WebKit with **0px**
    horizontal overflow.
  - `docs/index.html` is the plain two-link chooser.

### NEXT, in order

1. **Look at `/tmp/v1/d*.png` and `m*.png` if they still exist, or re-shoot variant one.**
   Known issue seen but NOT yet fixed: there is a large empty black gap between the end of
   the class list and the BEAST MODE word on desktop, and the class-list sticky photo runs
   past its section. Tighten that vertical rhythm.
2. Check the mobile slices for variant one properly. Only the overflow number was checked,
   not how it actually looks.
3. **Build VARIANT TWO at `/two/`** from scratch: cool blue-greys (#2A2A2D ground, #475470,
   #63739A, #E4E8F1 type), a Helvetica-style workhorse plus one squared techno display face,
   oversized wordmark bleeding across the hero, big stat number row, horizontal-scroll rail,
   floating UI cards over the hero photo, tier row. It must share NO CSS, NO font and NO
   layout idea with variant one.
4. Update `docs/index.html` so direction two is a live link rather than "not built yet".
5. Deploy, wait for Pages (it takes 30 to 60 seconds), verify both return 200 and that
   `one/app.css` and `two/app.css` both load.
6. Replace this section with a short status naming both URLs.

### Notes that will save time

- GitHub Pages serves at the subpath `/blastburn-proposal/`. Variant one dodges this by
  using RELATIVE paths only (`app.css`, `img/x.webp`). Keep doing that in variant two.
  Do not use root-absolute paths.
- Serve locally with `python3 -m http.server` from inside `docs/`, then hit `/one/`.
- Michael rejected the previous attempt as "fucking awful". The thing that was wrong was
  bordered cards on a flat background and dead empty rails. Full-bleed photography, huge
  type and generous scale are what he responded to.
