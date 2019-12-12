import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'todo-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output()
  loginRequested: EventEmitter<void> = new EventEmitter();

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    })
  }

  emitLoginRequested(){
    this.loginRequested.emit();
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.userService.registerUser(this.registerForm.value);
    }
  }

}
