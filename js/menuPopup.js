const menuBtn = document.querySelector('.header-top-menu-burger'),
    modal = document.querySelector('.menu-popup'),
    closeBtn = document.querySelector('.menu-popup-close');

menuBtn.addEventListener('click', function() {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
});