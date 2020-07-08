"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt('Какой последний фильмы Вы смотрели?'),
      assessmentMovie = +prompt('Как вы его оцениваете по десятибальной шкале?'),
      nextLastMovie = prompt('Назовите еще один фильм'),
      nextAssessmentMovie = +prompt('Как оцените его?');

personalMovieDB.movies[lastMovie]=assessmentMovie;
personalMovieDB.movies[nextLastMovie]=nextAssessmentMovie;

console.log(personalMovieDB);