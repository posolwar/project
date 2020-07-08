'use sctrict';
 
// let a = "Kostya";
// let b = "Gor";
// const ab = (a,b) => a+b;
// console.log(ab(a,b));

/*methods*/
const str = 'TEst';
//console.log(`Сейчас я провожу ${str}`);

console.log(`${str.toUpperCase()} и ${str.toLowerCase()}`);

let fruit ="Some fruit";

console.log(fruit.indexOf("fruit")); 
//Покажет цифру 5, фрут начинается после 5го символа
// Если же слово не найдет, (при поиске другого слова) то значение будет "-1"

const logg = 'Hello world';
console.log(logg.slice());
// Первое значение указывает откуда начать, второе где закончить вырезание строки.

console.log(logg.substr(6,4));//Откуда начать и сколько символов вырезать

let numb = "12.4px";
console.log(numb.parseInt()); //12
console.log(numb.parseFloat());//12.4

