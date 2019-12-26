import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ToastService } from '../shared/toast/toast/toast.service';
import { ToastData } from '../shared/toast/toast/toast-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService{
  private userSubject$: Subject<User> = new BehaviorSubject<User>(null);
  public user$: Observable<User> = this.userSubject$.asObservable();

  constructor(private toastService: ToastService, private router: Router){}
  setUser(user: User){
    this.storeUserDataLocally(user);
    this.userSubject$.next(user);
  }

  storeUserDataLocally(user: User){
    localStorage.setItem("user", JSON.stringify(user));
  }

  initializeUserData(){
    const user = localStorage.getItem("user");

    if(user){
      this.userSubject$.next(JSON.parse(user));
    }
  }

  logout(){
    localStorage.removeItem("user");
    this.userSubject$.next(null);
    this.router.navigate(['/login']);
    this.toastService.show({type:'success', headerText: "Bye Bye", bodyText: "You've been logged out successfully!"})
  }

  fireToast(data: ToastData){
    this.toastService.show(data);
  }

}
