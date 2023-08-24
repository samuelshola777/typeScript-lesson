"use strict";
// convert to more or less specific types
let aI = "hello";
let bI = aI; // less specific types
let cI = aI; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// narrowing down the type
let myVal = addOrConcat(2, 2, "concat");
// be careful TS sees no problem - but a string is returned
let newVal = addOrConcat(2, 2, "concat");
let goat = "goat";
//  the dom
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
