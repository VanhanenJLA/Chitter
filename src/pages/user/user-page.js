import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'

@inject(UserService)
export class UserPage {

    @bindable user;
    tweets;

    constructor(userService) {
        this.userService = userService;
        this.user = this.userService.createUser();
        let comment = this.userService.createComment(this.user, "This is a comment btw.");
        let comments = [comment, comment, comment, comment];

        let tweet = this.userService.createTweet(this.user,
            "This is content btw. This is content btw. This is content btw. ", comments);

        this.tweets = [tweet, tweet];
    }

    attached() {
        setInterval(() => {
            let comment = this.userService.createComment(this.user, "This is a comment btw.");
            let comments = [comment, comment, comment, comment];
            this.tweets
                .push(this.userService.createTweet(this.user,
                    "This is content btw. This is content btw. This is content btw. ", comments))
        }, 5000);
    }

}
