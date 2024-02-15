document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.nav__menu');
    var navList = document.querySelector('.nav__list');
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');

    menuButton.addEventListener('click', function () {
        navList.classList.toggle('show');
        menuIcon.classList.toggle('hide');
        closeIcon.classList.toggle('hide');
    });
});

