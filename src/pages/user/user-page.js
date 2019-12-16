import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'

@inject(UserService)
export class UserPage {

    @bindable user;

    constructor(UserService) {
        this.userService = UserService;
        this.user = this.userService.createUser();
    }

}
