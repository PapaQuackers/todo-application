import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserService } from './services/user.service';
import { ButtonModule } from '../shared/button/button.module';
import { FormControlModule } from '../shared/form-control/form-control.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    FormControlModule,
    SpinnerModule
  ],
  providers: [
    UserService
  ]
})
export class LoginModule { }
