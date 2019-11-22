export class Tweet {

    constructor() {
        let str = "This is content btw. ";
        for (let i = 0; i < 3; ++i) {
            str = str.concat(str);
        }
        this.content = str;
    }
}