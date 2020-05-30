/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined
let b = true;           // boolean
let c = 1;              // number
let d = "hello";        // string
let e = 100n;           // big int (starting ES2020)
let f = Symbol("Sym");  // symbol  (starting ES2015)
let g = function () {   // function
  return null;
};
let h = null;           // null ( special primitive )
let i = {};             // Object Literal
let j = [];             // array

class Product {         // class
  //...
}
let k = new Product();

/********** undefined vs null vs not defined ***********/
// console.log(a); // undefined
// console.log(g); // null
// console.log(nothingx)   // ReferenceError:  Not defined

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof Product);

// 2. Re-Assign
let num;
num = 1;
num = "hello";
num = [];
console.log(num);

// with dynamic type comes great responsiblity
function sum(a, b) {
  // todo: validation
  return a + b;
}

let arg1 = 4;
let arg2 = "5";
let result = sum(arg1, arg2);
console.log(result);

function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
console.log(fruitsCollection("apple", "manggo", "durian"));
