/* Fallback only.
   The corridor on references.html is driven by CSS scroll-driven animations
   (animation-timeline: view()), which need no script at all. This exists for
   engines that don't support them: it fires the same arrival once per review
   as it crosses into view, so the page reads correctly rather than sitting
   blank. Where scroll-driven animations ARE supported, this does nothing. */
(() => {
  if (CSS.supports('animation-timeline: view()')) return;
  const items = [...document.querySelectorAll('.rev__in')];
  if (!items.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });
  items.forEach(el => io.observe(el));
})();
