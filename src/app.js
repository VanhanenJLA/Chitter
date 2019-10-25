import { PLATFORM } from 'aurelia-framework';

export class App {

    configureRouter(config, router) {
        config.title = "Hiekkaloota";
        config.map([

            { route: '', moduleId: PLATFORM.moduleName('./pages/reader/reader'), title: "Reader", nav: true },
            { route: 'login', name: 'login', moduleId: PLATFORM.moduleName('./pages/login/login'), title: "Login", nav: true },
            { route: 'greet', moduleId: PLATFORM.moduleName('./pages/greeter/greeter'), title: "Greeter", nav: true },
            { route: 'hello', name: 'hello', moduleId: PLATFORM.moduleName('./pages/hello/hello'), title: "Hello", nav: true },

        ]);

        this.router = router;
    }
}