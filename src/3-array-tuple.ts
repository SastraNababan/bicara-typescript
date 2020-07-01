/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
export {};
/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
let list1 = [1, 2, 3, 4];

// square bracket
let list1_2: number[];
list1_2 = [1, 2, 3, 4];

// generic array
let list1_3: Array<number>;
list1_3 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

// generic
let list2: Array<string>;
list2 = ['a', 'b', 'c'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

// type inference
let list3_1 = ['hello', 1, 2, 3];

// square bracket
let list3_2: (string | number)[];
list3_2 = ['hello', 1, 2, 3];

// generic array
let list3_3: Array<string | number>;
list3_3 = ['hello', '1', 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

// don't use type inference for tuple
let list4: [string, number, number, number];
list4 = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface
let list5_1: { color: string; index: number }[];
list5_1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

// generic array
let list5_2: Array<{ color: string; index: number }>;
list5_2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *   [1, 2],
 *   [3, 4],
 * ];
 */

// let matrix: number[][];
let matrix: Array<Array<number>>;
matrix = [
    [1, 2],
    [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d] = [1, 2, 3, 'four'];
 */

let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
