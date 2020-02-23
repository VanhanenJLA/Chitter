import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'

@inject(UserService)
export class UserPage {

    @bindable user;
    @bindable retweet;

    constructor(UserService) {
        this.userService = UserService;
        this.user = this.userService.createUser();
        let comment = this.userService.createComment(this.user, "This is a comment btw.");
        this.comments = [comment, comment, comment, comment];

        let tweet = this.userService.createTweet(this.user,
            "This is content btw. This is content btw. This is content btw. ", this.comments);

        this.tweets = [tweet, tweet];
    }

}
