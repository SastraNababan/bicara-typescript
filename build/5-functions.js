"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
const hello = (name) => console.log('hello ' + name);
function request(url, cb) {
    console.log(url);
    cb('test');
}
