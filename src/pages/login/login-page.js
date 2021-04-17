import { inject, PLATFORM, Aurelia } from 'aurelia-framework';

@inject(Aurelia)
export class LoginPage {

  didSubmitForm = false;
  isConnecting = false;

  constructor(Aurelia) {
    this.aurelia = Aurelia;
  }

  attached() {
    if (this._rememberMe)
      this.login('admin', 'admin');
  }

  login(username, password) {
    this.didSubmitForm = true;
    if (username && password) {
      this.mockAuthentication();
    }

  }

  mockAuthentication() {
    this.isConnecting = true;
    setTimeout(() => {
      this.isConnecting = false;
      this.aurelia.setRoot(PLATFORM.moduleName('app'));
    }, 2000);
  }

}
