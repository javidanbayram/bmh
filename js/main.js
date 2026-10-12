/* ========================================
   Main — BM Hospitality
   App initialization & utilities
   ======================================== */

(function () {
  'use strict';

  // ---- Back to top button ----
  const backTopBtn = document.querySelector('.footer__back-top');

  if (backTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        backTopBtn.classList.add('visible');
      } else {
        backTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Contact form ----
  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const fields = contactForm.querySelectorAll('.contact__input, .contact__textarea, .contact__select');
      let isValid = true;

      fields.forEach(field => {
        if (field.required && !field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#c0392b';
        } else {
          field.style.borderColor = '';
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = '#c0392b';
        }
      }

      if (isValid) {
        // Show success state
        contactForm.style.display = 'none';
        const success = document.querySelector('.contact__success');
        if (success) success.classList.add('visible');
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('.contact__input, .contact__textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.style.borderColor = '';
      });
    });
  }

  // ---- Magnetic button effect ----
  const magneticBtns = document.querySelectorAll('.btn');

  if (window.matchMedia('(pointer: fine)').matches) {
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ---- Preload critical images ----
  const heroImage = document.querySelector('.hero__bg img');
  if (heroImage) {
    heroImage.addEventListener('load', () => {
      heroImage.classList.add('loaded');
    });
  }

  // ---- Keyboard accessibility ----
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close mobile menu
      const mobileMenu = document.querySelector('.mobile-menu.open');
      if (mobileMenu) {
        const hamburger = document.querySelector('.nav__hamburger');
        hamburger?.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }

      // Close map popup
      const popup = document.querySelector('.destinations__popup.visible');
      if (popup) popup.classList.remove('visible');
    }
  });

  // ---- Scroll Progress Bar ----
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // ---- Dynamic Ambient Glow Orb (Desktop) ----
  if (window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 1024) {
    const ambientGlow = document.createElement('div');
    ambientGlow.className = 'ambient-glow';
    document.body.appendChild(ambientGlow);

    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let targetX = glowX;
    let targetY = glowY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function updateAmbientGlow() {
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;
      ambientGlow.style.left = `${glowX}px`;
      ambientGlow.style.top = `${glowY}px`;
      requestAnimationFrame(updateAmbientGlow);
    }
    updateAmbientGlow();

    // Card mouse position for radial highlight
    const interactiveCards = document.querySelectorAll('.portfolio__card, .category-card, .development__phase, .about__stat');
    interactiveCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ---- Current year in footer ----
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log('%cBM HOSPITALITY', 'font-family: Cinzel, serif; font-size: 24px; font-weight: 600; color: #D4AF37; letter-spacing: 4px;');
  console.log('%cCreating places worth remembering.', 'font-family: Cormorant Garamond, serif; font-size: 14px; font-style: italic; color: #A87C4F;');
})();
