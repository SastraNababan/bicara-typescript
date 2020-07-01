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

class Product {
  // class
  //...
}
let k = new Product();

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity
