"use strict";

export function timer(timerSelector, dateString) {

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
