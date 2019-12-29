import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { InputRefDirective } from './input-ref.directive';



@NgModule({
  declarations: [FormControlComponent, InputRefDirective],
  imports: [
    CommonModule
  ],
  exports:[
    FormControlComponent,
    InputRefDirective
  ]
})
export class FormControlModule { }
