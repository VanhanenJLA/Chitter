import { PLATFORM } from 'aurelia-framework';

export class App {

    configureRouter(config, router) {
        config.title = "Aurelia App";
        config.map([

            { route: '', moduleId: PLATFORM.moduleName('features/reader/reader'), title: "Reader" },
            { route: 'greet', moduleId: PLATFORM.moduleName('features/greeter/greeter') },
            { route: 'hello', name: 'hello', moduleId: PLATFORM.moduleName('features/hello/hello'), title: "Hello", nav: true },

            // { route: 'parameters', name: 'parameters', moduleId: PLATFORM.moduleName('parameters/parameters'), nav: true, "settings": { "auth": true } },
            // { route: 'alarms', name: 'alarms', moduleId: PLATFORM.moduleName('alarms/alarms'), nav: true },
        ]);

        this.router = router;
    }
}