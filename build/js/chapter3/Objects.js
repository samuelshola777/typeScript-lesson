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
// type Guitarist = {
//   name: string;
//   active?: boolean; // the question make makes it optional
//   albums: (string | number)[];
// };
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
    var _a;
    if (guitarist.name) {
        // perform operation on an undifined variable you have to make it undefined
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(JP));
//ENums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["E"] = 5] = "E";
    Grade[Grade["F"] = 6] = "F";
})(Grade || (Grade = {}));
