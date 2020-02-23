import { bindable, inject } from 'aurelia-framework';
import { UserService } from "./../user-service";
import { SharedState } from '../../../shared/shared-state';

@inject(UserService, SharedState)
export class Tweet {

    @bindable author;
    @bindable content;
    @bindable comments
    @bindable retweet;

    constructor(userService, sharedState) {
        this.userService = userService;
        this.sharedState = sharedState;
        this.commenting = false;
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
        this.retweet = this.userService
            .createTweet(tweet.author, tweet.content, tweet.comments);
    }

    submitComment(event, comment) {
        console.log("Commented!")
        console.log(event);
        console.log(comment);
        this.comments.push(this.userService
            .createComment(this.author, comment.content));
        this.commenting = false;
    }

}
