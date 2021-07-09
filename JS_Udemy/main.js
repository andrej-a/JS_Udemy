'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "0");


const personaMovieDB = {
    count: `${numberOfFilms}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personaMovieDB.count <= 10) {
    console.log('Просмотрено мало фильмов!');
} else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
    console.log('Зритель!');
} else {
    console.log('Киноман!');
}


console.log(personaMovieDB);
