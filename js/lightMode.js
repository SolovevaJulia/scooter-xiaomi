const btn = document.querySelector('.header-cover-button-white');

btn.addEventListener('click', function() {
    document.body.classList.add('light-mode');
});


const btnBlack = document.querySelector('.header-cover-button-black');

btnBlack.addEventListener('click', function() {
    document.body.classList.remove('light-mode');
});
