"use strict";
// Literal types that
let myName;
let userName;
userName = "Amy";
// let sendMail (k: string, r: string): string=>{
// return k+r
// }
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello world");
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
function subtract2(c, d) {
    return d - c;
}
let multiply = function (c, d) {
    return c * d;
};
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b * c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// rest parameters
const total = (...noActualLenghtOfNumber) => {
    return noActualLenghtOfNumber.reduce((prev, curr) => prev + curr);
};
// the never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// ne never type example
const nuberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    //  if(typeof value === 'number') return 'number';
    return createError("this should never happen!");
};
