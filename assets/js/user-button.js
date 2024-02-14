document.addEventListener('DOMContentLoaded', function () {
    var userButton = document.querySelector('.nav__user-button');
    var authenticationBlock = document.querySelector('.nav__authentication');

    userButton.addEventListener('click', function () {
        authenticationBlock.classList.toggle('show');
    });
});
