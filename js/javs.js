"use strict";

let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for(let i = 1; i < 8; i++){
    if(i === 6) break; // заканчивает for
    else if(i === 3) continue; //Пропускает цикл
    console.log(i);
}
