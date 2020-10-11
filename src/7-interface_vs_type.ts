/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

type myType = {
    name: string;
};

interface myInterface {
    name: string;
}

/**
 * 1. Aliases & Object
 */

type MyType = string | number;
// interface can't do type aliases, interface & union

// object

interface IUserx {
    name: string;
    age: number;
}

type TUserx = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
}

type TUser = {
    name: string;
    age: number;
};

const user1: TUser = {
    name: 'user 1',
    age: 22,
};
const user2: IUser = {
    name: 'user 1',
    age: 22,
};

/**
 * 2. Merge Types
 */

interface Song {
    artistName: string;
    songName: string;
}

interface Song {
    songName: string;
}

const mySong: Song = {
    songName: 'test',
    artistName: 'hey',
};

// * type can't merge
// type Song1 = {
//     artistName: string;
// };

// type Song2 = {
//     songName: string;
// };

// type Song = Song1 & Song2; // intersection

// const song: Song = {
//     artistName: 'Freddie',
//     songName: 'The Chain',
// };

/**
 * 3. Intersection & Union
 * typeA & typeB
 * intersection interface, if same name, type must be same
 * type can use to intersect interface
 */

type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

type IntersectionAB = typeA & typeB;
type UnionAB = typeA | typeB;

let myIntersection: IntersectionAB;
myIntersection = {
    id: 1,
    propA: 'propA',
    propB: 'propB',
};

let myUnion: UnionAB;
myUnion = {
    id: 1,
    propA: 'propA',
    // propB: "propB1",
};

interface Name {
    name: string;
    age: number;
}

interface Age {
    age: number;
    // location: string;
}

interface xyz {
    ok: Name | Age;
}

// type Person = Name & Age;
interface Person extends Name, Age {
    hello: string;
    getName(id: number): string;
}

// class People implements Name, Age {
class People implements Person {
    name: string;
    age: number;
    hello: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.hello = '';
    }
    getName(id: number) {
        const name = 'jhon';
        return name;
    }
}

let p = new People('jj', 123);

type Event = {
    name: string;
    dateCreated: string;
    type: string;
};
