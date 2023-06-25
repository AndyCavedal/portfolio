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

// listener.addEventListener('click', showMenu());

// function showMenu() {
//     menu.classList.add('none');
// }
var listener = document.getElementById('menu-logo');
var menu = document.getElementById('menu-slide');


listener.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

var close = document.getElementById('display-close__button');

close.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})

//id discord 345192148154449920