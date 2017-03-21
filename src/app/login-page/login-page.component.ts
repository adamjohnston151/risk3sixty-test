import { Component, OnInit } from '@angular/core';
import {GetUserService} from '../get-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private myUserInfo: GetUserService, private router: Router) { }

  ngOnInit() {
    console.log(this.myUserInfo.getUser());
  }

  userTwo ={
    username: '',
    email: this.myUserInfo.getUser().email,
    password: '',
  };


  onContinue(){

    if (JSON.stringify(this.myUserInfo.getUser()) == JSON.stringify(this.userTwo)){
      console.log('True!');
      console.log(this.myUserInfo.getUser());
      console.log(this.userTwo);
      this.router.navigate(['../home']);
    }else {
      console.log('False!');
      console.log(this.myUserInfo.getUser());
      console.log(this.userTwo);
    }
    //
  }

}
