export {};

interface User {
  name: string;
  id: number;
}

const user: User = {
  id: 123,
  name: "jhon",
};

class Greeter {
  name: string;
  greeting: string;
  constructor(name: string, message: string) {
    this.name = name;
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.name + " " + this.greeting;
  }
}

const a = new Greeter("jhon", "good day");
console.log(a.greet());

function sumx(num1: number, num2: number): number {
  return num1 + num2;
}

const x = "hello";
const y = 3;

function custom(): number {
  return 123;
}

declare function create(o: object | null): void;

const someValue: any = "this is a string";

const strLength: number = (<string>someValue).length;
// let strLength: number = someValue.length;

console.log(strLength);

interface DudeInterface {
  name: string;
}

interface DudeInterface {
  age: number;
}

interface DudeInterface {
  location?: string;
}

const pawel: DudeInterface = {
  name: "Pawel Grzybek",
  age: 31,
};

console.log(pawel);

function buildName(firstName: string, lastName = "marjo"): string {
  return firstName + " " + lastName;
}

const result1 = buildName("Bob", "marley");
console.log(result1);

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

const deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    // return function () {
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

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

const suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };
// function pickCard(x): any {
//   // Check to see if we're working with an object/array
//   // if so, they gave us the deck and we'll pick the card
//   if (typeof x == "object") {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }
//   // Otherwise just let them pick the card
//   else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [
//   { suit: "diamonds", card: 2 },
//   { suit: "spades", card: 10 },
//   { suit: "hearts", card: 4 },
// ];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// =============
// Generics
// =============

function identity<T>(arg: T): T {
  return arg;
}

// let output = identity<string>("my string");
const output = identity<string>("string 123");

console.log(typeof output);
console.log(output);
