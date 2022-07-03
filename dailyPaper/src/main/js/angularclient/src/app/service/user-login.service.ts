import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginDTO} from "../model/user-login-dto";

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:18080/login';
  }

  public login(loginDTO: UserLoginDTO) {
    return this.http.post(this.loginUrl, loginDTO)
  }
}
