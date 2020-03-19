export class Tweet {
  constructor(author, content, comments) {
    this.author = author;
    this.content = content;
    this.comments = comments;
    this.when = Date.now();
  }
}
