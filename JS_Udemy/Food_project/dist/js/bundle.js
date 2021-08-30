/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calc": () => /* binding */ calc
/* harmony export */ });


function calc() {
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


/***/ }),

/***/ "./js/clases.js":
/*!**********************!*\
  !*** ./js/clases.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classes": () => /* binding */ classes
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./js/services/services.js");




function classes(containerClass) {
    class MenuItem {        //create class
        constructor(img, alt, subtitle, describe, total) {
            this.imgSRC = img;
            this.alt = alt;
            this.subtitle = subtitle;
            this.describe = describe;
            this.costTotal = total;
        }
    
        static convertorToBYN(price) {
            return Math.floor(price * 2.6);
        }
    
        setItems () {
            return `<div class="menu__item">
            <img src=${this.imgSRC} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">${this.describe}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${MenuItem.convertorToBYN(this.costTotal)}</span> BYN/день</div>
            </div>
        </div>`;
        }
    }
    
    const container = document.querySelector(containerClass);    //clear cards
    container.innerHTML = '';
        
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getItemsFromServer)("http://localhost:3000/menu")        //post it to cards of the content
    .then(data => {
        data.forEach( ({img, altimg, title, descr, price}) => {
            container.innerHTML += new MenuItem(img, altimg, title, descr, price).setItems();
        });
    });
    
    
    //GET BY AXIOS LIBRARY
    
    /*axios.get("http://localhost:3000/menu")
    .then(data => {
        data.data.forEach( ({img, altimg, title, descr, price}) => {
            container.innerHTML += new MenuItem(img, altimg, title, descr, price).setItems();
        });
    });*/
    
}//classes


/***/ }),

/***/ "./js/forms.js":
/*!*********************!*\
  !*** ./js/forms.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forms": () => /* binding */ forms
/* harmony export */ });
/* harmony import */ var _modalWIndow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWIndow */ "./js/modalWIndow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/services */ "./js/services/services.js");



function forms(formSlector) {
    
    const forms = document.querySelectorAll(formSlector);
    
    const message = {
            loading: "img/form/spinner(1).svg",
            done: "Данные отправлены. Спасибо!",
            error: "Произошла ошибка. Попробуйте еще раз."
        };
    
    forms.forEach((e) => {
        bindPostData(e, message);
    });

    

    /*function postData(form) {                         //XML IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("div");
            statusMessage.innerText = message.loading;
            form.append(statusMessage);
            
            const xml = new XMLHttpRequest();
            xml.open("POST", "server.php");
            xml.send(formData);
    
    
            xml.addEventListener("load", () => {
                if (xml.status === 200) {
                    statusMessage.innerText = message.done;
                    formsTimer(form, statusMessage, 2000);
    
                    console.log(xml.response);
                } else {
                    statusMessage.innerText = message.error;
                    formsTimer(form, statusMessage, 2000);
                }
            });
        });
    }*/


    /*function postData(form) { //XML    JSON and FormData to JSON IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;
    
            form.insertAdjacentElement("afterend", statusMessage);
            formsTimer(form, statusMessage, 2000);
            
            const xml = new XMLHttpRequest();
            xml.open("POST", "server.php");
            xml.setRequestHeader("Content-type", "application/json");
            const object = {};
    
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            xml.send(JSON.stringify(object));
    
    
            xml.addEventListener("load", () => {
                if (xml.status === 200) {
                    showThanksModal(message.done);
    
                    console.log(xml.response);
                } else {
                    showThanksModal(message.error);
                }
            });
        });
    }*/


    /*function postData(form) {                         //FETCH IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;
    
            form.insertAdjacentElement("afterend", statusMessage);
            
            fetch("server.php", {
                method: "POST",
                body: formData
            })
            .then(data => data.text())
            .then(data => {
                showThanksModal(message.done);
    
                console.log(data);
            })
            .catch(() => {
                showThanksModal(message.error);
            }).finally(() => {
                formsTimer(form, statusMessage, 2000);
            });
        });
    }*/



    // FETCH API IN JSON

   

    function bindPostData(form, objectMessage) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form); //get formses data

            const statusMessage = document.createElement("img");
            statusMessage.src = objectMessage.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;

            form.insertAdjacentElement("afterend", statusMessage);
            formsTimer(form, statusMessage, 2000);

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //from formData to JSON

            /*const object = {};
    
                    formData.forEach(function(value, key) {   //up its better formData to JSON
                        object[key] = value;
                    });*/

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", "POST", json)
                .then(result => {
                    showThanksModal(objectMessage.done);
                    console.log(result);
                })
                .catch(() => {
                    showThanksModal(objectMessage.error);
                })
                .finally(() => {
                    formsTimer(form, statusMessage, 2000);
                });

        }); //FORM ADDEVENTLISTENER
    } //POSTDATA*/



    function formsTimer(resetElement, removeElement, ms) {
        setTimeout(() => {
            removeElement.remove();
            resetElement.reset();
        }, ms);
    }

    function showThanksModal(status) {
        _modalWIndow__WEBPACK_IMPORTED_MODULE_0__.modalWindow.style.display = "block"; ///do modal window block

        const modalContentFormToNone = document.querySelector(".modal__content form"); //forms = none
        modalContentFormToNone.style.display = "none";
        const modalContent = document.querySelector(".modal__content"); //get empty modal content

        const statusMessageInModal = document.createElement("div"); //create message content for modal window
        statusMessageInModal.innerText = status;
        statusMessageInModal.classList.add("modal__title");

        modalContent.append(statusMessageInModal); // and use it

        setTimeout(() => {
            _modalWIndow__WEBPACK_IMPORTED_MODULE_0__.modalWindow.style.display = "none"; //close modal window
            document.body.style.overflow = "";

            modalContent.removeChild(statusMessageInModal); // and do past modal content
            modalContentFormToNone.style.display = "block";
        }, 4000);
    }
} //forms



/***/ }),

/***/ "./js/modalWIndow.js":
/*!***************************!*\
  !*** ./js/modalWIndow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalWindow": () => /* binding */ modalWindow,
/* harmony export */   "modal": () => /* binding */ modal
/* harmony export */ });

const modalWindow = document.querySelector(".modal");
function modal() {
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


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliderTwo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderTwo */ "./js/sliderTwo.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./js/timer.js");
/* harmony import */ var _tabSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabSwitcher */ "./js/tabSwitcher.js");
/* harmony import */ var _modalWIndow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalWIndow */ "./js/modalWIndow.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms */ "./js/forms.js");
/* harmony import */ var _clases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clases */ "./js/clases.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc */ "./js/calc.js");











(0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(".timer", "2021-08-30T23:47:00");
(0,_sliderTwo__WEBPACK_IMPORTED_MODULE_0__.slider)({
    sliderWrap: ".offer__slider-wrapper",
    innerWrap: ".offerSliderInner",
    slideArray: ".offer__slide",
    mainSlider: ".offer__slider",
    currentNumb: "#current",
    totalNumb: "#total",
    nextButton: ".offer__slider-next",
    prevButton: ".offer__slider-prev"

});
(0,_tabSwitcher__WEBPACK_IMPORTED_MODULE_2__.tabs)(".tabheader__items", ".tabcontent", ".tabheader__item", "tabheader__item_active");
(0,_modalWIndow__WEBPACK_IMPORTED_MODULE_3__.modal)();
(0,_forms__WEBPACK_IMPORTED_MODULE_4__.forms)("form");
(0,_clases__WEBPACK_IMPORTED_MODULE_5__.classes)(".menu__field .container");
(0,_calc__WEBPACK_IMPORTED_MODULE_6__.calc)();


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => /* binding */ postData,
/* harmony export */   "getItemsFromServer": () => /* binding */ getItemsFromServer
/* harmony export */ });
const postData = async (url, method, targetBody) => { //async-await function

    const result = await fetch(url, { //works async
        method: method,
        headers: {
            "Content-type": "application/json"
        },
        body: targetBody
    });

    return await result.json();
};

const getItemsFromServer = async (url) => {     //use async ff for get data
    const data = await fetch(url);
        
    if (!data.ok) {
            throw new Error(`Could not fetch ${url}, status ${data.status}`);
        }

    return await data.json();
};

/***/ }),

/***/ "./js/sliderTwo.js":
/*!*************************!*\
  !*** ./js/sliderTwo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => /* binding */ slider
/* harmony export */ });


function slider({sliderWrap, innerWrap, slideArray, mainSlider, currentNumb, totalNumb, nextButton, prevButton}) {
    const wrapper = document.querySelector(sliderWrap);
    const innerWrapper = document.querySelector(innerWrap);
    const slidersArray = document.querySelectorAll(slideArray);

    const sliderCurrent = document.querySelector(currentNumb);
    const sliderTotal = document.querySelector(totalNumb);
    const btnNext = document.querySelector(nextButton);
    const btnPrev = document.querySelector(prevButton);

    const width = +(window.getComputedStyle(wrapper).width).replace(/\D/gi, ""); //get width of wrapper 

    let index = 1;
    let offset = 0;

    innerWrapper.style.width = `${100 * slidersArray.length}%`; //do width of innerWrapper * array.length
    innerWrapper.style.display = "flex"; //default direction is row
    innerWrapper.style.transition = "all .5s";

    wrapper.style.overflow = "hidden";

    slidersArray.forEach(e => e.style.width = width); //do all slidersPicture = width  

    sliderTotal.innerText = slidersArray.length >= 10 ? slidersArray.length : `0${slidersArray.length}`;

    setCurrent(slidersArray, sliderCurrent);

    btnNext.addEventListener("click", () => {
        index++;
        //default 650                   
        if (offset === width * (slidersArray.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        innerWrapper.style.transform = `translateX(-${offset}px)`;

        setCurrent(slidersArray, sliderCurrent);

        dotsArray.forEach(dot => setDefaultCssText(dot)); //set inline styles
        setActiveCssText(dotsArray[index - 1]);
    });

    btnPrev.addEventListener("click", () => {
        index--;

        if (offset === 0) {
            offset = width * (slidersArray.length - 1);
        } else {
            offset -= width;
        }
        innerWrapper.style.transform = `translateX(-${offset}px)`;

        setCurrent(slidersArray, sliderCurrent);

        dotsArray.forEach(dot => setDefaultCssText(dot));
        setActiveCssText(dotsArray[index - 1]);

    });


    //dots to slider

    const slider = document.querySelector(mainSlider); //get ALL slider
    slider.style.position = "relative"; //dotsField`s position is absolute in slider

    const dotsField = document.createElement("div"); //create dotsField
    dotsField.classList.add("dotsField");
    dotsField.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slidersArray.forEach(() => {
        const createDots = document.createElement("div"); //create dots
        createDots.classList.add("dots");
        dotsField.appendChild(createDots); //and append them to parent
    });

    const dotsArray = dotsField.querySelectorAll(".dots"); //get array of the dots in them field
    dotsArray.forEach((dot, i) => {
        setDefaultCssText(dot);
        setActiveCssText(dotsArray[index - 1]);

        dot.addEventListener("click", function (event) {
            index = i + 1; //set index as i in dots
            setCurrent(slidersArray, sliderCurrent);

            dotsArray.forEach(dot => setDefaultCssText(dot));
            setActiveCssText(event.target);

            offset = parseInt(width, 10) * i; //width * index in dots
            innerWrapper.style.transform = `translateX(-${offset}px)`;
        });
    });

    slider.appendChild(dotsField); //append dotsField to slider


    function setCurrent(array, current) {
        if (index > array.length) {
            index = 1;
        }

        if (index < 1) {
            index = array.length;
        }

        current.textContent = index >= 10 ? index : `0${index}`;
    }

    function setDefaultCssText(element) {
        element.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    }

    function setActiveCssText(element) {
        element.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 40px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #f10;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: 1;
            transition: opacity .6s ease;
            `;
    }

} //slider


/***/ }),

/***/ "./js/tabSwitcher.js":
/*!***************************!*\
  !*** ./js/tabSwitcher.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => /* binding */ tabs
/* harmony export */ });


function tabs(tabHeaderParentClass, tabContent, itemClass, activeClass) {
    const tabheaderItemsParent = document.querySelector(tabHeaderParentClass);
    const tabcontent = document.querySelector(tabContent);

    TabSwitcher(tabheaderItemsParent, tabcontent);

    function TabSwitcher(parent, content) {
        parent.addEventListener("click", (e) => {
            if (e.target && e.target.matches(itemClass)) {

                document.querySelectorAll(itemClass).forEach((item) => {
                    /*get all tabs and toggle classes*/
                    item.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);
            }

            switch (e.target.innerText) {
                /*switch content IMG and describes*/
                case "Фитнес":
                    content.innerHTML =
                        `<img src="img/tabs/vegy.jpg" alt="vegy">
                <div class="tabcontent__descr">
                    Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. 
                    Для людей, которые интересуются спортом; активных и здоровых. 
                    Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
                </div>`;
                    break;

                case "Премиум":
                    content.innerHTML =
                        `<img src="img/tabs/elite.jpg" alt="prem">
                <div class="tabcontent__descr">
                    Меню “Премиум” - мы используем не только красивый дизайн упаковки, 
                    но и качественное исполнение блюд. 
                    Красная рыба, морепродукты, фрукты - ресторанное меню 
                    без похода в ресторан!                                     
                </div>`;
                    break;

                case "Постное":
                    content.innerHTML =
                        `<img src="img/tabs/post.jpg" alt="postnoe">
                <div class="tabcontent__descr">
                    Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов 
                    животного происхождения. Полная гармония с собой и природой в каждом элементе! 
                    Все будет Ом!                                     
                </div>`;
                    break;

                case "Сбалансированное":
                    content.innerHTML =
                        `<img src="img/tabs/hamburger.jpg" alt="balans">
                <div class="tabcontent__descr">
                    Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. 
                    Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                </div>`;
                    break;

            }

        });
    }
} //tabs



/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => /* binding */ timer
/* harmony export */ });


function timer(timerSelector, dateString) {

    function getTimeMS() {
        const between = new Date(dateString) - new Date();
        return between;
    }

    const timerItems = document.querySelector(timerSelector);

    function setTimer(timer) {
        const resultMS = +getTimeMS();
        const seconds = Math.floor((resultMS / 1000) % 60),
            minutes = Math.floor((resultMS / 1000 / 60) % 60),
            hours = Math.floor(((resultMS / (1000 * 60 * 60)) % 24)),
            days = Math.floor((resultMS / (1000 * 60 * 60 * 24)));

            timer.innerHTML = `
            <div class="timer__block">
            <span id="days">${days < 10 ? '0' + days : days}</span>
            дней
        </div>
        <div class="timer__block">
            <span id="hours">${hours < 10 ? '0' + hours : hours}</span>
            часов
        </div>
        <div class="timer__block">
            <span id="minutes">${minutes < 10 ? '0' + minutes : minutes}</span>
            минут
        </div>
        <div class="timer__block">
            <span id="seconds">${seconds < 10 ? '0' + seconds : seconds}</span>
            секунд
        </div>
        `;

        if (+resultMS < 1000) {
            clearInterval(updateTime);

            timer.innerHTML = `
            <div class="timer__block">
            <span id="days">00</span>
            дней
        </div>
        <div class="timer__block">
            <span id="hours">00</span>
            часов
        </div>
        <div class="timer__block">
            <span id="minutes">00</span>
            минут
        </div>
        <div class="timer__block">
            <span id="seconds">00</span>
            секунд
        </div>
        `;
        }
    }

    let updateTime = setInterval(function () {
        setTimer(timerItems);
    }, 1000);

} //timer


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map