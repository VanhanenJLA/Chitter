import { inject, PLATFORM } from "aurelia-framework";
import { LoginService } from "./login-service";

@inject(Aurelia, Router, LoginService)
export class Login {

    constructor(aurelia, router, loginService) {
        this.aurelia = aurelia;
        this.router = router;
        this.loginService = loginService;
    }

    Login(username, password) {

        this.loginService.Login(username, password);

    }

    configureRouter(config, router) {
        config.map([
            {
                route: 'login', name: 'login', moduleId: PLATFORM.moduleName('./pages/login/login'), title: 'Sign in'
            }
        ]);

        config.mapUnknownRoutes(instruction => {
            return 'login/login';
        });

        this.router = router;

    }

}
