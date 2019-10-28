import { PLATFORM, inject } from 'aurelia-framework';

// @inject(Aurelia, Router, Config)
export class App {

    // constructor(aurelia, router, config) {
    //     this.aurelia = aurelia;
    //     this.router = router;
    //     this.config = config;
    // }

    configureRouter(config, router) {
        config.title = "Testeroni";
        config.map([

            { route: 'login', name: 'login', moduleId: PLATFORM.moduleName('./pages/login/login'), title: "Login", nav: true },
            { route: '', moduleId: PLATFORM.moduleName('./pages/reader/reader'), title: "Reader", nav: true },
            { route: 'greet', moduleId: PLATFORM.moduleName('./pages/greeter/greeter'), title: "Greeter", nav: true },
            { route: 'hello', name: 'hello', moduleId: PLATFORM.moduleName('./pages/hello/hello'), title: "Hello", nav: true },

        ]);

        this.router = router;
    }
}