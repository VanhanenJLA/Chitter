import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'

@inject(UserService)
export class UserPage {

    @bindable user;

    constructor(UserService) {
        this.userService = UserService;
        this.user = this.userService.createUser();
        let comment = this.userService.createComment(this.user);
        this.comments = [comment, comment, comment, comment];
    }

        // attached() {
    //     fetch('https://www.character-generator.org.uk/bio/')
    //         .then(function (response) {
    //             // When the page is loaded convert it to text
    //             debugger;
    //             return response.text();
    //         })
    //         .then(function (html) {
    //             debugger;
    //             // Initialize the DOM parser
    //             var parser = new DOMParser();

    //             // Parse the text
    //             var doc = parser.parseFromString(html, "text/html");

    //             // You can now even select part of that html as you would in the regular DOM 
    //             // Example:
    //             // var docArticle = doc.querySelector('article').innerHTML;

    //             console.log(doc);
    //         })
    //         .catch(function (err) {
    //             console.log('Failed to fetch page: ', err);
    //         });
    // }


}
