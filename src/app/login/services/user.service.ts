import { Injectable } from '@angular/core';
import { UserApi } from 'src/app/api-services/services/user-api';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { LoginModel } from '../login-form/login-model';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterModel } from '../register-form/register-model';

@Injectable()
export class UserService {

  constructor(
    private userApi: UserApi, 
    private appService: ApplicationService,
    private router: Router) { 

  }

  loginUser(loginData: LoginModel){
    this.userApi.loginUser(loginData.userName, loginData.password)
    .pipe(
      map(res => res.data),
      first()
    ).subscribe(userData => {
      this.appService.setUser(userData);
      this.router.navigate(['']);
    })
  }

  registerUser(registrationData: RegisterModel){
    this.userApi.registerAccount(registrationData)
    .pipe(
      first()
    ).subscribe(_ => {
      this.loginUser({userName: registrationData.userName, password: registrationData.password});
    })
  }
}
