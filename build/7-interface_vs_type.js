"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: 'user 1',
    age: 22,
};
const user2 = {
    name: 'user 1',
    age: 22,
};
const mySong = {
    songName: 'test',
    artistName: 'hey',
};
let myIntersection;
myIntersection = {
    id: 1,
    propA: 'propA',
    propB: 'propB',
};
let myUnion;
myUnion = {
    id: 1,
    propA: 'propA',
};
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hello = '';
    }
    getName(id) {
        const name = 'jhon';
        return name;
    }
}
let p = new People('jj', 123);
