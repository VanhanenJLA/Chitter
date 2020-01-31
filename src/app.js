import { PLATFORM } from 'aurelia-framework';

export class App {

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([

            { route: ['','user'], moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true },
            { route: 'svg', moduleId: PLATFORM.moduleName('./pages/svg/svg-page'), title: 'SVG', nav: true },

        ]);
    }

}
