"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fn = () => null;
function submitContact(firstName, lastName, languange = "english", gender) {
    return Object.assign({ fullName: firstName + " " + lastName, languange }, (gender && { gender }));
}
let result = submitContact("valen", "mayer");
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection("Apple", "Mango", "Avocado");
console.log(fruits);
function CT_Union(param1) {
    return param1;
}
CT_Union(12);
function CT_Generic(param) {
    return param;
}
CT_Generic("hello");
CT_Generic(123);
CT_Generic(true);
function CT_Any(param) {
    return "string";
}
CT_Any(123);
function CT_Overload(param) {
    return param;
}
CT_Overload("hello");
CT_Overload(123);
