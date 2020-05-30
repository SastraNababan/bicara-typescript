/* eslint-disable prefer-const */

let a; // undefined
let b: boolean;
b = true; // boolean
// let b: boolean = true; // boolean
let c = 1; // number
let d = "hello"; // string
// let e = 100n; // big int (starting ES2020)
let f = Symbol("Sym"); // symbol  (starting ES2015)
let g = function () {
  return null;
}; // function
let h = null; // null ( special primitive )
let i = {}; // Object Literal
let j: [] = []; // array

class Product {
  //...
}

let k = new Product();

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
// console.log(typeof e)
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);

// union
let code: string | number;
code = "hello world";
code = 321;
console.log(code);

// any
let codex: any;
codex = true;
codex = "hello";
codex = 123;
codex = [];
console.log(codex);

function sum(a: number, b: number) {
  // todo: validation
  return a + b;
}

type MyType = string | number;
let codez: MyType;
codez = "hello";
codez = 123;
// codez = [];
