import { PLATFORM} from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Twitteroni';
    config.map([

      { route: '', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: false },
      { route: 'user', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true }

    ]);
  }
}
