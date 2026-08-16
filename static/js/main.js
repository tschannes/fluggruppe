/* ===== Navigation ===== */
(function () {
  'use strict';

  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');

  // Scroll: add class to nav for opaque background
  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('is-open', !expanded);
      mobileMenu.setAttribute('aria-hidden', String(expanded));
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();

/* ===== Hero Slideshow ===== */
(function () {
  'use strict';

  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const INTERVAL = 5000;

  function goTo(index) {
    slides[current].classList.remove('is-active');
    indicators[current] && indicators[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    indicators[current] && indicators[current].classList.add('is-active');
  }

  function next() { goTo(current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  // Indicator click
  indicators.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      goTo(i);
      startTimer();
    });
  });

  // Pause on hover
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', function () { clearInterval(timer); });
    hero.addEventListener('mouseleave', startTimer);
  }

  startTimer();
})();

/* ===== Contact Form (Formspree AJAX) ===== */
(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('contact-submit');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        successMsg.hidden = false;
        submitBtn.textContent = 'Abgeschickt ✓';
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Fehler – erneut versuchen';
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Fehler – erneut versuchen';
    }
  });
})();
