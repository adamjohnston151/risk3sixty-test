import { Injectable } from '@angular/core';
import {riskUser} from "./riskUserProperties";
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class GetUserService {

  //TO CREATE AN ARRAY OF RISKUSERS
  //private myUsers: riskUser[] = [
    //new riskUser ('Adam', 'adam@emnovate.com', 'Password'),
    //new riskUser ('Adam2', 'adam2@emnovate.com', 'Password2')
    //];

  private myUser = new riskUser('', '', '')

  constructor(private router: Router) { }

  getUser(){
    return this.myUser;
  }


  //This is used to logout the user
  //Resets the information set by the user as well
  logoutUser(){
    this.router.navigate(['login']);
  }

}
