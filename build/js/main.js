"use strict";
// ==== Type Assertion or Type Casting ==========
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // do't work in react
let e = 'world'; // do't work in react
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string //  not ok
10;
// The DOM
const img = document.querySelector('img'); // '!' - nut null
const myImg = document.getElementById('#img');
img.src;
