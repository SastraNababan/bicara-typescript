/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */

export { }; // quick fix for global variable

/**
 * Array
 * 1. Array of Number [1,2,3,4]
 * 2. Array of String ['a', 'b', 'c']
 * 3. Tuple Array  ( Fixed ) [1,'a']
 * 4. Tuple Array ( Dynamic ) ['a','b', 1, 2]
 * 5. Array of Object [{}]
 * 6. Array multi dimension [[]]
 * 7. Destructuring
 */

/********** 1. Array of Number [1,2,3,4] ***********/
// let list = [1, 2, 3, 4]; // type infere
// let list: number[]; // square bracket
let list: Array<number>; // generic array
list = [1, 2, 3, 4];
console.log(list);

/********** 2. Array of String ['a', 'b', 'c'] ***********/
let list2: number[];
// let list2: Array<string>;
list2 = ["hello", "world", "test"];

/********** 3. Tuple Array  ( Fixed ) [1,'a'] ***********/
let list3: [string, number];
list3 = ["hello", 1];


// Tips : don't use type inference for tuple
let list3_1 = ["hello", 1];
list3_1 = [1, 2, 3];

/********** 4. Tuple Array ( Dynamic ) ['a','b', 1, 2] ***********/
// let list4:(string | number )[];
let list4: Array<string | number>; // union
list4 = ["apple", 1, "apple", 123];

/********** 5. Array of Object [{}] ***********/
// let list5: { color: string; index: number }[]; // inline interface
let list5: Array<{ color: string; index: number }>;
list5 = [
  { color: "blue", index: 1 },
  { color: "red", index: 2 },
];

list5.push({ color: "green", index: 3 });
console.log(list5);

/********** 6. Array multi dimension [[]] ***********/
let matrix: number[][];
// let matrix: Array<Array<number>>;
matrix = [
  [1, 2],
  [3, 4],
];

// let matrixTuple: (number | string)[][];
let matrixTuple: Array<Array<number | string>>;
matrixTuple = [
  ["one", 1],
  [2, "two"],
];

/********** 7. Destructuring ***********/
// Destructuring
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, "four"];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
