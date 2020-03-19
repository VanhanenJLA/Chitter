export class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.when = new Date().getTime() * Math.random();
  }

}