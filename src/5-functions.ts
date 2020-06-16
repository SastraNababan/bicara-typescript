/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {}; // quick fix for global variable

/**
 * 1. function declaration & expression
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. function declaration & expression  ***********/
/* 

// function declaration
function add(x, y) {
  return x + y;
}

// function expression
const add = function(x,y){
  return x + y
}

// arrow function
const add = (x, y) => x + y;

// function with no return value
const hello = (name) => console.log("hello " + name)

// function with callback
function request(url,cb){

}

*/

/********** 2. optional & default parameters  ***********/
/*
  - firstName & lastName parameters are required  
  - languange is optional dan has default value = english
  - gender optional
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

//========= Solution =========
const fn = () => null;
function submitContact(
  firstName: string,
  lastName: string,
  languange = "english",
  gender?: string
) {
  return {
    fullName: firstName + " " + lastName,
    languange,
    // gender,
    ...(gender && { gender }),
  };
}
let result = submitContact("valen", "mayer");
console.log(result);

/********** 3. Rest Parameter  ***********/
/*
function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
*/

//========= Solution  =========

// function fruitsCollection(item: string, ...restItems: (string | number)[]) {
function fruitsCollection(item: string, ...restItems: string[]) {
  return item + " " + restItems.join(" ");
}

let fruits = fruitsCollection("Apple", "Mango", "Avocado");
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
//========= Solution 1: Union  =========

function CT_Union(param1: string | number): string | number {
  return param1;
}
CT_Union(12);

//========= Solution 2: Generic =========
function CT_Generic<T>(param: T): T {
  return param;
}
CT_Generic("hello");
CT_Generic(123);
CT_Generic(true);

function CT_Any(param: any): any {
  return "string";
}

CT_Any(123);

//========= Solution 3: Overloading  =========
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: any): any {
  return param;
}

CT_Overload("hello");
CT_Overload(123);
