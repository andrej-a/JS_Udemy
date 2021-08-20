"use strict";

/*const btnWhite = document.querySelector(".btn_white");
const btnDark = document.querySelector(".btn_dark");
const modalWindow = document.querySelector(".modal");
const modalClose = modalWindow.querySelector(".modal__close");
let timer;

showModalWindow(btnWhite);
showModalWindow(btnDark);
closeModalWindow();
timerModalWindow(8000);
scrollModalWindow(1500);
closedByKey("Escape");


function showModalWindow(btn) {
    btn.addEventListener("click", function() {
        clearTimeout(timer);
        displayBlock(modalWindow);
    });
}

function closeModalWindow() {
    modalWindow.addEventListener("click", function(e) {
    if (e.target === modalWindow || e.target.classList.contains("modal__close")) {
        displayNone(modalWindow);
    }
});
}

function timerModalWindow(num) {
    timer = setTimeout(function() {
        displayBlock(modalWindow);
    }, num);
}

function scrollModalWindow(num) {
        document.addEventListener("scroll", function() {
            if (!modalWindow.classList.contains("opened") && document.documentElement.scrollTop > num) {
            clearTimeout(timer);
            displayBlock(modalWindow);
        }
    });
}

function closedByKey(code) {
    document.addEventListener('keydown', function(event) {
        if ( event.code === code ) {
            displayNone(modalWindow);
        }
      });
}

function displayNone(elem) {
    elem.style.display = "none";
    document.body.style.overflow = "";
}

function displayBlock(elem) {
    elem.style.display = "block";
    elem.classList.add("opened");
    document.body.style.overflow = "hidden";
}
*/
