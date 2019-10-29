import { inject, PLATFORM, Aurelia } from "aurelia-framework";
import { LoginService } from "./login-service";

@inject(Aurelia)
export class Login {

    constructor(Aurelia, LoginService) {
        this.aurelia = Aurelia;
        this.loginService = LoginService;
    }

    login(username, password) {
        alert(`${username} ${password}`);
        // this.loginService.Login(username, password);
        if (username && password)
            this.aurelia.setRoot(PLATFORM.moduleName('app'));
    }

}
