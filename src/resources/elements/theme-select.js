
export class ThemeSelect {

    themes = [
        {
            title: "Default",
            url: "./../../static/bootstrap.min.css"
        },
        {
            title: "Cerulean",
            url: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/cerulean/bootstrap.min.css"
        },
        {
            title: 'Cosmo',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/cosmo/bootstrap.min.css'
        },
        {
            title: 'Cyborg',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/cyborg/bootstrap.min.css'
        },
        {
            title: 'Darkly',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/darkly/bootstrap.min.css'
        },
        {
            title: 'Flatly',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/flatly/bootstrap.min.css'
        },
        {
            title: 'Journal',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/journal/bootstrap.min.css'
        },
        {
            title: 'Litera',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/litera/bootstrap.min.css'
        },
        {
            title: 'Lumen',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/lumen/bootstrap.min.css'
        },
        {
            title: 'Lux',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/lux/bootstrap.min.css'
        },
        {
            title: 'Materia',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/materia/bootstrap.min.css'
        },
        {
            title: 'Minty',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/minty/bootstrap.min.css'
        },
        {
            title: 'Pulse',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/pulse/bootstrap.min.css'
        },
        {
            title: 'Sandstone',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/sandstone/bootstrap.min.css'
        },
        {
            title: 'Simplex',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/simplex/bootstrap.min.css'
        },
        {
            title: 'Sketchy',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/sketchy/bootstrap.min.css'
        },
        {
            title: 'Slate',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/slate/bootstrap.min.css'
        },
        {
            title: 'Solar',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/solar/bootstrap.min.css'
        },
        {
            title: 'Spacelab',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/spacelab/bootstrap.min.css'
        },
        {
            title: 'Superhero',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/superhero/bootstrap.min.css'
        },
        {
            title: 'United',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/united/bootstrap.min.css'
        },
        {
            title: 'Yeti',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/yeti/bootstrap.min.css'
        }
    ];

    constructor() {

        let theme = localStorage.getItem('theme');
        if (theme !== null) {
            this.changeTheme(this.themes.find(e => e.title === theme));
        } else {
            this.changeTheme(this.themes.find(e => e.title === 'Default'));
        }

    }

    changeTheme(theme) {
        // if (localStorage.getItem('theme') === theme.title) return;

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
        localStorage.setItem('theme', theme.title);
        this.selectedTheme = theme;
    }

}