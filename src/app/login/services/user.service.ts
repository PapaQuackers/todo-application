import { Injectable } from '@angular/core';
import { UserApi } from 'src/app/api-services/services/user-api';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { LoginModel } from '../login-form/login-model';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterModel } from '../register-form/register-model';
import { ToastService } from 'src/app/shared/toast/toast/toast.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  loadingObservable$ = this.loadingSubject$.asObservable();

  constructor(
    private userApi: UserApi, 
    private appService: ApplicationService,
    private router: Router, 
    private toastService: ToastService) { 

  }

  loginUser(loginData: LoginModel){
    this.loadingSubject$.next(true);
    this.userApi.loginUser(loginData.userName, loginData.password)
    .pipe(
      first()
    ).subscribe(res => {
      if(res.status){
        this.loadingSubject$.next(false);
        this.appService.setUser(res.data);
        this.router.navigate(['']);
        this.toastService.show({type: 'success', headerText: 'Hooray!', 'bodyText': "Welcome to Todo Manager!"});
      } else {
        this.loadingSubject$.next(false);
        this.toastService.show({type: 'danger', headerText: 'Login Error!', 'bodyText': res.message})
      }
    })
  }

  registerUser(registrationData: RegisterModel){
    this.loadingSubject$.next(true);
    this.userApi.registerAccount(registrationData)
    .pipe(
      first()
    ).subscribe(_ => {
      this.loadingSubject$.next(false);
      this.loginUser({userName: registrationData.userName, password: registrationData.password});
    })
  }
}
