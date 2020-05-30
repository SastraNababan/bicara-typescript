/**
 * 1. Basic Types
 * Boolean
 * Number
 * String
 * Array
 * Tuple
 * Enum
 * Any
 * Void
 * Null & Undefined
 * Never
 * Object
 * Type Assertions
 */

// let isDone: boolean = false;
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

const isDone = false;
const decimal = 6;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;

// let hello = "hello world"
// hello = 123

const hello = "hello world";
console.log(typeof hello);

let isVisible: boolean;
isVisible = true;

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Arary of Hybrid Type ( Fixed )
 * 4. Arary of Hybrid Type ( Dynamic )
 * 4. Array of Object
 * 5. Array multi dimension
 * 6. Object of Object
 */

// JS
let listVanilla = [];
listVanilla = ["a", "b", "c"];
listVanilla = [1, 2, 3];
listVanilla = ["a", "b", "c", 1, 2, 3];
listVanilla = [{ index: 1 }, { index: 2 }, { index: 3 }];

// TypeScript
let list: number[]; // standar
// let list:Array<number>; // generic array type
list = [1, 2, 3, 4];

let list2: string[];
// let list2: Array<string>;
list2 = ["hello", "world"];

let list3: [string, number];
list3 = ["hello", 1];

// let list4:(string | number )[];
let list4: Array<string | number>;
list4 = ["apple", 1, "apple", 123];

// inline interface
// let list5:{color:string, index:number} [];
let list5: Array<{ color: string; index: number }>;
list5 = [
  { color: "blue", index: 1 },
  { color: "red", index: 2 },
];

// console.log(list5[0].color)

// interface
interface Color {
  color: string;
  index: number;
}

let list51: Color[];
list51 = [
  { color: "blue", index: 1 },
  { color: "red", index: 2 },
];

// console.log(list51[0].color)

/**
 * Object
 */
