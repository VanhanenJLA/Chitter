import { inject, PLATFORM, Aurelia } from "aurelia-framework";
import { LoginService } from "./login-service";

@inject(Aurelia)
export class Login {

    constructor(Aurelia) {
        this.aurelia = Aurelia;
        //this.loginService = loginService;
    }

    Login(username, password) {
        // this.loginService.Login(username, password);
        // this.aurelia.setRoot(PLATFORM.moduleName('app'));
        alert("Hello");
    }

    Login() {
        alert("Hello");
    }

}
