import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService{
  private userSubject$: Subject<User> = new BehaviorSubject<User>(null);
  public user$: Observable<User> = this.userSubject$.asObservable();


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
  }
}
