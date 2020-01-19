import { bindable } from 'aurelia-framework';

export class Comment {
  @bindable author;

  constructor() {
    this.content = (() => {
      let str = 'This is a comment btw. ';
      return str;
    })();
    
  }
}
