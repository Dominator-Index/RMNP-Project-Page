// ---- Copy BibTeX ----
(function () {
  const btn = document.getElementById('copy-bib');
  const bib = document.getElementById('bib');
  if (btn && bib) {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bib.innerText.trim());
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
      } catch (e) {
        const r = document.createRange();
        r.selectNode(bib);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
      }
    });
  }
})();

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
  }, { threshold: 0.08 });
  targets.forEach((t) => io.observe(t));
})();

// ---- Optional: hide Paper/arXiv buttons until real links are set ----
// Edit PAPER_URL / ARXIV_URL below once the links are available.
(function () {
  const PAPER_URL = '';   // e.g. 'https://openreview.net/forum?id=XXXX'
  const ARXIV_URL = '';   // e.g. 'https://arxiv.org/abs/XXXX.XXXXX'
  const set = (id, url) => {
    const a = document.getElementById(id);
    if (!a) return;
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.style.display = 'none'; }   // hidden until a link exists
  };
  set('paper-link', PAPER_URL);
  set('arxiv-link', ARXIV_URL);
})();
