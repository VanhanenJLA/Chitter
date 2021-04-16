export class User {
  constructor(firstName, lastName, handle, bio, pictures) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.handle = handle;
    this.bio = bio;
    this.pictures = pictures;
    this.profilePicture = pictures[0];
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}