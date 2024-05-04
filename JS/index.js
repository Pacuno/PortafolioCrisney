// Animaciones al cargar la página
window.addEventListener('load', function () {
    const animatedElements = document.querySelectorAll('.animate__animated');

    animatedElements.forEach(function (element) {
        element.classList.add('animate__fadeIn');
    });
});