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

// Links 

var github = document.getElementById('github-link');

github.addEventListener('click', function() {
    window.location.href = "https://github.com/AndyCavedal/portfolio"
})

var wsp = document.getElementById('wsp-link');

wsp.addEventListener('click', function() {
    window.location.href = "https://api.whatsapp.com/send?phone=542613452586"
})

