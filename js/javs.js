"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('Вспомните какой-либо из просмотренных фильмов и напишите название фильма'),
          b = +prompt('Поставьте ему оценку от 0 до 10');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        alert('Данные введены верно');
    } else {
        alert('Данные ведены неверно! Название фильма должно содержать менее 50ти символов и более 0');
        i--;
    }
}
console.log(personalMovieDB);