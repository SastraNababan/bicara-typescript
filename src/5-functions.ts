/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. basic functions : declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overloads
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number, a = 0): number {
  return x + y + a;
}

console.log(add(2, 3));

// function expression
const addEx = function (x: number, y: number): number {
  return x + y;
};

// arrow function
const addArrow = (x: number, y: number): number => x + y;

type Greeter = (message: string) => void;
// function with callback
function request(url: string, cb: Greeter) {
  cb(url);
}

let fn = (str: string) => console.log(str);
request('http://typesciptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
  firstName: string;
  lastName: string;
  gender?: string;
  languange: string;
};

function submitContact(
  firstName: string,
  lastName: string,
  languange = 'english',
  gender?: string,
): Contact {
  return {
    firstName: firstName,
    lastName: lastName,
    languange,
    ...(gender && { gender }),
  };
}
let result = submitContact('valen', 'mayer', 'english');
console.log(result);

/********** 3. Rest Parameter  ***********/
function fruitsCollection(item: string, ...restItems: string[]) {
  return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', '123');

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// solution 1 : union
function CT(param: string | number): string | number {
  return param;
}

// solution 2: generic
// type variabel -> deteksi type data dari caller
function CT_generic<T>(param: T): T {
  return param;
}

CT_generic<string>('hello');
CT_generic<number>(123);

// solution 3: overloading
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: any): any {
  return param;
}

CT_Overload('hello');
CT_Overload(123);
// CT_Overload(true);
