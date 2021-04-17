import { inject, PLATFORM, Aurelia } from 'aurelia-framework';

@inject(Aurelia)
export class LoginPage {

  didSubmitForm = false;
  isAuthenticating = false;

  constructor(Aurelia) {
    this.aurelia = Aurelia;
  }

  login(username, password) {
    this.didSubmitForm = true;
    if (username && password) {
      this.mockAuthentication();
    }
  }

  mockAuthentication() {
    this.isAuthenticating = true;
    setTimeout(() => {
      this.isAuthenticating = false;
      this.aurelia.setRoot(PLATFORM.moduleName('app'));
    }, 2000);
  }

}
