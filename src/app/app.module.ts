import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { RegistrationComponent } from './registration/registration.component';
import {GetUserService} from './get-user.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AssignUsersComponent } from './home-page/assign-users/assign-users.component';
import { AddUsersDirective } from './home-page/assign-users/add-users.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    HomePageComponent,
    AssignUsersComponent,
    AddUsersDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [GetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
