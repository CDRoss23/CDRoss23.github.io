document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.pestañas');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show-menu'); // Agrega o quita una clase para mostrar/ocultar el menú
    });
});