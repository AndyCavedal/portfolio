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

listener.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

var closeBtn = document.getElementById('display-close__button');
var panelBtn = document.getElementsByClassName('display-button')
var menu = document.getElementById('menu-slide');

closeBtn.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

for (var i = 0; i < panelBtn.length; i++) {
    panelBtn[i].addEventListener("click", function () {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}