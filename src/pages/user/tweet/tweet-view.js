import { bindable, inject } from 'aurelia-framework';
import { UserService } from "./../user-service";
import { SharedState } from '../../../shared/shared-state';

@inject(UserService, SharedState)
export class TweetView {

  @bindable tweet;
  isCommenting = false;

  constructor(userService, sharedState) {
    this.userService = userService;
    this.sharedState = sharedState;
  }

  commentClicked(event, data) {
    console.info("Comment clicked!", event, data);
    this.isCommenting = true;
  }

  retweetClicked(event, tweet) {
    console.info("Retweet clicked!", event, tweet);
    this.retweet = this.userService
      .createTweet(tweet.author, tweet.content, tweet.comments);
    $('retweet-modal').modal({ show });
  }

  submitComment(event, content) {
    debugger;
    console.log("Commented!", event, content)
    this.comments.push(this.userService
      .createComment(this.author, content));
    this.isCommenting = false;
  }

}
