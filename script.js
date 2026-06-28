// Reveal frames on scroll
const frames = document.querySelectorAll('.frame');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
frames.forEach((f) => io.observe(f));

// Reduced-motion fallback: show everything immediately
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  frames.forEach((f) => f.classList.add('in'));
}
