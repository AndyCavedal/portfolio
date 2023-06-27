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

// listener.addEventListener("click", function () {
    //     if (menu.style.display === "none") {
        //         menu.style.display = "block";
        //     } else {
            //         menu.style.display = "none";
            //     }
            // });
            
            // var closeBtn = document.getElementById('display-close__button');
var listener = document.getElementById('menu-logo');
var panelBtn = document.getElementsByClassName('display-button');
var menu = document.getElementById('menu-slide');

listener.addEventListener("click", function (event) {
    event.stopPropagation(); // Detener la propagación del evento click
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

document.addEventListener("click", function (event) {
    if (!menu.contains(event.target)) {
        menu.style.display = "none";
    }
});

document.addEventListener("touchmove", function () {
    menu.style.display = "none"; 
});