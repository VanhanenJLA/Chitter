import { bindable, inject } from 'aurelia-framework';
import { UserService } from "./../user-service";

@inject(UserService)
export class Tweet {
    @bindable author;
    @bindable comments
    @bindable retweet;

    constructor(UserService) {
        this.userService = UserService;
        this.commenting = false;
        this.content = (() => {
            let str = 'This is content btw. ';
            for (let i = 0; i < 3; ++i) str = str.concat(str);
            return str;
        })();
    }

    commentClicked(event, data) {
        console.log("Comment clicked!");
        console.log(event);
        console.log(data);
        this.commenting = true;
    }

    retweetClicked(event, tweet) {
        console.log("Retweet clicked!");
        console.log(event);
        console.log(tweet);
        this.retweet = this.userService.createTweet(tweet.author, tweet.content, tweet.comments);
    }

    submitComment(event, comment) {
        console.log("Commented!")
        console.log(event);
        console.log(comment);
        this.comments.push(this.userService.createComment(this.author, comment.content));
        this.commenting = false;        
    }
}
