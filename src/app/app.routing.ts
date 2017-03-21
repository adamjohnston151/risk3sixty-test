import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component"
import {RegistrationComponent} from "./registration/registration.component"
import {LoginPageComponent} from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AssignUsersComponent} from './home-page/assign-users/assign-users.component';

const APP_ROUTES: Routes = [
  {path: '', component: AppComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/assignUsers', component: AssignUsersComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
