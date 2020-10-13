/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

// Type inference(Implicit)
let ti = 'hello';
// ti = 123

// Type annotations(explicit)
let ta: string;
ta = 'hello ts';
// ta = [1, 2, 3]

/********** Javascript Types ***********/

let a; // undefined
let b: boolean;
b = true; // boolean

let c: number;
c = 1; // number

let d: string;
d = 'hello'; // string

let e: bigint;
// e = 100n; // big int (starting ES2020 / ES11)

let f: symbol;
f = Symbol('Sym'); // symbol

let g: () => void;
g = function () {
  // function
  return 123;
};

let h: null;
h = null; // null ( special primitive )

let i: Record<string, unknown>; // Object Literal
i = {};

let j: []; // array .map, .push, .pop
j = [];

class Product {
  // class
  //...
}

let k = new Product(); // object

// let z: any;
// z = 123;
// z = 'hello';
// z = [1, 2, 3];

// with dynamic type comes great responsiblity
function sum(a: number, b: number): void {
  // todo: validation
  // return a + b;
  // return "12"
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);

// union
let multi: string | number; // string | number
multi = 'hello';
multi = 123;
// multi = true;

// type aliases
type CustomType = string | number;
let myType: CustomType;
myType = 'hello';
myType = 123;
