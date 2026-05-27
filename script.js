/* ── Navbar scroll effect ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightNav();
}, { passive: true });

/* ── Mobile hamburger ─────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* ── Active nav link on scroll ───────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
function highlightNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}

/* ── Scroll-reveal via IntersectionObserver ──────── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger sibling cards slightly
      const delay = entry.target.closest('.proj-grid, .ai-grid, .sprint-grid, .highlights')
        ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 80
        : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => io.observe(el));

/* ── Placeholder for missing images ─────────────── */
const PORTRAIT_PH = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="450" viewBox="0 0 360 450">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#B91C6A"/>
    </linearGradient>
  </defs>
  <rect width="360" height="450" fill="#F7F6F2"/>
  <circle cx="180" cy="180" r="90" fill="url(#g)" opacity=".12"/>
  <text x="180" y="202" text-anchor="middle" fill="url(#g)"
    font-family="Inter,sans-serif" font-size="72" font-weight="900">AJ</text>
  <text x="180" y="260" text-anchor="middle" fill="#AAAAAA"
    font-family="Inter,sans-serif" font-size="13">Photo coming soon</text>
</svg>`)}`;

const IMG_PH = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260">
  <rect width="400" height="260" fill="#F7F6F2"/>
  <text x="200" y="136" text-anchor="middle" fill="#CCCCCC"
    font-family="Inter,sans-serif" font-size="13">Image coming soon</text>
</svg>`)}`;

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () {
    if (this.dataset.err) return;
    this.dataset.err = '1';
    this.src = this.classList.contains('portrait') ? PORTRAIT_PH : IMG_PH;
  });
});
