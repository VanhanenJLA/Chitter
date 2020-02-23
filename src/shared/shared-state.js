export class SharedState {

    constructor() {
        this.lightingMode = localStorage.getItem('lightingMode') ?? 'light';
    }
}