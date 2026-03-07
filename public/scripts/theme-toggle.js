// public/scripts/theme-toggle.js
//
// Ce fichier est servi statiquement et référencé par src dans le HTML.
// Il est donc couvert par 'self' dans script-src — aucun hash requis.
//
// Chargé avec defer : s'exécute après le parsing HTML, le DOM est prêt.

// ── 1. Toggle Dark / Light ──────────────────────────────────────────────────
const btn = document.getElementById('theme-toggle');
if (btn) {
  btn.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
}

// ── 2. Animations reveal au scroll (IntersectionObserver) ──────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // On arrête d'observer une fois visible (optimisation)
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: '0px', threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
