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

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}
else if(personalMovieDB.count >= 10 && 30 <= personalMovieDB.count){
    console.log('Неплохой пулл фильмов!');
} 
else if(personalMovieDB.count > 30) {
    console.log('Да ты киномонстр! Столько фильмов... ');
} else {
    console.log('Ошибка в ведении кол-ва фильмов.')
}

console.log(personalMovieDB);