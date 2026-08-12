/* The references wall. Each card starts off-state (set in references.css)
   and settles into place the moment it crosses into view, staggered by DOM
   order within a short window so a whole row doesn't fire as one block.
   Dies instantly under prefers-reduced-motion: every card just sits in its
   resting state with no animation to trigger. */
(() => {
  const cards = [...document.querySelectorAll('[data-wall-card]')];
  if (!cards.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(c => c.classList.add('in'));
    return;
  }
  let n = 0;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const delay = (n++ % 6) * 70;
      setTimeout(() => el.classList.add('in'), delay);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });
  cards.forEach(c => io.observe(c));
})();
