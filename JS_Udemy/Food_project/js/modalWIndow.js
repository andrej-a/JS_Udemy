"use strict";
export const modalWindow = document.querySelector(".modal");
export function modal() {
    const btnWhite = document.querySelector(".btn_white");
    const btnDark = document.querySelector(".btn_dark");
    const modalClose = modalWindow.querySelector(".modal__close");
    let timer = null;

    showModalWindow(btnWhite);
    showModalWindow(btnDark);
    closeModalWindow(modalWindow);
    timerModalWindow(8000, modalWindow);
    scrollModalWindow(1500, modalWindow, "opened");
    closedByKey("Escape", modalWindow);


    function showModalWindow(btn) {
        btn.addEventListener("click", function () {
            clearTimeout(timer);
            displayBlock(modalWindow);
        });
    }

    function closeModalWindow(parent) {
        parent.addEventListener("click", function (e) {
            if (e.target === parent || e.target.classList.contains("modal__close")) {
                displayNone(parent);
            }
        });
    }

    function timerModalWindow(num, elem) {
        timer = setTimeout(function () {
            displayBlock(elem);
        }, num);
    }

    function scrollModalWindow(num, elem, workClass) {
        document.addEventListener("scroll", function () {
            if (!elem.classList.contains(workClass) && document.documentElement.scrollTop > num) {
                clearTimeout(timer);
                displayBlock(elem);
            }
        });
    }

    function closedByKey(code, elem) {
        document.addEventListener('keydown', function (event) {
            if (event.code === code) {
                displayNone(elem);
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


} //modal
