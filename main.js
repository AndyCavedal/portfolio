console.log('Hello, world!');

// window.addEventListener('resize', function() {
//     var menu = document.getElementById('menu-logo');
//     var anchoPantalla = window.innerWidth;

//     if (anchoPantalla <= 500) {
//         menu.classList.add('display');
//         console.log('pantalla chica')
//     } else {
//         menu.classList.remove('display')
//         console.log('pantalla grande')
//     }
// });

var listener = document.getElementById('menu-logo');
var menu = document.getElementById('menu-slide');

// listener.addEventListener('click', showMenu());

// function showMenu() {
//     menu.classList.add('none');
// }

listener.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block"; // Mostrar el div
    } else {
        menu.style.display = "none"; // Ocultar el div
    }
});