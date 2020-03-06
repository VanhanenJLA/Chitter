export class User {
  constructor(firstname, lastname, handle, bio, profilePicture, pictures) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${firstname} ${lastname}`;
    this.handle = handle;
    this.bio = bio;
    this.profilePicture = profilePicture;
    this.pictures = pictures;
  }
}