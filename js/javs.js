"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health:100
};

// john.__proto__ = soldier;
Object.setPrototypeOf(john,soldier); // идентично предыдущей записи


john.sayHello();

