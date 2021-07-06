'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "0");

const personaMovieDB = {
    count: `${numberOfFilms}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('Последний просмотренный?', '');
    let score = prompt('Оцените его?', '');
    personaMovieDB.movies[`${lastFilm}`] = score;    
}


console.log(personaMovieDB);