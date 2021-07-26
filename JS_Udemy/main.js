'use strict';

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        personaMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");

        while (personaMovieDB.count === '' || personaMovieDB.count === null || isNaN(personaMovieDB.count)) {

            personaMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        }

    },

    rememberMyFilms: function () {
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
    },

    detectLevel: function () {
        if (personaMovieDB.count <= 10) {
            console.log('Просмотрено мало фильмов!');
        } else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
            console.log('Зритель!');
        } else {
            console.log('Киноман!');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personaMovieDB);
        }
    },

    writeMyGenres: function (array) {
        for (let i = 1; i <= 3; i++) {
            let favoriteGenres = prompt(`Ваш любимый жанр номер ${i}`);
            if (favoriteGenres === null || favoriteGenres === "") {
                i--;
            } else {
                array.push(favoriteGenres);
            }
        }

        array.forEach(function(elem, i, array) {
            console.log(`Любимый жанр ${i + 1} -- ${array[i]}`);
        });
    },

    toogleVisibleMyDB: function(hidden) {
       if (!hidden) {
           hidden = true;
       } else {
           hidden = false;
           personaMovieDB.showMyDB(hidden);
       } 
        console.log(hidden);
    },

};


personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectLevel();
personaMovieDB.writeMyGenres(personaMovieDB.genres);
personaMovieDB.toogleVisibleMyDB(personaMovieDB.privat);
