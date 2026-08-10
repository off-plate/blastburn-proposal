/* Blast & Burn. Two behaviours, no library. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);

  /* mobile menu */
  const burger = $('#burger'), sheet = $('#sheet');
  if (burger && sheet) {
    burger.addEventListener('click', e => {
      e.stopPropagation();
      const open = sheet.hidden;
      sheet.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => {
      if (!sheet.hidden && !e.target.closest('#sheet') && !e.target.closest('#burger')) {
        sheet.hidden = true; burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !sheet.hidden) { sheet.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* the contact form has no backend on a static host, so it composes a real
     message and hands it to the phone rather than pretending to send one */
  const form = $('#msg');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = $('#f-name').value.trim(), tel = $('#f-tel').value.trim();
      const prog = $('#f-prog').value, msg = $('#f-msg').value.trim();
      const bad = (el, on) => el.closest('.field').classList.toggle('field--error', on);
      bad($('#f-name'), !name); bad($('#f-tel'), !tel);
      if (!name || !tel) return;
      const body = [`Hello Blast & Burn, I would like to train.`,
        `Name: ${name}`, `Phone: ${tel}`, `Programme: ${prog}`,
        msg ? `Note: ${msg}` : ''].filter(Boolean).join('\n');
      location.href = `mailto:${form.dataset.email || 'info@blastburn.al'}?subject=${encodeURIComponent('Training enquiry')}&body=${encodeURIComponent(body)}`;
    });
  }
})();
