/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {}; // quick fix for global variable
abstract class Root {
    // property (attributes, method )
    // constructor
    abstract done: boolean;
    abstract find(keyword: string): string;
}

// base class
class User extends Root {
    // properties : attributes & method
    id: number;
    firstName: string;
    public lastName: string; // public field
    private token: string; // private field
    protected save: boolean; // protected
    readonly numberofHeads: number = 1; // readonly attributes only
    city = 'medan';
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done = false;

    find(keyword: string): string {
        return 'result';
    }
    login(userName: string, password: string): boolean | string {
        this.retryLogin += 1;
        if (userName === 'admin' && password === 'admin') {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }
        return false;
    }

    fullName(): string {
        return this.firstName + '  ' + this.lastName;
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }

    constructor(id: number, firstName: string, lastName: string, token: string, save: boolean) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
        this.save = save;
    }
}

// instance

let jhon = new User(1, 'jhon', 'doe', 'fc101', true);
let sinta = new User(2, 'sinta', 'ddd', 'fc102', true);
// console.log(jhon.created_at);
// console.log(jhon.updated_at);
console.log(jhon);
jhon.city = 'bandung';
jhon.firstName = 'jojo';
// jhon.numberofHeads = 2;
// jhon = {
//     id: 1,
//     firstName: 'jhon',
//     lastName: 'doe',
//     // #token: 'fc101',
//     save: true,
// };

User.MAX_FAILED_LOGIN = 5;
console.log(User.MAX_FAILED_LOGIN);
console.log(jhon.login('', ''));
console.log(jhon.login('', ''));
console.log(jhon.login('', ''));
console.log(jhon.login('', ''));
console.log(jhon.login('', ''));

console.log(sinta.login('', ''));
console.log(sinta.login('', ''));
console.log(sinta.login('', ''));
console.log(sinta.login('', ''));
console.log(sinta.login('', ''));

console.log(jhon.fullName());
console.log(sinta.firstName);

// sub-class
class UserEnhanced extends User {
    location: string;

    constructor(id: number, firstName: string, lastName: string, location: string, token: string, save: boolean) {
        super(id, firstName, lastName, token, save);
        // console.log(super.save);
        this.location = location;
        console.log(this);
    }

    getSalary(): number {
        return 1000;
    }

    title(s: string): string {
        return s + this.fullName();
    }

    checkSave(): boolean {
        return this.save;
    }
}

let dono = new UserEnhanced(3, 'dono', 'kasino', 'jakarta', 'f111', true);
console.log(dono.checkSave());
console.log(dono.firstName);
console.log(dono.getSalary());
console.log(dono.title('Mr '));

class Custom {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }
    setValue(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let x = new Custom();
console.log(x);
x.setValue(2, 3);
console.log(x);
