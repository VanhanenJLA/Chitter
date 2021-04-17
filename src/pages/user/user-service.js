import ProfilePicture from '../../static/profile.png';
import { User } from '../../models/User';
import { Comment } from '../../models/Comment';
import { Tweet } from '../../models/Tweet';

export class UserService {

  createUser = (firstName, lastName, handle, bio, pictures) =>
    new User(firstName, lastName, handle, bio, pictures);

  createComment = (author, content) =>
    new Comment(author, content);

  createTweet = (author, content, comments) =>
    new Tweet(author, content, comments);

}


