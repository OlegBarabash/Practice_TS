"use strict";
// ======== Type Aliases ========
// interface UserId2 = stringOrNumber // not ok
// ========== Literal type ========
let myName;
let userName;
userName = 'John';
// ======= functions ==========
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3)) // not ok 
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(5, 3));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// ====== optional parameters =========
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// ===== Resp Parameters ====
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// ==== never type ===
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // with out the type is NEVER!!!!
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'string'
        ? true : false;
};
// use of the NEVER type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
