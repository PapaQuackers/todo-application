import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from './login-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'todo-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  
  loginForm: FormGroup;

  @Output()
  registrationRequested: EventEmitter<void> = new EventEmitter();
  @Output()
  loginCompleted: EventEmitter<LoginModel> = new EventEmitter<LoginModel>();

  constructor(private fb: FormBuilder, private userService: UserService) { 
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }


  emitRegistrationRequested(){
    this.registrationRequested.emit();
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.userService.loginUser(this.loginForm.value);
    }
  }

}
