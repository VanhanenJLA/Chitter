import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'
import { MockService } from '../../shared/mock-service';
import { SharedState } from '../../shared/shared-state';

@inject(UserService, SharedState)
export class UserPage {

  @bindable user;
  retweet;
  tweets;

  constructor(userService, sharedState) {
    let m = new MockService();

    this.userService = userService;
    this.user = this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null);
    let comments = [
      this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
      this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment)
    ];

    let tweet = this.userService.createTweet(this.user,
      m.Tweet, comments);

    this.tweets = [tweet];
    sharedState.user = this.user;
  }

  attached() {
    setInterval(() => {
      let m = new MockService();
      let comments = [
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment)
      ];
      comments.forEach(c => {
        c.when *= Math.random();
      });
      this.tweets
        .unshift(this.userService.createTweet(this.user,
          m.Tweet, comments))
    }, 1.2E4);
  }

}


