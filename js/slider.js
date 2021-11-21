console.warn('slider.js подключен');

const elem = document.querySelector('.main-carousel');
    
const flkty = new Flickity( elem, {
  // options
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
});


const next = document.querySelector('.review-buttons-next'),
    prev = document.querySelector('.review-buttons-prev');

next.addEventListener('click', function() {
    flkty.next();
});

prev.addEventListener('click', function() {
    flkty.previous();
});


