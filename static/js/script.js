// ---- Copy BibTeX (supports multiple boxes via data-target) ----
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    const text = target.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const r = document.createRange();
      r.selectNode(target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
    }
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = old; btn.classList.remove('copied'); }, 1800);
  });
});

// ---- Tabs (training curves) ----
document.querySelectorAll('.tabs-wrap').forEach((wrap) => {
  const btns = wrap.querySelectorAll('.tab-btn');
  const panels = wrap.querySelectorAll('.tab-panel');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((b) => b.classList.toggle('active', b === btn));
      panels.forEach((p) => p.classList.toggle('active', p.id === btn.dataset.tab));
    });
  });
});

// ---- Reveal on scroll ----
(function () {
  const targets = document.querySelectorAll('.section, .teaser figure');
  targets.forEach((t) => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.06 });
  targets.forEach((t) => io.observe(t));
})();
