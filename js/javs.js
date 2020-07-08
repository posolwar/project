"use strict";
const number = 10;


if(number < 10)
    console.log('so small');
else if(number > 10)
    console.log('so big');
else
    console.log('ok!');

(number == 10) ? console.log('ok#2') : console.log('not ok');

switch(number) {
    case 10:
        console.log('it is 10');
        break;
    case 9:
        console.log('it is 9');
        break;
    default:
        console.log('it is not 9 and 10');
        break;
}