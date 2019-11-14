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

            { route: '', moduleId: PLATFORM.moduleName('./pages/greeter/greeter'), title: "Greetings", nav: false },
            { route: 'user', moduleId: PLATFORM.moduleName('./pages/user/user'), title: "User", nav: true },

        ]);

    }
}