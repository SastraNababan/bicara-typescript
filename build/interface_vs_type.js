"use strict";
class PointImplementation {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}
const thePoint = new PointImplementation(1, 2);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let anim;
let node;
node: "hadfd";
let node2;
node2: 123;
