const menuIcon = document.getElementById('menu-icon');
const menuMobile = document.getElementById('menu-mobile');

menuIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('active');

    if (menuMobile.classList.contains('active')) {
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x');
    } else {
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    }
});


