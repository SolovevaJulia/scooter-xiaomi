
const btn = document.querySelectorAll('.swich-button-white');

btn.forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.add('light-mode');
    });
});


const btnBlack = document.querySelectorAll('.swich-button-black');

btnBlack.forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.remove('light-mode');
    });
});
