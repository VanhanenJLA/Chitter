import ProfilePicture from '../../static/profile.png';
import { User } from '../../models/User';
import { Comment } from '../../models/Comment';
import { Tweet } from '../../models/Tweet';

export class UserService {

  createJouni() {
    let firstname = 'Jouni';
    let lastname = 'Vanhanen';
    let handle = 'VanhanenJLA';
    let bio = (() => {
      let s = '';
      for (let i = 0; i < 5; i++) s += 'This is a bio btw. ';
      return s;
    })();
    // let profilePicture = ProfilePicture;
    let profilePicture = "https://www.thispersondoesnotexist.com/image";
    let pictures = (() => {
      let _pictures = [];
      for (let i = 0; i < 6; i++) _pictures[i] = profilePicture;
      return _pictures;
    })();
    return new User(firstname, lastname, handle, bio, profilePicture, pictures);
  }

  createUser(firstname, lastname, handle, bio, profilePicture, pictures) {
    profilePicture = "https://www.thispersondoesnotexist.com/image";
    pictures = (() => {
      let _pictures = [];
      for (let i = 0; i < 8; i++) _pictures[i] = profilePicture;
      return _pictures;
    })();
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


