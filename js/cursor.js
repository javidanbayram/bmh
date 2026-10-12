/* ========================================
   Cursor — BM Hospitality
   Custom cursor with contextual labels
   ======================================== */

(function () {
  'use strict';

  // Only on desktop with pointer
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.innerWidth < 1024) return;

  // Create cursor elements
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor__dot';

  const cursorLabel = document.createElement('div');
  cursorLabel.className = 'custom-cursor__label';

  cursor.appendChild(cursorDot);
  cursor.appendChild(cursorLabel);
  document.body.appendChild(cursor);

  // Add cursor styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: var(--z-cursor, 99999);
      transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .custom-cursor__dot {
      width: 6px;
      height: 6px;
      background: #D4AF37;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 12px rgba(212, 175, 55, 0.8);
      transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  height 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  background 0.3s ease,
                  border 0.3s ease;
    }

    .custom-cursor.hovering .custom-cursor__dot {
      width: 52px;
      height: 52px;
      background: rgba(212, 175, 55, 0.08);
      border: 1px solid rgba(212, 175, 55, 0.6);
      backdrop-filter: blur(2px);
      box-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
    }

    .custom-cursor.labeled .custom-cursor__dot {
      width: 76px;
      height: 76px;
      background: rgba(13, 12, 11, 0.7);
      border: 1px solid rgba(212, 175, 55, 0.7);
      backdrop-filter: blur(8px);
      box-shadow: 0 0 30px rgba(212, 175, 55, 0.35);
    }

    .custom-cursor__label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #FAF8F5;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    .custom-cursor.labeled .custom-cursor__label {
      opacity: 1;
    }

    body { cursor: none !important; }
    a, button, [data-cursor] { cursor: none !important; }
  `;
  document.head.appendChild(style);

  // Track mouse position
  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;
  let isMoving = false;
  let rafId = null;

  function renderCursor() {
    const ease = 0.18;
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * ease;
    cursorY += dy * ease;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      rafId = requestAnimationFrame(renderCursor);
    } else {
      isMoving = false;
      rafId = null;
    }
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      rafId = requestAnimationFrame(renderCursor);
    }
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // ---- Hover interactions via high-performance event delegation ----
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .portfolio__card, .category-card, .news-card, [data-cursor]');
    if (target) {
      cursor.classList.add('hovering');
      const label = target.dataset.cursor;
      if (label) {
        cursorLabel.textContent = label;
        cursor.classList.add('labeled');
      }
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .portfolio__card, .category-card, .news-card, [data-cursor]');
    if (target) {
      cursor.classList.remove('hovering', 'labeled');
      cursorLabel.textContent = '';
    }
  }, { passive: true });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
})();
