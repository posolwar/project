"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('text');
    }
};

const {width,height} = options;
console.log(width);
// console.log(options.colors);"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('text');
    }
};

const {width,height} = options;
console.log(width);
// console.log(options.colors);

// delete options.name;

// console.log(options);

for (let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

// delete options.name;

// console.log(options);

for (let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}