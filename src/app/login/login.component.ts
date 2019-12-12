import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-form/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin = true;
  constructor() { }

  ngOnInit() {
  }

  setShowLogin(setting: boolean){
    this.showLogin = setting;
  }

  handleLogin(loginData: LoginModel){
    console.log(loginData);
  }

}
