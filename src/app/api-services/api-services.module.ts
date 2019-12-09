import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIClient } from './services/api-client';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    APIClient
  ]
})
export class ApiServicesModule { }
