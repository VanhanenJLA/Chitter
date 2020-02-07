import { inject, PLATFORM, Aurelia } from 'aurelia-framework';
import { LoginService } from './login-service';
import LoginBanner from '../../static/login/placeholder-logo.png';

@inject(Aurelia)
export class LoginPage {
    
    // _rememberMe = true;
    // _rememberMe = false;

    constructor(Aurelia, LoginService) {
      this.aurelia = Aurelia;
      this.loginService = LoginService;
      this.loginBanner = LoginBanner;
    }

    login(username, password) {
      // alert(`${username} ${password}`);
      // this.loginService.Login(username, password);
      if (username && password) {this.aurelia.setRoot(PLATFORM.moduleName('app'));}
    }

    attached() {
      if (this._rememberMe) {
        this.login('admin', 'admin');
      }
    }
}
