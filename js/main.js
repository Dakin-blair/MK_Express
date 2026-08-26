// Nav scroll state
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const burger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primary-nav');
burger.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});
primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Before / after slider
const baSlider = document.getElementById('ba-slider');
const baAfter = document.getElementById('ba-after-img');
baSlider.addEventListener('input', e => {
  baAfter.style.clipPath = `inset(0 0 0 ${e.target.value}%)`;
});
document.querySelectorAll('.ba-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.ba-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    document.getElementById('ba-before-img').src = `https://images.unsplash.com/photo-${dot.dataset.b}?q=80&w=1400&auto=format&fit=crop`;
    baAfter.src = `https://images.unsplash.com/photo-${dot.dataset.a}?q=80&w=1400&auto=format&fit=crop`;
    baSlider.value = 50;
    baAfter.style.clipPath = 'inset(0 0 0 50%)';
  });
});

// Gallery filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.gal-item').forEach(item => {
      item.hidden = f !== 'tous' && !item.dataset.cat.includes(f);
    });
  });
});

// File upload label
const fileInput = document.getElementById('f-file');
const fileLabel = document.getElementById('file-label');
fileInput.addEventListener('change', () => {
  fileLabel.textContent = fileInput.files.length
    ? `${fileInput.files.length} photo(s) sélectionnée(s)`
    : 'Cliquez pour téléverser des photos';
});

// Quote form submit
document.getElementById('quote-form').addEventListener('submit', function(e){
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('form-confirm').style.display = 'block';
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));




