import { Aurelia } from "aurelia-framework";

export class LoginService {

    _users = new [new User("admin", "admin")];

    Login(username, password) {

        _users.forEach(user => {
            if (user.username === username) {
                if (user.password === password) {
                    alert("Success!");
                } else {
                    alert("Wrong password!");
                }
            }
            alert("User not found!");
        });

    }

}

class User {

    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

}