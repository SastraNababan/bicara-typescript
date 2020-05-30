"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: "jhon",
};
class Greeter {
    constructor(name, message) {
        this.name = name;
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.name + " " + this.greeting;
    }
}
const a = new Greeter("jhon", "good day");
console.log(a.greet());
function sumx(num1, num2) {
    return num1 + num2;
}
const x = "hello";
const y = 3;
function custom() {
    return 123;
}
const someValue = "this is a string";
const strLength = someValue.length;
console.log(strLength);
const pawel = {
    name: "Pawel Grzybek",
    age: 31,
};
console.log(pawel);
function buildName(firstName, lastName = "marjo") {
    return firstName + " " + lastName;
}
const result1 = buildName("Bob", "marley");
console.log(result1);
const deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            const pickedCard = Math.floor(Math.random() * 52);
            const pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
const suits = ["hearts", "spades", "clubs", "diamonds"];
function identity(arg) {
    return arg;
}
const output = identity("string 123");
console.log(typeof output);
console.log(output);
