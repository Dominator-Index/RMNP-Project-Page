# RMNP — Project Page

Project website for **RMNP: Row-Momentum Normalized Preconditioning for Scalable Matrix-Based Optimization** (ICML 2026).

🔗 **Live site:** https://dominator-index.github.io/RMNP-Project-Page/
🔗 **Code:** https://github.com/Dominator-Index/RMNP

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html              # the page
static/css/style.css    # theme & layout
static/js/script.js     # copy-BibTeX, scroll reveal, paper/arXiv links
static/images/          # figures (converted from the paper's PDFs)
```

## Updating links

Open `static/js/script.js` and set `PAPER_URL` / `ARXIV_URL` once the
camera-ready / arXiv links are available; the buttons appear automatically.

Built as a static site — no build step, no dependencies. MathJax and fonts load
from CDN.
