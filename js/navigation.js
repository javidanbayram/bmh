/* ========================================
   Navigation — BM Hospitality
   Scroll behavior, mobile menu, smooth scroll
   ======================================== */

(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  const navLinks = document.querySelectorAll('.nav__link');
  const allScrollLinks = document.querySelectorAll('a[href^="#"]');

  if (!nav) return;

  // ---- Scroll-based nav background ----
  let lastScroll = 0;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateNav();

  // ---- Mobile Menu ----
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    hamburger.classList.add('active');
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // ---- Smooth scroll for anchor links ----
  allScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          closeMobileMenu();
        }
      }
    });
  });

  // ---- Active link highlighting (Zero-reflow with IntersectionObserver) ----
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length) {
    const activeSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0.05
    });

    sections.forEach(section => activeSectionObserver.observe(section));
  }

  // ---- Language switcher ----
  const langBtns = document.querySelectorAll('.nav__lang-btn, .mobile-menu__lang-btn, .footer__lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from siblings
      const siblings = btn.closest('.nav__lang, .mobile-menu__lang, .footer__lang')
        ?.querySelectorAll('button') || [];
      siblings.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();
