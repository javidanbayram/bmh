/* ========================================
   Loader — BM Hospitality
   SVG signature handwriting animation
   ======================================== */

(function () {
  'use strict';

  // Instant skip if already visited in this session
  if (sessionStorage.getItem('bmh-loaded')) {
    const loader = document.getElementById('loader') || document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
      document.body.classList.remove('loading');
    }
    return;
  }

  const loader = document.getElementById('loader') || document.querySelector('.loader');
  if (!loader) return;

  let dismissed = false;
  function dismissLoader() {
    if (dismissed) return;
    dismissed = true;
    loader.classList.add('fade-out');
    document.body.classList.remove('loading');
    try { sessionStorage.setItem('bmh-loaded', 'true'); } catch (e) {}

    setTimeout(() => {
      loader.style.display = 'none';
    }, 450);
  }

  // Dismiss quickly once page is loaded (max 1000ms, or when window finishes loading)
  if (document.readyState === 'complete') {
    setTimeout(dismissLoader, 400);
  } else {
    window.addEventListener('load', () => {
      setTimeout(dismissLoader, 400);
    }, { once: true });
  }

  // Hard safety timeout: never block interaction longer than 1100ms
  setTimeout(dismissLoader, 1100);

  // Allow instant exit on any user input
  const exitInstantly = () => dismissLoader();
  window.addEventListener('keydown', exitInstantly, { once: true });
  window.addEventListener('click', exitInstantly, { once: true });
  window.addEventListener('touchstart', exitInstantly, { once: true, passive: true });
  window.addEventListener('wheel', exitInstantly, { once: true, passive: true });
})();
