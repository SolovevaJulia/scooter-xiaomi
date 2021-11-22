let tab = function () {
    let tabNav = document.querySelectorAll('.header-benefits-card');

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav () {
        tabNav.forEach(item => {
            item.classList.remove('header-benefits-card-active');
        });
        this.classList.add('header-benefits-card-active');
    }
};

tab();