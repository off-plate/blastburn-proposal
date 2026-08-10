#!/usr/bin/env node
/* Blast & Burn Gym, Durrës. Static build, zero dependencies.
   Pages compose components from docs/css/app.css. A page never owns a component:
   if something new is needed it goes into /system/ first.
   English is the primary tree at /, Albanian at /sq/. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const D = join(ROOT, 'docs');
const site = JSON.parse(readFileSync(join(ROOT, 'data/site.json'), 'utf8'));
const pricing = JSON.parse(readFileSync(join(ROOT, 'data/pricing.json'), 'utf8'));
const { programs } = JSON.parse(readFileSync(join(ROOT, 'data/programs.json'), 'utf8'));

const hash = f => createHash('sha1').update(readFileSync(join(D, f))).digest('hex').slice(0, 8);
const CSS = hash('css/app.css');
const JS = hash('js/app.js');
const money = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/* ---------------- copy ---------------- */
const T = {
  en: {
    lang: 'en', other: 'sq', otherLabel: 'Shqip', dir: '',
    nav: { programs: 'Programs', membership: 'Membership', gym: 'The gym', contact: 'Contact' },
    cta: { join: 'Become a member', call: 'Call the gym', dir: 'Get directions', insta: 'Instagram', see: 'See the programs', book: 'Book a session' },
    home: {
      title: 'Blast & Burn Gym, Durrës. CrossFit, HIIT and personal training',
      desc: 'A gym in Durrës, open 09:00 to 22:00. CrossFit, HIIT, aerobics, abs, personal training, posture and rehabilitation. Rated 5.0 by 113 people on Google.',
      h1: 'No pain.<br>No power.',
      lede: 'It is painted on the wall inside, so it may as well be the first thing you read. Blast & Burn is a gym in Durrës, open from nine in the morning until ten at night.',
      proofH: 'What people actually say',
      proofLede: 'Two numbers, both checked on 10 August 2026, neither of them ours to invent.',
      progH: 'Six ways to train',
      progLede: 'Group classes, one to one work, and the rehabilitation side that their Instagram sells and their old website never mentioned.',
      roomH: 'A room with an opinion',
      roomLede: 'Black walls, branching light bars on the ceiling, a hand painted Goku across three metres of it, and NO PAIN - NO POWER above the mirrors. Most gyms are a grey box. This one is not.',
      roomCta: 'Look inside',
      weekH: 'This week',
      weekLede: 'Classes run morning and evening. Confirm the current week with the gym before you travel for one.',
      hoursH: 'Open 09:00 to 22:00',
      hoursLede: 'Rruga Glaukia 17, next to the Ibrahim Kodra school. Call ahead if it is your first session and someone will meet you at the door.',
    },
    programs: { h1: 'Programs', lede: 'Six ways to train at Blast & Burn. Group classes are included in every membership. Personal training and rehabilitation are booked one to one.', crumb: 'Programs' },
    membership: { h1: 'Membership', lede: 'One price, full access, every group class included. Personal training is booked by the session.', crumb: 'Membership',
      promoH: 'Their offer, in their words', promoNote: 'Currently advertised by the gym', chooseH: 'Choose a plan', ask: 'Ask about a plan' },
    gym: { h1: 'The gym', lede: 'Two floors of it in Durrës: free weights, machines, a class studio, and a room that looks like somebody cared what it looked like.', crumb: 'The gym',
      wallH: 'The writing on the wall', wallLede: 'Three lines are painted inside. They are the gym talking, so the website uses them rather than inventing a slogan.',
      coachH: 'The coaches', coachLede: 'Nobody is named online yet, so nobody is named here. The gym fills these in.' },
    contact: { h1: 'Contact', lede: 'Call, message on Instagram, or turn up. Someone is on the floor from nine until ten.', crumb: 'Contact',
      formH: 'Send a message', formLede: 'Tell us what you want to train and when suits you.',
      name: 'Name', phone: 'Phone', prog: 'Programme', msg: 'Anything we should know', send: 'Send', findH: 'Find us' },
    foot: { pages: 'Pages', find: 'Where to find us', contact: 'Contact', follow: 'Follow',
      rights: 'Blast & Burn Gym, Durrës, Albania.', demo: 'Unsolicited design proposal by Off-Plate. Not the live blastburn.al.' },
    hoursRows: [['Monday to Friday', '09:00 to 22:00'], ['Saturday and Sunday', 'To confirm']],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    placeholder: 'Placeholder for the proposal. Blast & Burn publishes no prices, so these numbers are invented and must be replaced with their real rates.',
    placeholderTT: 'Placeholder timetable. Blast & Burn publishes no schedule, so this week is invented and must be replaced with the real one.',
  },
  sq: {
    lang: 'sq', other: 'en', otherLabel: 'English', dir: 'sq/',
    nav: { programs: 'Programet', membership: 'Anëtarësimi', gym: 'Palestra', contact: 'Kontakt' },
    cta: { join: 'Bëhu anëtar', call: 'Telefono palestrën', dir: 'Merr drejtimet', insta: 'Instagram', see: 'Shiko programet', book: 'Rezervo një seancë' },
    home: {
      title: 'Blast & Burn Gym, Durrës. CrossFit, HIIT dhe trajnim personal',
      desc: 'Palestër në Durrës, e hapur 09:00 deri 22:00. CrossFit, HIIT, aerobi, abs, trajnim personal, posturë dhe rehabilitim. Vlerësuar 5.0 nga 113 persona në Google.',
      h1: 'Pa dhimbje.<br>Pa fuqi.',
      lede: 'Është pikturuar në mur brenda, prandaj le të jetë gjëja e parë që lexoni. Blast & Burn është një palestër në Durrës, e hapur nga ora nëntë e mëngjesit deri në dhjetë të mbrëmjes.',
      proofH: 'Çfarë thonë vërtet njerëzit',
      proofLede: 'Dy shifra, të dyja të verifikuara më 10 gusht 2026, asnjëra e shpikur prej nesh.',
      progH: 'Gjashtë mënyra për t’u stërvitur',
      progLede: 'Klasa në grup, punë një me një, dhe ana e rehabilitimit që Instagrami i tyre e ofron dhe faqja e vjetër nuk e përmendte.',
      roomH: 'Një sallë me karakter',
      roomLede: 'Mure të zeza, drita që degëzohen në tavan, një Goku i pikturuar me dorë përgjatë tre metrave, dhe NO PAIN - NO POWER mbi pasqyra. Shumica e palestrave janë kuti gri. Kjo nuk është.',
      roomCta: 'Shiko brenda',
      weekH: 'Kjo javë',
      weekLede: 'Klasat zhvillohen në mëngjes dhe në mbrëmje. Konfirmoni javën aktuale me palestrën përpara se të udhëtoni për një klasë.',
      hoursH: 'Hapur 09:00 deri 22:00',
      hoursLede: 'Rruga Glaukia 17, ngjitur me shkollën Ibrahim Kodra. Telefononi paraprakisht nëse është seanca juaj e parë dhe dikush ju pret te dera.',
    },
    programs: { h1: 'Programet', lede: 'Gjashtë mënyra për t’u stërvitur në Blast & Burn. Klasat në grup përfshihen në çdo anëtarësim. Trajnimi personal dhe rehabilitimi rezervohen një me një.', crumb: 'Programet' },
    membership: { h1: 'Anëtarësimi', lede: 'Një çmim, akses i plotë, të gjitha klasat në grup të përfshira. Trajnimi personal rezervohet me seancë.', crumb: 'Anëtarësimi',
      promoH: 'Oferta e tyre, me fjalët e tyre', promoNote: 'Aktualisht e reklamuar nga palestra', chooseH: 'Zgjidhni një plan', ask: 'Pyet për një plan' },
    gym: { h1: 'Palestra', lede: 'Në Durrës: pesha të lira, makineri, një studio klasash, dhe një sallë që duket sikur dikujt i ka interesuar si duket.', crumb: 'Palestra',
      wallH: 'Shkrimi në mur', wallLede: 'Tre rreshta janë pikturuar brenda. Është palestra që flet, prandaj faqja i përdor ato në vend që të shpikë një slogan.',
      coachH: 'Trajnerët', coachLede: 'Askush nuk është i emëruar online, prandaj askush nuk emërtohet këtu. Palestra i plotëson këto.' },
    contact: { h1: 'Kontakt', lede: 'Telefononi, shkruani në Instagram, ose ejani. Dikush është në sallë nga nënta deri në dhjetë.', crumb: 'Kontakt',
      formH: 'Dërgo një mesazh', formLede: 'Na tregoni çfarë doni të stërvitni dhe kur ju përshtatet.',
      name: 'Emri', phone: 'Telefoni', prog: 'Programi', msg: 'Diçka që duhet të dimë', send: 'Dërgo', findH: 'Na gjeni' },
    foot: { pages: 'Faqet', find: 'Ku të na gjeni', contact: 'Kontakt', follow: 'Na ndiqni',
      rights: 'Blast & Burn Gym, Durrës, Shqipëri.', demo: 'Propozim dizajni i pakërkuar nga Off-Plate. Nuk është blastburn.al aktual.' },
    hoursRows: [['E hënë deri e premte', '09:00 deri 22:00'], ['E shtunë dhe e diel', 'Për t’u konfirmuar']],
    days: ['Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht', 'Die'],
    placeholder: 'Vendmbajtëse për propozimin. Blast & Burn nuk publikon çmime, prandaj këto shifra janë të shpikura dhe duhet të zëvendësohen me tarifat e tyre reale.',
    placeholderTT: 'Orar vendmbajtës. Blast & Burn nuk publikon orar, prandaj kjo javë është e shpikur dhe duhet zëvendësuar me atë reale.',
  },
};

/* placeholder week, flagged everywhere it renders */
const WEEK = [
  ['09:00', 'Aerobics', 'HIIT', 'Aerobics', 'HIIT', 'Aerobics', 'CrossFit', 'Rest'],
  ['18:30', 'CrossFit', 'Abs and core', 'CrossFit', 'Abs and core', 'CrossFit', 'HIIT', 'Rest'],
  ['20:00', 'HIIT', 'CrossFit', 'Aerobics', 'CrossFit', 'HIIT', 'Rest', 'Rest'],
];
const CLS_SQ = { 'Aerobics': 'Aerobi', 'HIIT': 'HIIT', 'CrossFit': 'CrossFit', 'Abs and core': 'Abs dhe core', 'Rest': 'Pushim' };

/* ---------------- components ---------------- */
/* the honeycomb, generated from the real tiling. HEX_BAND is the full-width
   band; HEX_MARK is three cells of the same grid for a nav or footer lockup,
   so the small mark and the large one are the same fixture. */
const HEX_BAND = 'M116.0 60.0 L93.0 99.8 L47.0 99.8 L24.0 60.0 L47.0 20.2 L93.0 20.2 Z M185.0 99.8 L162.0 139.7 L116.0 139.7 L93.0 99.8 L116.0 60.0 L162.0 60.0 Z M254.0 60.0 L231.0 99.8 L185.0 99.8 L162.0 60.0 L185.0 20.2 L231.0 20.2 Z M323.0 99.8 L300.0 139.7 L254.0 139.7 L231.0 99.8 L254.0 60.0 L300.0 60.0 Z M392.0 60.0 L369.0 99.8 L323.0 99.8 L300.0 60.0 L323.0 20.2 L369.0 20.2 Z M461.0 99.8 L438.0 139.7 L392.0 139.7 L369.0 99.8 L392.0 60.0 L438.0 60.0 Z M530.0 60.0 L507.0 99.8 L461.0 99.8 L438.0 60.0 L461.0 20.2 L507.0 20.2 Z M599.0 99.8 L576.0 139.7 L530.0 139.7 L507.0 99.8 L530.0 60.0 L576.0 60.0 Z M599.0 99.8 L645.0 99.8';
const HEX_MARK = 'M116.0 60.0 L93.0 99.8 L47.0 99.8 L24.0 60.0 L47.0 20.2 L93.0 20.2 Z M185.0 99.8 L162.0 139.7 L116.0 139.7 L93.0 99.8 L116.0 60.0 L162.0 60.0 Z';
const LED = (cls = '') => `<svg class="led ${cls}" viewBox="0 0 659 165" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="led__tube" d="${HEX_BAND}"/></svg>`;
const LEDMARK = () => `<svg class="led led--mark" viewBox="14 10 181 140" aria-hidden="true"><path class="led__tube" d="${HEX_MARK}"/></svg>`;

const head = (t, title, desc, canon) => `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="robots" content="noindex, nofollow">
<link rel="preload" href="/fonts/technor-900.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/author-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/app.css?v=${CSS}">
<meta property="og:title" content="${title}"><meta property="og:description" content="${desc}">
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'ExerciseGym', name: site.nameFull,
  address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city, addressCountry: 'AL' },
  telephone: site.phone, email: site.email, url: 'https://blastburn.al/',
  geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
  openingHours: 'Mo-Su 09:00-22:00',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: site.proof.rating, reviewCount: site.proof.reviews },
  sameAs: [site.instagramUrl, site.tiktokUrl],
})}</script>
</head>
<body data-page="${canon}">`;

const nav = (t, active) => {
  const b = t.dir ? '/sq/' : '/';
  return `<nav class="nav">
  <a class="nav__brand" href="${b}" aria-label="${site.nameFull}">${LEDMARK()}</a>
  <div class="nav__links">
    <a href="${b}programs/"${active === 'programs' ? ' aria-current="page"' : ''}>${t.nav.programs}</a>
    <a href="${b}membership/"${active === 'membership' ? ' aria-current="page"' : ''}>${t.nav.membership}</a>
    <a href="${b}gym/"${active === 'gym' ? ' aria-current="page"' : ''}>${t.nav.gym}</a>
    <a href="${b}contact/"${active === 'contact' ? ' aria-current="page"' : ''}>${t.nav.contact}</a>
  </div>
  <div class="nav__tools">
    <a class="btn btn--ghost btn--sm" href="/${t.other === 'en' ? '' : 'sq/'}" hreflang="${t.other}">${t.otherLabel}</a>
    <a class="btn btn--primary btn--sm" href="tel:${site.tel}">${t.cta.call}</a>
    <button class="nav__burger" id="burger" aria-expanded="false" aria-controls="sheet" aria-label="Menu"><span></span><span></span></button>
  </div>
</nav>
<div class="nav__sheet" id="sheet" hidden>
  <a href="${b}programs/">${t.nav.programs}</a>
  <a href="${b}membership/">${t.nav.membership}</a>
  <a href="${b}gym/">${t.nav.gym}</a>
  <a href="${b}contact/">${t.nav.contact}</a>
  <a href="${site.instagramUrl}" target="_blank" rel="noopener">${t.cta.insta}</a>
</div>`;
};

const phero = (t, h1, lede, crumb, actions) => `<header class="phero"><div class="shell"><div class="phero__grid">
  <div>
    <p class="phero__crumb"><a href="/${t.dir}">${t.lang === 'sq' ? 'Kreu' : 'Home'}</a><span>/</span><span>${crumb}</span></p>
    <h1>${h1}</h1>
  </div>
  <div class="phero__side">
    <p class="t-lede">${lede}</p>
    ${actions ? `<div class="phero__act">${actions}</div>` : ''}
  </div>
</div></div></header>
<div class="shell">${LED()}</div>`;

const hoursBlock = t => `<div class="hours">
  ${t.hoursRows.map(([k, v], i) => `<div class="hours__row${i === 0 ? ' hours__row--now' : ''}"><span>${k}</span><b>${v}</b></div>`).join('')}
</div>`;

const placeBlock = t => `<div class="place">
  <p class="place__addr">${site.address}</p>
  <p class="place__note">${site.addressLandmark[t.lang]}</p>
  <p class="place__note">${site.plusCode}</p>
</div>`;

const callbar = (t, ghostOnDark = true) => `<div class="callbar">
  <a class="btn btn--primary btn--sm" href="tel:${site.tel}">${t.cta.call}</a>
  <a class="btn btn--ghost btn--sm" href="${site.instagramUrl}" target="_blank" rel="noopener">${t.cta.insta}</a>
  <a class="btn btn--ghost btn--sm" href="https://maps.google.com/?cid=${site.mapsCid}" target="_blank" rel="noopener">${t.cta.dir}</a>
</div>`;

const osbBand = t => `<section class="band band--osb">
  <div class="shell">
    <div class="osbgrid">
      <div>
        <h2 style="margin:0 0 12px">${t.home.hoursH}</h2>
        <p class="t-lede" style="max-width:32ch">${t.home.hoursLede}</p>
      </div>
      <div>${hoursBlock(t)}</div>
      <div>${placeBlock(t)}</div>
      <div>${callbar(t)}</div>
    </div>
  </div>
</section>`;

const timetable = t => `<div class="tt-wrap"><table class="tt">
  <tr><th>${t.lang === 'sq' ? 'Ora' : 'Time'}</th>${t.days.map(d => `<th>${d}</th>`).join('')}</tr>
  ${WEEK.map(r => `<tr><td class="tt__time">${r[0]}</td>${r.slice(1).map(c => `<td class="tt__cls">${t.lang === 'sq' ? (CLS_SQ[c] || c) : c}</td>`).join('')}</tr>`).join('')}
</table></div>
<div class="note" style="margin-top:18px"><span>${t.placeholderTT}</span></div>`;

const foot = t => {
  const b = t.dir ? '/sq/' : '/';
  return `<footer class="foot"><div class="shell">
  <div class="foot__top">
    <div class="foot__col">
      ${LEDMARK()}
      <p style="color:var(--dim);font-size:15px;max-width:32ch;margin-top:10px">${t.lang === 'sq' ? 'Palestër në Durrës. E hapur 09:00 deri 22:00.' : 'A gym in Durrës. Open 09:00 to 22:00.'}</p>
    </div>
    <div class="foot__col"><h4>${t.foot.pages}</h4>
      <a href="${b}programs/">${t.nav.programs}</a><a href="${b}membership/">${t.nav.membership}</a><a href="${b}gym/">${t.nav.gym}</a><a href="${b}contact/">${t.nav.contact}</a></div>
    <div class="foot__col"><h4>${t.foot.find}</h4>
      <a href="https://maps.google.com/?cid=${site.mapsCid}" target="_blank" rel="noopener">${site.address}</a>
      <span style="color:var(--dim);font-size:14px">${site.addressLandmark[t.lang]}</span>
      <span style="color:var(--dim);font-size:14px">${t.hoursRows[0][0]}: ${t.hoursRows[0][1]}</span></div>
    <div class="foot__col"><h4>${t.foot.contact}</h4>
      <a href="tel:${site.tel}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a>
      <a href="${site.instagramUrl}" target="_blank" rel="noopener">@${site.instagram}</a>
      <a href="${site.tiktokUrl}" target="_blank" rel="noopener">TikTok</a></div>
  </div>
  <div class="foot__legal"><span>&copy; 2026 ${t.foot.rights}</span><span>${t.foot.demo}</span></div>
</div></footer>
<script src="/js/app.js?v=${JS}" defer></script>
</body></html>`;
};

const progCard = (t, p, href) => `<a class="card" href="${href}#${p.id}">
  <span class="card__shot"><img src="/img/${p.img}-s.webp" alt="" width="800" height="600" loading="lazy"></span>
  <span class="card__title">${p.name[t.lang]}</span>
  <span class="card__text">${p.text[t.lang]}</span>
  <span class="card__meta">${p.meta[t.lang].map(m => `<span>${m}</span>`).join('')}</span>
</a>`;

/* ---------------- pages ---------------- */
const home = t => `${head(t, T[t.lang].home.title, T[t.lang].home.desc, 'home')}
${nav(t, '')}
<main>
  <header class="phero" style="padding-block:clamp(104px,15vh,160px) 0">
    <div class="shell">
      <div class="hero2">
        <div>
          <h1 class="t-display" style="margin:0 0 22px">${t.home.h1}</h1>
          <p class="t-lede" style="max-width:44ch">${t.home.lede}</p>
          <div class="phero__act" style="margin-top:28px">
            <a class="btn btn--primary" href="/${t.dir}membership/">${t.cta.join}</a>
            <a class="btn btn--ghost" href="/${t.dir}programs/">${t.cta.see}</a>
          </div>
        </div>
        <img src="/img/g26.webp" alt="The hand painted mural on the wall at Blast &amp; Burn, Durrës" width="1600" height="1200" fetchpriority="high">
      </div>
    </div>
    <div class="shell" style="margin-top:clamp(28px,4vw,52px)">${LED()}</div>
  </header>

  <section class="band band--tight"><div class="shell">
    <img src="/img/g25.webp" alt="The main floor at Blast &amp; Burn, Durrës" width="1600" height="1200" style="width:100%;aspect-ratio:16/6;object-fit:cover;border-radius:var(--r-lg)" loading="lazy">
  </div></section>

  <section class="band"><div class="shell">
    <div class="post">
      <p class="t-eyebrow">${t.home.proofH}</p>
      <p class="t-lede" style="margin:10px 0 28px">${t.home.proofLede}</p>
      <div style="display:flex;flex-wrap:wrap;gap:clamp(32px,6vw,88px)">
        <div class="stat"><span class="stat__n">${site.proof.rating}</span><span class="stat__k">${t.lang === 'sq' ? `Vlerësim në Google, nga ${site.proof.reviews} vlerësime` : `Google rating, from ${site.proof.reviews} reviews`}</span><span class="stat__src">${t.lang === 'sq' ? 'Verifikuar' : 'Verified'} ${site.proof.capturedOn}</span></div>
        <div class="stat"><span class="stat__n">${site.proof.followers}</span><span class="stat__k">${t.lang === 'sq' ? 'Ndjekës në Instagram' : 'Instagram followers'}</span><span class="stat__src">@${site.instagram}</span></div>
      </div>
    </div>
  </div></section>

  <section class="band band--surface"><div class="shell">
    <h2>${t.home.progH}</h2>
    <p class="t-lede" style="margin:12px 0 32px">${t.home.progLede}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
      ${programs.map(p => progCard(t, p, `/${t.dir}programs/`)).join('')}
    </div>
  </div></section>

  ${osbBand(t)}

  <section class="band band--mural"><div class="shell">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(24px,4vw,64px);align-items:center">
      <div>
        <p class="t-eyebrow" style="color:rgba(255,255,255,.72)">${site.city}</p>
        <h2 style="margin:10px 0 14px">${t.home.roomH}</h2>
        <p style="color:rgba(255,255,255,.84);max-width:52ch">${t.home.roomLede}</p>
        <a class="btn btn--primary" style="margin-top:24px" href="/${t.dir}gym/">${t.home.roomCta}</a>
      </div>
      <img src="/img/g26.webp" alt="The hand painted mural inside the gym" width="1600" height="1200" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r-lg)" loading="lazy">
    </div>
  </div></section>

  <section class="band"><div class="shell">
    <h2>${t.home.weekH}</h2>
    <p class="t-lede" style="margin:12px 0 28px">${t.home.weekLede}</p>
    ${timetable(t)}
  </div></section>
</main>
${foot(t)}`;

const programsPage = t => `${head(t, `${t.programs.h1}. ${site.nameFull}`, t.programs.lede, 'programs')}
${nav(t, 'programs')}
<main>
  ${phero(t, t.programs.h1, t.programs.lede, t.programs.crumb, `<a class="btn btn--primary" href="/${t.dir}membership/">${t.cta.join}</a><a class="btn btn--ghost" href="tel:${site.tel}">${t.cta.call}</a>`)}
  <section class="band"><div class="shell">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
      ${programs.map(p => `<article class="card" id="${p.id}">
        <span class="card__shot"><img src="/img/${p.img}-s.webp" alt="" width="800" height="600" loading="lazy"></span>
        <span class="card__title">${p.name[t.lang]}</span>
        <span class="card__text">${p.text[t.lang]}</span>
        <span class="card__meta">${p.meta[t.lang].map(m => `<span>${m}</span>`).join('')}</span>
      </article>`).join('')}
    </div>
  </div></section>
  <section class="band band--surface"><div class="shell">
    <h2>${t.home.weekH}</h2>
    <p class="t-lede" style="margin:12px 0 28px">${t.home.weekLede}</p>
    ${timetable(t)}
  </div></section>
  ${osbBand(t)}
</main>
${foot(t)}`;

const membershipPage = t => `${head(t, `${t.membership.h1}. ${site.nameFull}`, t.membership.lede, 'membership')}
${nav(t, 'membership')}
<main>
  ${phero(t, t.membership.h1, t.membership.lede, t.membership.crumb, `<a class="btn btn--primary" href="tel:${site.tel}">${t.membership.ask}</a><a class="btn btn--ghost" href="${site.instagramUrl}" target="_blank" rel="noopener">${t.cta.insta}</a>`)}
  <section class="band band--tight"><div class="shell">
    <div class="note"><span>${t.placeholder}</span></div>
  </div></section>
  <section class="band" style="padding-top:0"><div class="shell">
    <h2>${t.membership.chooseH}</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:28px">
      ${pricing.plans.map(p => `<div class="card card--plan">
        <span class="card__title">${p.name[t.lang]}</span>
        <span class="card__price">${money(p.price)} <span>${pricing.currency === 'ALL' ? (t.lang === 'sq' ? 'Lekë' : 'Lekë') : pricing.currency} / ${p.unit[t.lang].replace(/^(per |për |for |për )/, '')}</span></span>
        <ul>${p.features[t.lang].map(f => `<li>${f}</li>`).join('')}</ul>
        <a class="btn btn--ghost" href="tel:${site.tel}">${t.membership.ask}</a>
      </div>`).join('')}
    </div>
  </div></section>
  <section class="band band--surface"><div class="shell">
    <div class="post">
      <p class="t-eyebrow">${t.membership.promoNote}</p>
      <h2 style="margin:10px 0 14px">${t.membership.promoH}</h2>
      <p class="t-display" style="font-size:clamp(24px,3.4vw,44px);color:var(--red-lift);max-width:20ch">${pricing._real_promo_verbatim}</p>
      <p class="t-body" style="margin-top:14px">${t.lang === 'sq' ? 'Kjo është e vetmja shifër çmimi që Blast & Burn publikon diku, e marrë fjalë për fjalë nga faqja e tyre.' : 'This is the only price signal Blast & Burn publishes anywhere, quoted word for word from their own site.'}</p>
    </div>
  </div></section>
  ${osbBand(t)}
</main>
${foot(t)}`;

const gymPage = t => `${head(t, `${t.gym.h1}. ${site.nameFull}`, t.gym.lede, 'gym')}
${nav(t, 'gym')}
<main>
  ${phero(t, t.gym.h1, t.gym.lede, t.gym.crumb, `<a class="btn btn--primary" href="/${t.dir}membership/">${t.cta.join}</a><a class="btn btn--ghost" href="https://maps.google.com/?cid=${site.mapsCid}" target="_blank" rel="noopener">${t.cta.dir}</a>`)}
  <section class="band band--tight"><div class="shell">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
      ${['g13', 'g26', 'g33', 'g31', 'g37', 'g40'].map(g => `<img src="/img/${g}-s.webp" alt="Inside Blast &amp; Burn, Durrës" width="800" height="600" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r)" loading="lazy">`).join('')}
    </div>
  </div></section>
  <section class="band"><div class="shell">
    <div class="post">
      <p class="t-eyebrow">${t.gym.wallH}</p>
      <p class="t-lede" style="margin:10px 0 28px;max-width:56ch">${t.gym.wallLede}</p>
      <div style="display:grid;gap:18px">
        ${site.wallCopy.map(w => `<p class="t-display" style="font-size:clamp(26px,4vw,58px);color:var(--red-lift);margin:0">${w}</p>`).join('')}
      </div>
    </div>
  </div></section>
  <section class="band band--surface"><div class="shell">
    <h2>${t.gym.coachH}</h2>
    <p class="t-lede" style="margin:12px 0 28px">${t.gym.coachLede}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px">
      ${['coach-1', 'coach-2'].map(g => `<div class="coach"><img src="/img/${g}-s.webp" alt="" loading="lazy"><span class="coach__nm">${t.lang === 'sq' ? 'Emri për t’u konfirmuar' : 'Name to confirm'}</span><span class="coach__role">${t.lang === 'sq' ? 'Trajner' : 'Coach'}</span></div>`).join('')}
    </div>
  </div></section>
  ${osbBand(t)}
</main>
${foot(t)}`;

const contactPage = t => `${head(t, `${t.contact.h1}. ${site.nameFull}`, t.contact.lede, 'contact')}
${nav(t, 'contact')}
<main>
  ${phero(t, t.contact.h1, t.contact.lede, t.contact.crumb, `<a class="btn btn--primary" href="tel:${site.tel}">${t.cta.call}</a><a class="btn btn--ghost" href="${site.instagramUrl}" target="_blank" rel="noopener">${t.cta.insta}</a>`)}
  <section class="band"><div class="shell">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(28px,4vw,72px)">
      <div>
        <h2>${t.contact.formH}</h2>
        <p class="t-lede" style="margin:12px 0 24px">${t.contact.formLede}</p>
        <form id="msg" style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <label class="field"><span>${t.contact.name}</span><input type="text" id="f-name" autocomplete="name" required></label>
          <label class="field"><span>${t.contact.phone}</span><input type="tel" id="f-tel" autocomplete="tel" placeholder="+355" required></label>
          <label class="field field--full"><span>${t.contact.prog}</span><select id="f-prog">${programs.map(p => `<option>${p.name[t.lang]}</option>`).join('')}</select></label>
          <label class="field field--full"><span>${t.contact.msg}</span><textarea id="f-msg" rows="3"></textarea></label>
          <button class="btn btn--primary field--full" type="submit">${t.contact.send}</button>
        </form>
      </div>
      <div class="post">
        <p class="t-eyebrow">${t.contact.findH}</p>
        <div style="margin-top:18px">${placeBlock(t)}</div>
        <div style="margin-top:24px">${hoursBlock(t)}</div>
        <div style="margin-top:24px">${callbar(t)}</div>
      </div>
    </div>
  </div></section>
  ${osbBand(t)}
</main>
${foot(t)}`;

/* ---------------- emit ---------------- */
const PAGES = [
  ['', home], ['programs/', programsPage], ['membership/', membershipPage],
  ['gym/', gymPage], ['contact/', contactPage],
];
let n = 0;
for (const t of [T.en, T.sq]) {
  for (const [slug, fn] of PAGES) {
    const out = join(D, t.dir, slug, 'index.html');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, fn(t));
    n++;
  }
}
console.log(`built ${n} pages (css ${CSS}, js ${JS})`);
