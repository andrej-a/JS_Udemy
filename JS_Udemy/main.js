'use strict';
let numberOfFilms;

const personaMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start(callback) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {

        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
    }

    personaMovieDB.count = numberOfFilms;
    callback();
}
start(rememberMyFilms);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilm = prompt('Последний просмотренный?', '');
        if (lastWatchedFilm === null || lastWatchedFilm === "" || lastWatchedFilm.length > 50) {
            i--;
        } else {
            let score = prompt('Как оцените его?', '');
            if (score === null || score === '') {
                i--;
            } else {
                personaMovieDB.movies[lastWatchedFilm] = score;
            }
        }

    }
}

function detectLevel() {
    if (personaMovieDB.count <= 10) {
        console.log('Просмотрено мало фильмов!');
    } else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
        console.log('Зритель!');
    } else {
        console.log('Киноман!');
    }
}
detectLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personaMovieDB);
    }
}

function writeMyGenres(array) {
    for(let i = 1; i <= 3; i++) {
        array.push(prompt(`Ваш любимый жанр номер ${i}`));
    }
}
writeMyGenres(personaMovieDB.genres);


showMyDB(personaMovieDB.privat);




