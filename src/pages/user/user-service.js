import ProfilePicture from '../../static/profile.png';
import { User } from '../../models/User';
import { Comment } from '../../models/Comment';
import { Tweet } from '../../models/Tweet';

export class UserService {

  createUser(firstname, lastname, handle, bio, profilePicture, pictures) {
    profilePicture = "https://www.thispersondoesnotexist.com/image";
    pictures = new Array(8).fill(profilePicture)
    return new User(firstname, lastname, handle, bio, profilePicture, pictures);
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


