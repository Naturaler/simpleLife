import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../../service/user-login.service";
import {UserLoginDTO} from "../../model/user-login-dto";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginDTO: UserLoginDTO;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: UserLoginService) {
    this.loginDTO = new UserLoginDTO();
  }

  onSubmit() {
    this.loginService.login(this.loginDTO).subscribe(result => this.gotoIndex());
  }

  onRegister() {
    this.gotoRegister();
  }

  onForgetPassword() {
    this.gotoForgetPassword();
  }

  private gotoIndex() {
    this.router.navigate(['/index']);
  }

  private gotoRegister() {
    this.router.navigate(['/register']);
  }

  private gotoForgetPassword() {
    this.router.navigate(['/forgetPassword']);
  }
}
