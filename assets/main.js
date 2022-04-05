const opener = document.querySelector('.mobile-nav-opener');
const navbar = document.querySelector('.mobile-navbar');
const closer = document.querySelector('.mobile-nav-closer');

function menuOpen() {
    navbar.classList.add('open');
}
function menuClose() {
    navbar.classList.remove('open');
}

opener.addEventListener('click', menuOpen);
closer.addEventListener('click', menuClose);

document.getElementsByClassName;
