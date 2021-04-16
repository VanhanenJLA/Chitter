import ProfilePicture from '../../static/profile.png';
import { User } from '../../models/User';
import { Comment } from '../../models/Comment';
import { Tweet } from '../../models/Tweet';

export class UserService {

  createUser(firstName, lastName, handle, bio, pictures) {
    return new User(firstName, lastName, handle, bio, pictures);
  }

  createComment(author, content) {
    return new Comment(author, content);
  }

  createTweet(author, content, comments) {
    return new Tweet(author, content, comments);
  }

  createRetweet(author, tweet, content, comments) {
    return { author, tweet, content, comments };
  }

}


