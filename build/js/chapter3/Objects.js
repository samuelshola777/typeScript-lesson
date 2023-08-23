"use strict";
let stringArray = ["one", "two", "three", "four", "five"];
let guitar = ["strat", "les Paul", 5150];
let mixedData = ["EVH", 1984, true];
// Arrays
let nestedArray = [
    ["strat", "boneshaker"],
    ["strat", "boneshaker"],
    [3, 43, 33],
    [
        [212, 532, 7483],
        [32, 5342, 784, 892],
        [33, 43, 33],
    ],
];
let goatArray = [
    ["a", "b", "c"],
    ["d", "e"],
    ["f", "g"],
    ["h", "i"],
];
// Tuple
let myTuple = ["a", 56, true];
// Objects
let myObj;
const exampleObj = {
    prop1: "sam",
    prop2: true,
};
exampleObj.prop1 = "jhon";
let evh = {
    name: "jhon",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let JP = {
    name: "jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
