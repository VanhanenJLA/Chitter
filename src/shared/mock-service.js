import data from './../data/mock-data.json'
import { inject } from 'aurelia-framework';
import { UserService } from '../pages/user/user-service';

@inject(UserService)
export class MockService {

  constructor(userService) {
    this.userService = userService;
  }

  getHandle = () => getRandomElement(data.handles)
  getBio = () => getRandomElement(data.bios)
  getSentence = () => getRandomElement(data.sentences)
  getFirstName = () => getRandomElement(data.firstNames)
  getLastName = () => getRandomElement(data.lastNames)

  getSentences(number) {
    number ??= 5;
    const cap = getRandomIntUpTo(number);
    let content = "";
    for (let i = 0; i < cap; i++)
      content += " " + this.getSentence();
    return content;
  }

  getComment() {
    const author = this.getUser()
    const content = this.getSentence()
    return this.userService.createComment(author, content)
  }

  getComments(number) {
    number ??= 3;
    const cap = getRandomIntUpTo(number);
    let comments = [];
    for (let i = 0; i < cap; i++)
      comments.push(this.getComment());
    return comments;
  }

  getUser() {
    const firstName = this.getFirstName()
    const lastName = this.getLastName()
    const handle = this.getHandle()
    const bio = this.getBio()
    const picture = "https://www.thispersondoesnotexist.com";
    const pictures = new Array(8).fill(picture)
    return this.userService.createUser(firstName, lastName, handle, bio, pictures)
  }

  getTweet() {
    const author = this.getUser()
    const content = this.getSentences()
    const comments = this.getComments()
    return this.userService.createTweet(author, content, comments)
  }

}

const getRandomIntUpTo = number => Math.ceil(Math.random() * number);
const getRandomElement = array => array[Math.floor(Math.random() * array.length)];
