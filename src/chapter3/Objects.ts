let stringArray: string[] = ["one", "two", "three", "four", "five"];

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

let goatArray: string[][] = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g"],
  ["h", "i"],
];

// Tuple
let myTuple: [string, number, boolean] = ["a", 56, true];

// Objects

let myObj: object;

const exampleObj = {
  prop1: "sam",
  prop2: true,
};
exampleObj.prop1 = "jhon";

interface GuitaristZ {
  name?: string;
  active?: boolean; // the question make makes it optional
  albums: (string | number)[];
}
// type Guitarist = {
//   name: string;
//   active?: boolean; // the question make makes it optional
//   albums: (string | number)[];
// };

let evh: Guitarist = {
  name: "jhon",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let JP: Guitarist = {
  name: "jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    // perform operation on an undifined variable you have to make it undefined
    return `Hello ${guitarist.name?.toLocaleLowerCase}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(JP));

//ENums
enum Grade {
  U,
  D,
  C,
  B,
  A,
  E,
  F,
}
