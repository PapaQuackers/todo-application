import { Injectable } from '@angular/core';
import { UserApi } from 'src/app/api-services/services/user-api';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { LoginModel } from '../login-form/login-model';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterModel } from '../register-form/register-model';
import { ToastService } from 'src/app/shared/toast/toast/toast.service';

@Injectable()
export class UserService {

  constructor(
    private userApi: UserApi, 
    private appService: ApplicationService,
    private router: Router, 
    private toastService: ToastService) { 

  }

  loginUser(loginData: LoginModel){
    this.userApi.loginUser(loginData.userName, loginData.password)
    .pipe(
      first()
    ).subscribe(res => {
      if(res.status){
        this.appService.setUser(res.data);
        this.router.navigate(['']);
        this.toastService.show({type: 'success', headerText: 'Hooray!', 'bodyText': "Welcome to Todo Manager!"})
      } else {
        this.toastService.show({type: 'danger', headerText: 'Login Error!', 'bodyText': res.message})
      }
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
