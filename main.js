/* =============================================
   PORTFOLIO — main.js
   ============================================= */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .p-card, .about-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

/* ── NAV SCROLL EFFECT ── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── SKILL BARS ANIMATE ON ENTER ── */
const skillsSection = document.querySelector('#skills');

if (skillsSection) {
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.fill + '%';
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  barObserver.observe(skillsSection);
}

/* ── CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  e.target.reset();

  setTimeout(() => toast.classList.remove('show'), 4200);
}