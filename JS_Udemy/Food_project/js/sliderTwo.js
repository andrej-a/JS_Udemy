"use strict";

const wrapper = document.querySelector(".offer__slider-wrapper");
const innerWrapper = document.querySelector(".offerSliderInner");
const slidersArray = document.querySelectorAll(".offer__slide");

const sliderCurrent = document.querySelector("#current");
const sliderTotal = document.querySelector("#total");
const btnNext = document.querySelector(".offer__slider-next");
const btnPrev = document.querySelector(".offer__slider-prev");

const width = +(window.getComputedStyle(wrapper).width).replace(/\D/gi, ""); //get width of wrapper 

let index = 1;
let offset = 0;

innerWrapper.style.width = `${100 * slidersArray.length}%`; //do width of innerWrapper * array.length
innerWrapper.style.display = "flex"; //default direction is row
innerWrapper.style.transition = "all .5s";

wrapper.style.overflow = "hidden";

slidersArray.forEach(e =>  e.style.width = width);  //do all slidersPicture = width  

sliderTotal.innerText = slidersArray.length >= 10 ? slidersArray.length : `0${slidersArray.length}`;

setCurrent();       

btnNext.addEventListener("click", () => {
    index++;
                        //default 650                   
    if (offset === width * (slidersArray.length - 1)) {
        offset = 0;
    } else {
        offset += width;
    }
    innerWrapper.style.transform = `translateX(-${offset}px)`;

    setCurrent();

    dotsArray.forEach(dot => setDefaultCssText(dot));       //set inline styles
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

    setCurrent();

    dotsArray.forEach(dot => setDefaultCssText(dot));
    setActiveCssText(dotsArray[index - 1]);    
 
});


//dots to slider

const slider = document.querySelector(".offer__slider");    //get ALL slider
slider.style.position = "relative";     //dotsField`s position is absolute in slider

const dotsField = document.createElement("div");    //create dotsField
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
    const createDots = document.createElement("div");       //create dots
    createDots.classList.add("dots");
    dotsField.appendChild(createDots);      //and append them to parent
});

const dotsArray = dotsField.querySelectorAll(".dots");      //get array of the dots in them field
dotsArray.forEach((dot, i) => {
    setDefaultCssText(dot);
    setActiveCssText(dotsArray[index - 1]);

    dot.addEventListener("click", function (event) {
        index = i + 1;      //set index as i in dots
        setCurrent();

        dotsArray.forEach(dot => setDefaultCssText(dot));
        setActiveCssText(event.target); 

        offset = parseInt(width, 10) * i;       //width * index in dots
        innerWrapper.style.transform = `translateX(-${offset}px)`;
    });
});

slider.appendChild(dotsField);      //append dotsField to slider


function setCurrent() {
    if (index > slidersArray.length) {
        index = 1;
    }

    if (index < 1) {
        index = slidersArray.length;
    }

    sliderCurrent.textContent = index >= 10 ? index : `0${index}`;
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
