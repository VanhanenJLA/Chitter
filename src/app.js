import { PLATFORM, Aurelia, inject } from 'aurelia-framework';
import { SharedState } from './shared/shared-state';

@inject(Aurelia, SharedState)
export class App {

    constructor(aurelia, sharedState) {
        this.aurelia = aurelia;
        this.sharedState = sharedState;
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Chitter';
        config.map([

            { route: ['', 'user'], moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true },

        ]);
    }

    logout() {
        this.aurelia.setRoot(PLATFORM.moduleName('pages/login/login-page'));
    }

}
