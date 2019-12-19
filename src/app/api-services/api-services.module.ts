import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIClient } from './services/api-client';
import { UserApi } from './services/user-api';
import { HttpClientModule } from '@angular/common/http';
import { TodoApi } from './services/todo-api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    APIClient,
    UserApi,
    TodoApi
  ],
  exports: [
  ]
})
export class ApiServicesModule { }
