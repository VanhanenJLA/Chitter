import data from './../data/mock-data.json'

export class MockService {

  generateHandle = () => getRandomElement(data.handles)
  generateBio = () => getRandomElement(data.bios)
  generateSentence = () => getRandomElement(data.sentences)
  generateFirstName = () => getRandomElement(data.firstNames)
  generateLastName = () => getRandomElement(data.lastNames)

  generateTweet() {
    let cap = Math.ceil(Math.random() * 5);
    let tweet = "";
    for (let i = 0; i < cap; i++)
      tweet += " " + this.generateSentence();
    return tweet;
  }

  generateUser() {
    let pictures = new Array(8).fill("https://www.thispersondoesnotexist.com/image")
    return {
      firstName: this.generateFirstName(),
      lastName: this.generateLastName(),
      handle: this.generateHandle(),
      bio: this.generateBio(),
      pictures,
    }
  }

  generateComment() {
    return {
      author: this.generateUser(),
      content: this.generateSentence()
    }
  }

}

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];


