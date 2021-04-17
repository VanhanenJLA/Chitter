import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'
import { MockService } from '../../shared/mock-service';
import { SharedState } from '../../shared/shared-state';

@inject(UserService, SharedState, MockService)
export class UserPage {

  @bindable user;
  selectedTweet;
  tweets;

  constructor(userService, sharedState, mockService) {
    this.userService = userService;
    this.mockService = mockService;

    const me = mockService.getUser();
    sharedState.user = me;
    this.user = me;
    const content = mockService.getSentences();
    const comments = mockService.getComments();
    const tweet = this.userService.createTweet(me, content, comments);
    this.tweets = [tweet];
  }

  attached() {
    this.autogenerateTweets();
  }

  autogenerateTweets() {
    setInterval(() => {
      const tweet = this.mockService.getTweet();
      this.tweets.unshift(tweet);
    }, 10000);
  }

  commentSubmitted(event, content) {
    let comment = this.userService.createComment(this.user, content);
    this.selectedTweet.comments.push(comment);
    document.getElementById("comment-input").value = "";
  }

}