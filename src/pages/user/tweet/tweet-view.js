import { bindable, inject, bindingsignaler } from 'aurelia-framework';
import { UserService } from "./../user-service";
import { SharedState } from '../../../shared/shared-state';
import { BindingSignaler } from 'aurelia-templating-resources';

@inject(UserService, SharedState, BindingSignaler)
export class TweetView {

  @bindable tweet;
  @bindable retweet;

  isCommenting = false;

  constructor(userService, sharedState, bindingSignaler) {
    this.userService = userService;
    this.sharedState = sharedState;
    setInterval(() => bindingSignaler.signal('timeago-signal'), 10000);
  }

  commentClicked(event, data) {
    console.info("Comment clicked!", event, data);
    this.isCommenting = !this.isCommenting;
  }

  retweetClicked(event, tweet) {
    console.info("Retweet clicked!", event, tweet);
    this.retweet = this.tweet;
  }

  submitComment(event, content) {
    console.log("Commented!", event, content)
    this.tweet.comments.push(this.userService
      .createComment(this.tweet.author, content));
    this.isCommenting = false;
  }

}
