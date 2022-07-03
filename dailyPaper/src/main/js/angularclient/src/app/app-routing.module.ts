import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./component/user-login/user-login.component";
import {IndexComponent} from "./component/index/index.component";
import {UserRegisterComponent} from "./component/user-register/user-register.component";
import {ForgetPasswordComponent} from "./component/forget-password/forget-password.component";
import {PaperComponent} from "./component/paper/paper.component";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'forgetPassword', component: ForgetPasswordComponent},
  {path: 'paper', component: PaperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
