import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIClient } from './services/api-client';
import { UserApi } from './services/user-api';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    APIClient,
    UserApi
  ]
})
export class ApiServicesModule { }
