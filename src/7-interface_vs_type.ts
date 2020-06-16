/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Interface
 * 1. Compose Object
 * 2. Function Type
 * 3. Indexable Properties ( array )
 * 3. Merge
 * 4. Extends
 * 5. Implements
 *
 */

/**
 * inconsisten data structure
 */
// let people = {
//   name: "jhon",
//   city: "jakarta",
//   age: "18",
// };

// people = {
//   name: "joko",
//   city: "medan",
//   age: 20,
//   id: 1,
// };

/** Solution */

// interface People {
//   name: string;
//   city: string;
//   age: number;
// }

// let people: People;

// people = {
//   name: "jhon",
//   city: "jakarta",
//   age: 18,
// };

// console.log(people);

interface Point {
  x: number;
  y: number;
  distance(other: Point): number;
}

class PointImplementation implements Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distance(other: Point): number {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
    );
  }
}

const thePoint = new PointImplementation(1, 2);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// class Child extends Person {}

// }

class Man implements Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// interface Crazy {
//   new (): {
//     hello: number;
//   };
// }

// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 };
//   }
// }
// // Because
// const crazy = new CrazyClass(); // crazy would be {hello:123}

type Name = string;
type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
type NameOrResolver = string | void;
// function getName(n: NameOrResolver): Name {
//   if (typeof n === "string") {
//     return n;
//   } else {
//     return n();
//   }
// }

// console.log(getName(() => "hello"));

type Alias = { num: number };
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type Easing = "ease-in" | "ease-out" | "ease-in-out" | 123;

let anim: Easing;

type Container<T> = { value: T };

let node: Container<string>;
node: "hadfd";

let node2: Container<number>;
node2: 123;

// type Hungry = {
//   name: string;
//   status: boolean;
// };

// let People: Hungry;
// People = {
//   name: "people",
//   status: true,
// };

// interface IPerson {
//   name: string;
//   hungry: boolean;
// }

// type Personx = {
//   name: string;
//   hungry: boolean;
// };

// let jhon: IPerson;
// jhon = {
//   name: "jhon",
// };

// let harry: Personx = {
//   name: "harry",
// };
