"use strict";

const app = '112';

const number = 1;


// Анонимная самовызывающаяся функция
(function () {
    let number = 2;
    console.log(number);
    console.log(number + 3);
} ()); 

console.log(number);

// Объектный интерфейс
const user = (function () {
    const privat = function () {
        console.log('Приватная функция!');
    };

    return {
        sayHello:privat
    };
}());

user.sayHello();