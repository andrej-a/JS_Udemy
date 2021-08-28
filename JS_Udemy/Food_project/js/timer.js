"use strict";

function getTimeMS(string) {
    const now = new Date();
    const finish = new Date(string);
    const between = finish - now;
    return between;
}


const timerItems = document.querySelector(".timer");

function setTimer() {
const resultMS = +getTimeMS("2021-08-28T13:30:00");
const seconds =  Math.floor( (resultMS / 1000) % 60 ),
        minutes = Math.floor( (resultMS / 1000 / 60) % 60 ),
        hours = Math.floor( ((resultMS / (1000 * 60 * 60)) % 24) ),
        days = Math.floor( (resultMS / (1000 * 60 * 60 * 24)) );

        timerItems.innerHTML = `
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

            timerItems.innerHTML = `
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

let updateTime = setInterval(function() {
    setTimer();
}, 1000); 
