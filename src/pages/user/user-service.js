import ProfilePicture from '../../static/profile.png';
export class UserService {
  createUser() {
    let firstname = 'Jouni';
    let lastname = 'Vanhanen';
    let handle = 'VanhanenJLA';
    let bio = (() => {
      let s = '';
      for (let i = 0; i < 5; i++) s += 'This is a bio btw. ';
      return s;
    })();
    let profilePicture = ProfilePicture;
    let pictures = (() => {
      let _pictures = [];
      for (let i = 0; i < 6; i++) _pictures[i] = profilePicture;
      return _pictures;
    })();
    return new UserDTO(firstname, lastname, handle, bio, profilePicture, pictures);
  }
}

class UserDTO {
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
