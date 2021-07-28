'use strict';

/*Delete all advertising blocks on the right side of page*/

const parentAdBlocks = document.querySelector(".promo__adv").innerHTML = "";

/*Change genre of films*/

function changeGenre(elem, newGenre) {
    elem.innerText = newGenre;
}

const promoGenre = document.querySelector(".promo__genre");
changeGenre(promoGenre, 'Драма');

/*Change background of the poster*/

const promoBG = document.querySelector(".promo__bg");
promoBG.style.backgroundImage = "url('img/bg.jpg')";

/*Change list of films on the page and add numbering*/

const movieDB = {
    movies: [
        "Логан",
        "Лига справдливости",
        "Ла-ла-лэнд",
        "Одержимость",
        "Скотт Пилигримм против...",
        "1917",
    ]
};
movieDB.movies.sort();

const list = document.querySelector(".promo__interactive-list");
list.innerHTML = '';

movieDB.movies.forEach(function (item, i) {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
});
