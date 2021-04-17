import { bindable, inject } from 'aurelia-framework';
import { UserService } from "./../user-service";
import { SharedState } from '../../../shared/shared-state';
import { BindingSignaler } from 'aurelia-templating-resources';

@inject(UserService, SharedState, BindingSignaler)
export class TweetView {

  @bindable tweet;
  @bindable selectedTweet;
  @bindable showActions = true;
  @bindable showComments = true;

  constructor(userService, sharedState, bindingSignaler) {
    this.userService = userService;
    this.sharedState = sharedState;
    setInterval(() => bindingSignaler.signal('timeago-signal'), 10000);
  }

}
