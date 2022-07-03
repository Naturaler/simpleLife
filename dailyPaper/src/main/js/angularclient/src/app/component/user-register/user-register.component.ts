import {Component} from '@angular/core';
import {UserRegisterDto} from "../../model/user-register-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegisterService} from "../../service/user-register.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerDto: UserRegisterDto;

  constructor(private route: ActivatedRoute, private routter: Router, private registerService: UserRegisterService) {
    this.registerDto = new UserRegisterDto();
  }

  onSubmit() {
    this.registerService.register(this.registerDto).subscribe(result => this.gotoIndex());
  }

  onLogin() {
    this.gotoLogin();
  }

  private gotoIndex() {
    this.routter.navigate(['/index']);
  }

  private gotoLogin() {
    this.routter.navigate(['/login']);
  }

}
