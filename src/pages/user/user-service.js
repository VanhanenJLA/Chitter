
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
    return new UserDTO(firstname, lastname, handle, bio);
  }
}

class UserDTO {
  constructor(firstname, lastname, handle, bio) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${firstname} ${lastname}`;
    this.handle = handle;
    this.bio = bio;
  }
}
