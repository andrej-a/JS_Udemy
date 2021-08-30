"use strict";

export function calc() {
    const genderItems = document.querySelectorAll(".calculating_gender");
    const chooseActivity = document.querySelectorAll(".calculating__choose_big div");
    const inputsArray = document.querySelectorAll(".calculating__choose_medium input");
    const textResult = document.querySelector(".calculating__result span");

    let mes = document.createElement("p");
    mes.innerText = "Пожалуйста, введите число";

    setItemActive(genderItems);
    setItemActive(chooseActivity);

    if (localStorage.getItem("sex") || localStorage.getItem("activity")) {
        getLocalStorage(genderItems, "sex");
        getLocalStorage(chooseActivity, "activity");
    } else {
        calculatingResult();

    }


    chooseActivity.forEach(e => {
        e.addEventListener("click", () => {
            calculatingResult();
            localStorage.setItem("activity", `${e.dataset.activity}`);
        });
    });

    genderItems.forEach(e => {
        e.addEventListener("click", () => {
            calculatingResult();
            localStorage.setItem("sex", `${e.innerText}`);
        });
    });

    inputsArray.forEach(e => {
        e.addEventListener("input", (event) => {
            if (/\D/.test(event.target.value) === true) {
                event.target.value = "";
                textResult.innerText = 0;
                event.target.insertAdjacentElement("afterEnd", mes);
                setTimeout(() => mes.remove(), 2000);

            } else {
                calculatingResult();
            }
        });
    });



    function setItemActive(array) { //set class "calculating__choose-item_active" for next work
        array.forEach(e => {
            e.addEventListener("click", event => {
                array.forEach(e => e.classList.remove("calculating__choose-item_active"));
                event.target.classList.add("calculating__choose-item_active");
            });
        });
    }

    function calculatingResult() {

        if (!inputsArray[0].value || !inputsArray[1].value || !inputsArray[2].value) {
            textResult.innerText = 0;
            return;
        } else {
            const returnItemParametrs = function (array) { //genderItems     //choose the sex and get result
                let result = null;
                array.forEach(item => {
                    if (item.classList.contains("calculating__choose-item_active") && item.innerText === "Мужчина") {
                        result = Math.round(88.36 + ((13.4 * +inputsArray[1].value) + (4.8 * +inputsArray[0].value) - (5.7 * +inputsArray[2].value)));
                    } else {
                        result = Math.round(447.6 + ((9.2 * +inputsArray[1].value) + (3.1 * +inputsArray[0].value) - (4.3 * +inputsArray[2].value)));
                    }
                });
                return result;
            };

            const returnItemActivity = function (array) { //chooseActivity
                let result = null;
                array.forEach(item => {
                    if (item.classList.contains("calculating__choose-item_active")) {
                        result = +item.dataset.activity;
                    }
                });
                return result;
            };
            textResult.innerText = Math.floor(returnItemParametrs(genderItems) * returnItemActivity(chooseActivity));
        }

    }

    function getLocalStorage(array, key) {
        array.forEach(e => {
            if (e.innerText === localStorage.getItem(key) || e.dataset.activity === localStorage.getItem(key)) {
                array.forEach(e => e.classList.remove("calculating__choose-item_active"));
                e.classList.add("calculating__choose-item_active");
                calculatingResult();
            }
        });
    }
} //calc
