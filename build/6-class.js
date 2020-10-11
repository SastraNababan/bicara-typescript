"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstName, lastName) {
            super();
            this.retryLogin = 0;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.save = false;
            this.token = "";
            this.done = false;
        }
        login(username, password) {
            this.retryLogin += 1;
            if (username == "admin" && password == "admin") {
                return true;
            }
            if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
                return "max login attempted";
            }
            return false;
        }
        register() { }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 4;
let myUser = new User(1, "john", "dodo");
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("admin", "admin"));
class EnhacementUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new EnhacementUser("medan", 2, "ucok", "cool");
