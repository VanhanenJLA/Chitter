export class Profile {
    constructor() {
        this.bio = "Bio goes here. ";
        for (let i = 0; i < 3; ++i) {
            this.bio = this.bio.concat(this.bio);
        }
    }
}