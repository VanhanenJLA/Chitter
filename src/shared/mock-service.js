import data from './../data/mock-data.json'

export class MockService {

  data = data;

  get handle() {
    return getRandomElement(this.data.handles)
  }

  get Bio() {
    return getRandomElement(this.data.bios)
  }

  get Comment() {
    return getRandomElement(this.data.comments)
  }

  get Tweet() {
    let cap = Math.ceil(Math.random() * 5);
    let tweet = "";
    for (let i = 0; i < cap; i++)
      tweet += " " + getRandomElement(this.data.sentences);
    return tweet;
  }

  get FirstName() {
    return getRandomElement(this.data.firstNames)
  }

  get LastName() {
    return getRandomElement(this.data.lastNames)
  }

}

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];


