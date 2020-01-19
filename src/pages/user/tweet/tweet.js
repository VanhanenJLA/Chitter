import { bindable } from 'aurelia-framework';

export class Tweet {
  @bindable author;
  @bindable comments

  constructor() {
    this.content = (() => {
      let str = 'This is content btw. ';
      for (let i = 0; i < 3; ++i) str = str.concat(str);
      return str;
    })();
  }
}
