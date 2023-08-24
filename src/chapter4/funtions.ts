// Type ALiases
type stringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active?: boolean; // the question make makes it optional
  albums: StringOrNumberArray;
};
type UserId = stringOrNumber;

// Literal types that
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

userName = "Amy";

// let sendMail (k: string, r: string): string=>{
// return k+r
// }

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello world");

logMsg(add(1, 2));

let subtract = function (c: number, d: number): number {
  return c - d;
};
function subtract2(c: number, d: number): number {
  return d - c;
}
// a type can also be made a  function

// interface mathFunction {
//     (a: number, b: number) : number;
// }
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };
logMsg(multiply(2, 2));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

// rest parameters

const total = (...noActualLenghtOfNumber: number[]): number => {
  return noActualLenghtOfNumber.reduce((prev, curr) => prev + curr);
};

// the never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
// ne never type example
const nuberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  //  if(typeof value === 'number') return 'number';
  return createError("this should never happen!");
};
