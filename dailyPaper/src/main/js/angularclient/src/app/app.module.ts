import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './component/user-login/user-login.component';
import {FormsModule} from "@angular/forms";
import {UserLoginService} from "./service/user-login.service";
import {UserRegisterComponent} from './component/user-register/user-register.component';
import {HttpClientModule} from "@angular/common/http";
import {IndexComponent} from './component/index/index.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { PaperComponent } from './component/paper/paper.component';
import {UserRegisterService} from "./service/user-register.service";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ForgetPasswordComponent,
    PaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserLoginService, UserRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
