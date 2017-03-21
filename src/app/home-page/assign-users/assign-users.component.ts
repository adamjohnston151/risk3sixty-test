import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-assign-users',
  templateUrl: 'assign-users.component.html',
  styleUrls: ['assign-users.component.css']
})
export class AssignUsersComponent implements OnInit {

  myForm: FormGroup;

  genders = [
    'male',
    'female',
  ]

  constructor() {

    this.myForm = new FormGroup({

        //'username': new FormControl('Max', Validators.required),
        //'jobtitle': new FormControl('', Validators.required),
        //'email': new FormControl('', Validators.required),
      //'hobbies': new FormArray([
       // new FormControl('Cooking', Validators.required),
        //new FormControl('Sports', Validators.required),
      //]),


    'userData': new FormGroup({
      'username': new FormArray([
        new FormControl('asdf', Validators.required),
      ]),

      'jobtitle': new FormArray([
        new FormControl('asdf', Validators.required),
      ]),

      'email': new FormArray([
        new FormControl('asdf@', Validators.required),
      ]),
    })

    });

  }


  ngOnInit() {
    //console.log(this.myForm.get('userData'));
    //console.log(this.myForm.get('userData.username'));
  };

  onSubmit(){
    console.log(this.myForm);
  }

  //onAddHobby(){
    //(<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  //}

  addUser(){
    (<FormArray>this.myForm.get('userData.username')).push(new FormControl('', Validators.required));
    (<FormArray>this.myForm.get('userData.jobtitle')).push(new FormControl('', Validators.required));
    (<FormArray>this.myForm.get('userData.email')).push(new FormControl('', Validators.required));
    console.log(this.myForm.get('userData'));
  }

  deleteUser(i){
    if (i > 0) {
      (<FormArray>this.myForm.get('userData.username')).removeAt(i);
      (<FormArray>this.myForm.get('userData.jobtitle')).removeAt(i);
      (<FormArray>this.myForm.get('userData.email')).removeAt(i);
    }
  }

}
