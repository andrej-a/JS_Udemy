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

const list = document.querySelector(".promo__interactive-list");
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


function getListArray(array) {
    movieDB.movies.sort();
    list.innerHTML = '';
   array.forEach(function (item, i) {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${item}
            <div class="delete"></div>
        </li>
    `;
}); 
document.querySelectorAll(".delete").forEach(function(btn, numb) {
    btn.addEventListener("click", function() {
        array.splice(numb, 1);
        getListArray(movieDB.movies);
    });  
});
}

getListArray(movieDB.movies);

function checkLength(string, num) {
    if (string.length > num) {
        return string.substr(0, num) + "...";
    } else {
        return string;
    }
}

function checkBox(elem) {
    if (elem.checked) {
        alert("Добавлен любимый фильм");
    }
}

 
const buttonAdd = document.querySelector("[data-buttonAdd]"),
      checkbox = document.querySelector("[data-checkbox]");
      
buttonAdd.addEventListener("click", function(e) {
    e.preventDefault();

    const inputAdd = document.querySelector(".adding__input");

    if (!inputAdd.value) {
        alert("Введите данные!");
    } else {
        movieDB.movies.push( checkLength(inputAdd.value, 21) );
        getListArray(movieDB.movies);
        inputAdd.value = '';
        checkBox(checkbox);
    }  
});


