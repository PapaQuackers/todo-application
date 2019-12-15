import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ButtonLinkDirective } from './button-link.directive';



@NgModule({
  declarations: [ButtonDirective, ButtonLinkDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    ButtonLinkDirective
  ]
})
export class ButtonModule { }
