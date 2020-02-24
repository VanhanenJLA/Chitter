import { inject, PLATFORM, Aurelia } from 'aurelia-framework';
import { LoginService } from './login-service';

@inject(Aurelia)
export class LoginPage {

    constructor(Aurelia, LoginService) {
      this.aurelia = Aurelia;
      this.loginService = LoginService;
    }

    login(username, password) {
      if (username && password) {this.aurelia.setRoot(PLATFORM.moduleName('app'));}
    }

    attached() {
      if (this._rememberMe) {
        this.login('admin', 'admin');
      }
    }
}
