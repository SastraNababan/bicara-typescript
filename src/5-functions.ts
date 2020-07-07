/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
// function add(x, y) {
//     return x + y;
// }

// function expression
// const addEx = function (x, y) {
//     return x + y;
// };

// arrow function
// const addArrow = (x, y) => x + y;

// function with no return value
// const hello = (name) => console.log("hello " + name)

// function with callback
// function request(url,cb){

// }

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

/********** 3. Rest Parameter  ***********/
/*
function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
// console.log(fruits);
*/

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// function CT(param) {
//   return param
// }
