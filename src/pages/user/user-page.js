import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'
import { MockService } from '../../shared/mock-service';
import { SharedState } from '../../shared/shared-state';

@inject(UserService, SharedState, MockService)
export class UserPage {

  @bindable user;
  retweet;
  tweets;

  constructor(userService, sharedState, mockService) {

    this.userService = userService;
    this.mockService = mockService;

    const user = mockService.generateUser()
    this.user = this.userService.createUser(...Object.values(user));

    let comments = this.populateComments()

    let tweet = this.userService.createTweet(this.user, mockService.generateTweet(), comments);

    this.tweets = [tweet];
    sharedState.user = this.user;
  }

  attached() {
    setInterval(() => {
      this.populateTweets()
    }, 1.2E4);
  }

  populateTweets() {
    let comments = this.populateComments()

    let tweet = this.userService.createTweet(this.user,
      this.mockService.generateTweet(), comments)

    this.tweets.unshift(tweet)
  }

  populateComments() {

    const createComment = () => {
      let { author, content } = this.mockService.generateComment()
      author = this.userService.createUser(...Object.values(author))
      return this.userService.createComment(author, content)
    }

    return [createComment(), createComment(), createComment()];
  }

}