"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let list;
list = [1, 2, 3, 4];
list = [2, 3, 4];
console.log(list);
let list2;
list2 = ["hello", "world", "test"];
console.log(list2);
let list3;
list3 = ["hello", 1];
console.log(list3);
let list3_1 = ["hello", 1];
list3_1 = [1, 2, 3];
let list3_2;
list3_2 = [4, 2, 5];
let list4;
list4 = ["apple", 1, "apple", 123];
let list5;
list5 = [
    { color: "blue", index: 1 },
    { color: "red", index: 2 },
];
list5.push({ color: "green", index: 3 });
console.log(list5);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
];
let matrixTuple;
matrixTuple = [
    ["one", 1],
    [2, "two"],
];
let [a, b, c, d] = [1, 2, 3, "four"];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
