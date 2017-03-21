import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//The GetUserService also contains method for logging out
import {GetUserService} from '../get-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private loggingOut: GetUserService) { }

  ngOnInit() {
  }

  onLogout(){
    this.loggingOut.logoutUser();
    console.log(this.loggingOut.getUser());
  }

}
