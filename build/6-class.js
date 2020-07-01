"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstName, lastName, token, save) {
            super();
            this.numberofHeads = 1;
            this.city = 'medan';
            this.retryLogin = 0;
            this.done = false;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.token = token;
            this.save = save;
        }
        find(keyword) {
            return 'result';
        }
        login(userName, password) {
            this.retryLogin += 1;
            if (userName === 'admin' && password === 'admin') {
                return true;
            }
            if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
                return 'max login attempted';
            }
            return false;
        }
        fullName() {
            return this.firstName + '  ' + this.lastName;
        }
        setToken(token) {
            this.token = token;
        }
        getToken() {
            return this.token;
        }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
let jhon = new User(1, 'jhon', 'doe', 'fc101', true);
let sinta = new User(2, 'sinta', 'ddd', 'fc102', true);
console.log(jhon);
jhon.city = 'bandung';
jhon.firstName = 'jojo';
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
class UserEnhanced extends User {
    constructor(id, firstName, lastName, location, token, save) {
        super(id, firstName, lastName, token, save);
        this.location = location;
        console.log(this);
    }
    getSalary() {
        return 1000;
    }
    title(s) {
        return s + this.fullName();
    }
    checkSave() {
        return this.save;
    }
}
let dono = new UserEnhanced(3, 'dono', 'kasino', 'jakarta', 'f111', true);
console.log(dono.checkSave());
console.log(dono.firstName);
console.log(dono.getSalary());
console.log(dono.title('Mr '));
class Custom {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    setValue(x, y) {
        this.x = x;
        this.y = y;
    }
}
let x = new Custom();
console.log(x);
x.setValue(2, 3);
console.log(x);
