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

            { route: '', moduleId: PLATFORM.moduleName('./pages/infeed/infeed'), title: "Infeed", nav: true },
            { route: 'greet', moduleId: PLATFORM.moduleName('./pages/greeter/greeter'), title: "Greeter", nav: true },

        ]);

    }
}