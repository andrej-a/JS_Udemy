"use strict";

import {slider} from "./sliderTwo";
import {timer} from "./timer";
import {tabs} from "./tabSwitcher";
import {modal} from "./modalWIndow";
import {forms} from "./forms";
import {classes} from "./clases";
import {calc} from "./calc";


timer(".timer", "2021-08-30T23:47:00");
slider({
    sliderWrap: ".offer__slider-wrapper",
    innerWrap: ".offerSliderInner",
    slideArray: ".offer__slide",
    mainSlider: ".offer__slider",
    currentNumb: "#current",
    totalNumb: "#total",
    nextButton: ".offer__slider-next",
    prevButton: ".offer__slider-prev"

});
tabs(".tabheader__items", ".tabcontent", ".tabheader__item", "tabheader__item_active");
modal();
forms("form");
classes(".menu__field .container");
calc();
