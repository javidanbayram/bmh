/* ========================================
   Animations — BM Hospitality
   Scroll reveals, parallax, text animations
   ======================================== */

(function () {
  'use strict';

  // ---- Scroll Reveal with Intersection Observer ----
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all elements immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ---- Parallax Effect ----
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  function updateParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const speed = parseFloat(el.dataset.parallax) || 0.15;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const distance = (rect.top - windowHeight / 2) * speed;
        el.style.transform = `translate3d(0, ${distance.toFixed(1)}px, 0)`;
      }
    });
  }

  let parallaxTicking = false;
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(() => {
        updateParallax();
        parallaxTicking = false;
      });
      parallaxTicking = true;
    }
  }, { passive: true });

  // ---- Image Lazy Loading ----
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.addEventListener('load', () => {
            img.classList.add('loaded');
          });
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px',
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // ---- Text line reveal ----
  const textReveals = document.querySelectorAll('[data-text-reveal]');
  textReveals.forEach(el => {
    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = words.map((word, i) =>
      `<span class="word-wrap"><span class="word" style="transition-delay: ${i * 60}ms">${word}</span></span>`
    ).join(' ');

    const wordRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-revealed');
          wordRevealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    wordRevealObserver.observe(el);
  });

  // ---- Hero parallax on scroll ----
  const heroSection = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero__bg img');

  if (heroSection && heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      if (scrollY < heroHeight) {
        const translateY = scrollY * 0.3;
        const opacity = 1 - (scrollY / heroHeight) * 0.5;
        heroBg.style.transform = `scale(1.05) translateY(${translateY}px)`;

        const heroContent = heroSection.querySelector('.hero__content');
        if (heroContent) {
          heroContent.style.opacity = opacity;
          heroContent.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      }
    }, { passive: true });
  }

  // Mark hero as loaded for the zoom-out animation
  if (heroSection) {
    setTimeout(() => heroSection.classList.add('loaded'), 100);
  }
})();
