import { PLATFORM, inject, Aurelia } from 'aurelia-framework';

@inject(Aurelia)
export class App {

    constructor(Aurelia) {
        this.app = Aurelia;
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = "Testeroni";
        config.map([

            { route: '', moduleId: PLATFORM.moduleName('./pages/reader/reader'), title: "Reader", nav: true },
            { route: 'greet', moduleId: PLATFORM.moduleName('./pages/greeter/greeter'), title: "Greeter", nav: true },
            { route: 'hello', name: 'hello', moduleId: PLATFORM.moduleName('./pages/hello/hello'), title: "Hello", nav: true },

        ]);

    }
}