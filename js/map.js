/* ========================================
   Map — BM Hospitality
   Interactive destination map
   ======================================== */

(function () {
  'use strict';

  const mapContainer = document.querySelector('.destinations__map-container');
  const popup = document.querySelector('.destinations__popup');
  const popupClose = document.querySelector('.destinations__popup-close');
  const pins = document.querySelectorAll('.destinations__pin');

  if (!mapContainer) return;

  // Show popup for a destination
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();

      const name = pin.dataset.name;
      const location = pin.dataset.location;
      const status = pin.dataset.status;
      const description = pin.dataset.description;
      const image = pin.dataset.image;

      if (popup) {
        // Update popup content
        const popupName = popup.querySelector('.destinations__popup-name');
        const popupLocation = popup.querySelector('.destinations__popup-location');
        const popupStatus = popup.querySelector('.destinations__popup-status');
        const popupDesc = popup.querySelector('.destinations__popup-desc');
        const popupImg = popup.querySelector('.destinations__popup-image img');

        if (popupName) popupName.textContent = name;
        if (popupLocation) popupLocation.textContent = location;
        if (popupStatus) popupStatus.textContent = status;
        if (popupDesc) popupDesc.textContent = description;
        if (popupImg && image) popupImg.src = image;

        // Position popup near pin
        const pinRect = pin.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        const pinCenterX = pinRect.left - containerRect.left + pinRect.width / 2;
        const pinCenterY = pinRect.top - containerRect.top;

        // Determine if popup should be on left or right
        const popupWidth = 320;
        if (pinCenterX + popupWidth > containerRect.width) {
          popup.style.left = `${pinCenterX - popupWidth - 20}px`;
        } else {
          popup.style.left = `${pinCenterX + 20}px`;
        }
        popup.style.top = `${Math.max(0, pinCenterY - 50)}px`;

        popup.classList.add('visible');
      }
    });
  });

  // Close popup
  if (popupClose) {
    popupClose.addEventListener('click', () => {
      popup.classList.remove('visible');
    });
  }

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (popup && !popup.contains(e.target) && !e.target.closest('.destinations__pin')) {
      popup.classList.remove('visible');
    }
  });
})();
