"use strict";

const sliderCurrent = document.querySelector("#current");
const sliderTotal = document.querySelector("#total");
const slidersArray = document.querySelectorAll(".offer__slide");

const btnNext = document.querySelector(".offer__slider-next");
const btnPrev = document.querySelector(".offer__slider-prev");
let index = 1;

sliderTotal.innerText = slidersArray.length >= 10 ? slidersArray.length : `0${slidersArray.length}`;

checkIndex(index);


function checkIndex(i) {
    if (i > slidersArray.length) {
        index = 1;
    }

    if (i < 1) {
        index = slidersArray.length;
    }

    slidersArray.forEach(item => {
        item.style.display = 'none';
    });

    slidersArray[index - 1].style.display = 'block';

    
    sliderCurrent.textContent = i >= 10 ? i : `0${index}`;
    
} 

btnNext.addEventListener('click', () => {
    checkIndex(++index);
});

btnPrev.addEventListener('click', () => {
    checkIndex(--index);
});
