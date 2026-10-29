document.addEventListener('DOMContentLoaded', () => {
    const showPopupBtn = document.querySelector('#show-popup');
    const popupOverlay = document.querySelector('#popup-overlay');
    const popupCloseBtn = document.querySelector('#popup-close');
    const popupForm = document.querySelector('#popup-form');

    const openPopup = () => {
        if (popupOverlay) {
            popupOverlay.computedStyleMap.display = 'flex';
        }
    };
    const closePopup = () => {
        if (popupOverlay) {
            popupOverlay.display = 'none'
        }
    };
    
})