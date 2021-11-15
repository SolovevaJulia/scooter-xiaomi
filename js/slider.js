console.warn('slider.js подключен')

const elem = document.querySelector('.main-carousel');
    
const flkty = new Flickity( elem, {
  // options
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
});


const next = document.querySelector('.review-buttons-right-next'),
    prev = document.querySelector('.review-buttons-right-prev');

next.addEventListener('click', function() {
    flkty.next();
});

prev.addEventListener('click', function() {
    flkty.previous();
});


