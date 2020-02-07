import { PLATFORM, Aurelia, inject } from 'aurelia-framework';

@inject(Aurelia)
export class App {

    constructor(Aurelia) {
        this.aurelia = Aurelia;
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([

            { route: ['', 'user'], moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true },
            { route: 'svg', moduleId: PLATFORM.moduleName('./pages/svg/svg-page'), title: 'SVG', nav: true },

        ]);
    }

    logout() {
        this.aurelia.setRoot(PLATFORM.moduleName('pages/login/login-page'));
    }

}
