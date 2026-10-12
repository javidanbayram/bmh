/* ========================================
   Portfolio — BM Hospitality
   Horizontal scroll, drag, and controls
   ======================================== */

(function () {
  'use strict';

  const track = document.querySelector('.portfolio__track');
  const prevBtn = document.querySelector('.portfolio__nav-btn--prev');
  const nextBtn = document.querySelector('.portfolio__nav-btn--next');
  const progressBar = document.querySelector('.portfolio__progress-bar');

  if (!track) return;

  // ---- Drag to scroll ----
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  // ---- Navigation buttons ----
  const scrollAmount = 400;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // ---- Progress bar ----
  function updateProgress() {
    if (!progressBar) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const barWidth = Math.max(20, (track.clientWidth / track.scrollWidth) * 100);
    const barLeft = progress * (100 - barWidth);

    progressBar.style.width = `${barWidth}%`;
    progressBar.style.left = `${barLeft}%`;
  }

  track.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  // Initial progress
  setTimeout(updateProgress, 100);

  // ---- Touch support ----
  let touchStartX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    // Let native scroll handle it
  }, { passive: true });
})();
