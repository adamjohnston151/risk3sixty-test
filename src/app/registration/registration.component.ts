import { Component, OnInit,} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
    import {GetUserService} from "../get-user.service";


    @Component({
      selector: 'app-registration',
      templateUrl: './registration.component.html',
      styleUrls: ['./registration.component.css']
    })
    export class RegistrationComponent implements OnInit {

      constructor(private router: Router, private myUserInfo: GetUserService) {
      }

      myUser = this.myUserInfo.getUser();
      //username: 'Adam',
      //email: 'adam@emnovate.com',
      //password: 'Password',
      //};

      ngOnInit() {
        //console.log(this.myUserInfo.getUser());
        //console.log(this.myUser);
      }

      onContinue() {
        //Have to stringify the arrays to doa  comparison
        //if you do not have .getUser() here, it does not work, will log false in the console without it
        //if (JSON.stringify(this.myUserInfo.getUser()) != JSON.stringify(this.userTwo)) {
        //if (this.myUserInfo.getUser().username)
        //console.log('True!');
        //console.log(this.myUser);
        //console.log(this.myUserInfo.getUser());
        //console.log(this.userTwo);
        this.router.navigate(['../login']);


        return true;
        //} else {
        //console.log('False!');
        //console.log(this.myUser.getUser());
        //console.log(this.userTwo);


        //}
      };
    }

