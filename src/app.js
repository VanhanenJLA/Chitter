import { PLATFORM } from 'aurelia-framework';

export class App {
    constructor() {

    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([

            { route: '', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: false },
            { route: 'user', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true },
            { route: 'vr', moduleId: PLATFORM.moduleName('./pages/vr/vr-page'), title: 'VR', nav: true },
            { route: 'svg', moduleId: PLATFORM.moduleName('./pages/svg/svg-page'), title: 'SVG', nav: true },

        ]);
    }

    attached() {

        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        function switchTheme(e) {
            let theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
        toggleSwitch.addEventListener('change', switchTheme, false);

        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
    }

}
