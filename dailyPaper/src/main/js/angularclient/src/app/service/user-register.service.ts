import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegisterDto} from "../model/user-register-dto";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private registerUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:18080/register';
  }

  public register(registerDto: UserRegisterDto) {
    return this.http.post(this.registerUrl, registerDto)
  }
}
