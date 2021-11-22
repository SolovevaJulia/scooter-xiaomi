console.log('Определяем ширину окна', document.body.clientWidth);

let tab = function () {
    let tabNav = document.querySelectorAll('.header-benefits-card');

    if (document.body.clientWidth > 769) {
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav);
        });
    } else {
        const active = document.querySelector('.header-benefits-card-active');
        active.classList.remove('header-benefits-card-active');
    }
    

    function selectTabNav () {
        tabNav.forEach(item => {
            item.classList.remove('header-benefits-card-active');
        });
        this.classList.add('header-benefits-card-active');
    }
};

tab();


let tabSafety = function () {
    let tabNavSafety = document.querySelectorAll('.safety-card');

    if (document.body.clientWidth > 769) {
        
        tabNavSafety.forEach(item => {
            item.addEventListener('click', selectTabNavSafety);
        });
    } else {
        const activeSafety = document.querySelector('.safety-card-active');
        activeSafety.classList.remove('safety-card-active');
    }

    function selectTabNavSafety () {
        tabNavSafety.forEach(item => {
            item.classList.remove('safety-card-active');
        });
        this.classList.add('safety-card-active');
    }
};

tabSafety();