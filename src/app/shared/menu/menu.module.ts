import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuForDirective } from './menu-for.directive';



@NgModule({
  declarations: [MenuComponent, MenuForDirective],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, MenuForDirective],
  entryComponents: [MenuComponent]
})
export class MenuModule { }
