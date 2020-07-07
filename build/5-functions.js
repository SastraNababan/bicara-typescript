"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z, a = 0) {
    return x + y + a;
}
console.log(add(2, 3));
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('http://typesciptlang.org', fn);
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('valen', 'mayer', 'english');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', '123');
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
CT_generic('hello');
CT_generic(123);
function CT_Overload(param) {
    return param;
}
CT_Overload('hello');
CT_Overload(123);
