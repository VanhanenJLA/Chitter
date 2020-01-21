import { bindable } from 'aurelia-framework';

export class Tweet {
    @bindable author;
    @bindable comments

    constructor() {
        this.retweet = null;
        this.commenting = false;
        this.content = (() => {
            let str = 'This is content btw. ';
            for (let i = 0; i < 3; ++i) str = str.concat(str);
            return str;
        })();
    }

    commentClicked() {
        console.log("Comment clicked!");
        this.commenting = true;
    }

    retweetClicked(event, data) {
        console.log("Retweet clicked!");
        console.log(event);
        console.log(data);
        this.retweet = data;
    }
}
