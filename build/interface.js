"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function submitContant({ firstName, lastName, languange = "english", gender, }) {
    return {
        fullName: firstName + " " + lastName,
        languange,
        gender,
    };
}
let inputContact = {
    firstName: "Valen",
    lastName: "Mayer",
    languange: "english",
    gender: "male",
};
let result1 = submitContant(inputContact);
console.log(result1);
