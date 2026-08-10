# Blast & Burn Gym, Durrës — verified extraction

Every fact here was measured or read from a primary source on 2026-08-10. **Nothing on the
site may assert a number that is not in this file.** Where a value is a placeholder for the
proposal, it is marked PLACEHOLDER in bold and must never be presented as theirs.

---

## Identity

| Field | Value | Source |
|---|---|---|
| Google listing name | Blast & Burn Durrës (Palestër) | Google Maps, CID 728856836562096617 |
| Website name | Blast & Burn Gym | blastburn.al `<title>` |
| Instagram name | 💪🏼 𝘽𝙡𝙖𝙨𝙩 & 𝘽𝙪𝙧𝙣 𝙂𝙮𝙢 🏋🏻 | instagram.com/blastandburn_gym |
| City | **Durrës** (not Tirana) | Google Maps, IG bio |

## Contact and location

| Field | Value | Source |
|---|---|---|
| Address (Google) | Rruga Glaukia 17, Durrës, Albania | Google Maps |
| Address (website) | Lagjia 17, pranë tregut të madh industrial, Durrës | blastburn.al |
| Address (Instagram) | Lagjia 17, ngjitur me shkollën "Ibrahim Kodra" | IG bio |
| Plus code | 8FF5+63 Durrës | Google Maps |
| Coordinates | 41.3230148, 19.4577407 | Google Maps place URL |
| Phone | +355 69 455 3486 (site writes it 0694553486) | both |
| Email | info@blastburn.al | blastburn.al |

> **Open client question 1.** Three different phrasings of one address. Which is correct for
> print? The Google one is the one that routes correctly in Maps, so the site uses it and
> shows the school as a landmark.

## Proof

| Field | Value | Source |
|---|---|---|
| Google rating | **5.0** | Google Maps |
| Google review count | **113** | Google Maps, `?cid=` view |
| Instagram followers | **9,711** | IG og:description, 2026-08-10 |
| Instagram posts | 197 | same |
| Instagram following | 1,226 | same |
| TikTok | @blastandburn_gym | tiktok.com |

Individual review **text and reviewer names could not be obtained.** Google serves the review
pane behind a sign-in wall ("You're seeing a limited view of Google Maps"), and the routes
that expose it need a paid Places API key, which is out of scope. The rating and the count are
verified and may be stated. **No review quote may be invented.** If the client wants quotes on
the site, they can paste them from their own Google Business dashboard.

## Services

From the Instagram bio, which is more complete and more current than the website:

- HIIT
- CrossFit
- Aerobi (aerobics)
- Abs
- Personal training
- **Posturë & rehabilitim** (posture and rehabilitation)

The website lists CrossFit, Aerobics, HIIT, Abs and Personal Training. **Posture and
rehabilitation appears only on Instagram**, so the site is currently failing to sell a service
they actually offer, and it is the one service with no obvious local competitor.

## Hours

| Field | Value | Source |
|---|---|---|
| Opens | 09:00 | Google Maps |
| Closes | 22:00 | Google Maps |

**Hours appear nowhere on their website.** They are on Google only.

> **Open client question 2.** Are weekend hours different? Google showed a single pattern on
> the day of capture. The site states 09:00–22:00 and flags it for confirmation.

## Pricing

**No prices are published anywhere**: not on the website, not on Instagram, not on Google.

The only price signal is a promotion on their own site, verbatim:

> "20% ULJE CMIMI PER JU QE ABONOHENI TANI"
> (20% off for those who subscribe now)

**PLACEHOLDER pricing is used in this proposal at Michael's explicit instruction**, because
this is a design proposal rather than their live site. Every placeholder number lives in
`data/pricing.json` behind a `"_placeholder": true` flag and is listed in `PROGRESS.md`.
**These numbers are invented and must be replaced with real ones before this goes anywhere
near a client-facing domain.**

---

## What is wrong with the current site, which is the pitch

1. **It is a 2017 WordPress template.** Asset paths are `wp-content/uploads/2017/06/`.
2. **The photography is stock, some of it literally Getty.** Filenames on their live server
   include `GettyImages_1214817961.0.jpg` and
   `bodybuilder-stretching-upper-body-in-gym-2021-09-04-03-07-10-utc.jpg`, which is a stock
   library naming convention. Meanwhile they have a real gym with hand-painted murals.
3. **The testimonials are Arnold Schwarzenegger and Ronnie Coleman.** They have **113 real
   five-star reviews** and are showing quotes from bodybuilders who have never been there.
   This is the single strongest argument for the rebuild.
4. **Invented skill bars:** Fitness 97%, CrossFit 92%, Personal Training 94%, Aerobic 98%,
   BodyBuilding 90%. Meaningless, unsourced, and the exact template filler that reads as fake.
5. **Language is a broken mix.** Body copy is Albanian; headlines are stray English
   ("EVERYTHING IS POSSIBLE", "STRONG MIND STRONG BODY MAKE YOUR SELF PROUD").
6. **No hours, no prices, no schedule.** The three things a gym visitor actually wants.
7. **9,711 Instagram followers are not linked from the site.** The link runs the wrong way:
   Instagram points at blastburn.al, the website ignores Instagram entirely.
8. **Posture and rehabilitation is sold on Instagram and absent from the website.**

---

## The room, which is the art direction

Twenty-two interior photographs were read from the Google listing. The space has a real and
specific character that the current website communicates none of:

- **Near-black walls and ceiling.** Measured dominant darks: `#000000`, `#101010`, `#141414`,
  `#101014`. The room is genuinely almost black.
- **Angular white LED fixtures.** Y-shaped and chevron light bars mounted on the black
  ceiling, plus LED strips framing every mirror. The defining visual of the space is **bright
  light lines cutting through a dark room.**
- **Red wall typography.** Hand-painted on the black walls: "NO PAIN - NO POWER" and
  "BEAST MODE: ON". Measured across two independent photographs: `#AE1212`, `#B41E1E`,
  `#CC2424`, up to `#EA4230` where the LEDs blow it out. Centre of the range ≈ `#C9281F`.
- **A hand-painted Goku (Ultra Instinct) mural**, electric blue and white, roughly three
  metres wide. Measured mural blues: `#182466`, `#121866`, `#1E2A6C`. For a gym this is not
  arbitrary decoration: Ultra Instinct is the transformation about surpassing your own limit.
- **OSB / chipboard columns and blonde wood flooring.** Measured warm tones: `#9C8A66`,
  `#A2906C`, `#A89672`, with `#D2A200` where warm light hits the OSB.
- Grey rubber flooring in the free-weight area, red upholstery on some benches.

### The logo

`wp-content/uploads/2022/01/logo-gym-copy.png`, a shield badge with a BB monogram. Sampled:
`#F8F8F8` (80,092 px), `#101010` (4,943 px), and one desaturated blue-grey `#607080`
(1,823 px). **The logo carries no real brand colour.** So the palette cannot honestly be
derived from the logo, and is derived from the room instead, which is documented above and
photographed.

---

## Sources

- https://blastburn.al/ , /about/ , /zbuloni-sherbimet-tona-per-ju/
- Google Maps place, CID 728856836562096617 (rating, count, hours, address, 22 photographs)
- https://www.instagram.com/blastandburn_gym/ (followers, posts, bio, services)
- https://www.tiktok.com/@blastandburn_gym

Note: `instagram.com/_blast_burn` is a **different gym in Payyanakkal, India** and was ruled
out during research. Do not link it.
