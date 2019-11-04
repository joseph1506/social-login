import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpwdComponent} from './forgotpwd/forgotpwd.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterComponent, data: {title: 'User Registration'}
  },
  {
    path: 'login', component: LoginComponent, data: {title: 'Login Page'}
  },
  {
    path: 'reset', component: ForgotpwdComponent, data: {title: 'Reset Password'}
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'DashBoard' }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
