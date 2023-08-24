type One = string;
// union type
type Two = string | number;
// leteral type
type Three = "hello";

// convert to more or less specific types

let aI: One = "hello";
let bI = aI as Two; // less specific types
let cI = aI as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
// narrowing down the type
let myVal: string = addOrConcat(2, 2, "concat") as string;
// be careful TS sees no problem - but a string is returned
let newVal: number = addOrConcat(2, 2, "concat") as number;

let goat: string = "goat";

//  the dom

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img");

img.src;
myImg.src;
