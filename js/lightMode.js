
const btn = document.querySelectorAll('.switch-button-white');

btn.forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.add('light-mode');
    });
});


const btnBlack = document.querySelectorAll('.switch-button-black');

btnBlack.forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.remove('light-mode');
    });
});
