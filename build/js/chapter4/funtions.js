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
const sumAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
