const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuCont = document.querySelector('.menu__container');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuCont.classList.toggle('_active');
    });
}