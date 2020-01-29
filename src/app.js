import { PLATFORM, bindable } from 'aurelia-framework';

export class App {

    @bindable selectedTheme;
    constructor() {

        this.themes = [
            {
                title: "default",
                url:
                    "https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css"
            },
            {
                title: "cerulean",
                url: "https://bootswatch.com/4/cerulean/bootstrap.min.css"
            },
            {
                title: 'darkly',
                url: 'https://bootswatch.com/4/darkly/bootstrap.min.css'
            }
        ];

    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([

            { route: '', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: false },
            { route: 'user', moduleId: PLATFORM.moduleName('./pages/user/user-page'), title: 'User', nav: true },
            { route: 'svg', moduleId: PLATFORM.moduleName('./pages/svg/svg-page'), title: 'SVG', nav: true },
            // { route: 'vr', moduleId: PLATFORM.moduleName('./pages/vr/vr-page'), title: 'VR', nav: true },

        ]);
    }

    attached() {

        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    }

    activate() {
        // this.changeTheme(this.themes[0]);
    }
    changeTheme(theme) {
        const head = document.getElementsByTagName("head")[0];
        const itemId = 'css-sheet';
        let link = document.getElementById(itemId);
        if (!link) {
            link = document.createElement("link");
            link.id = itemId;
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = theme.url;
            link.media = "all";
            head.appendChild(link);
        } else {
            link.href = theme.url;
        }
    }

}
