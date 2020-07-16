"use strict";
// const heart = document.querySelectorAll('.heart');

// heart.forEach(item =>{
//   console.log(item);
// }
// );

const box = document.querySelector('#box'),
      btns = document.querySelectorAll('button'),
      circles = document.querySelectorAll('.circle'),
      wrapper = document.querySelector('.wrapper'),
      heart = wrapper.querySelectorAll('.heart'),
      oneHeart = heart[0];

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
console.log(box);

// btns[0].style.borderRadius = '100%';

// circles.forEach(item =>{
//   item.style.backgroundColor = "red";
// });

// box.style.cssText = 'background-color: blue; width: 500px;';


const creatDiv = document.createElement('div');
// const createText = document.createTextNode('Тут был ты');

creatDiv.classList.add('black');

// document.querySelector('.wrapper').append(creatDiv);
document.querySelector('.wrapper').prepend(creatDiv);
// heart[0].after(creatDiv); //after.
// circles[0].remove();
// heart[0].replaceWith(box);

creatDiv.innerHTML = "<h1>Hello</h1>";
// creatDiv.textContent = 'hello';

creatDiv.insertAdjacentHTML('beforebegin','<h2>hello</h2>');"use strict";
// const heart = document.querySelectorAll('.heart');

// heart.forEach(item =>{
//   console.log(item);
// }
// );
