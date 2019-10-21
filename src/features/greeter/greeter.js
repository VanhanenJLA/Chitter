export class Greeter {
    constructor() {
        this.name = 'John Doe';
        this.arriving = true;
        setTimeout(
            () => this.arriving = false, 5000);
    }
}


