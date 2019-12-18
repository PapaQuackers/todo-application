import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuForDirective } from './menu-for.directive';
import { MenuOptionComponent } from './menu-option/menu-option.component';



@NgModule({
  declarations: [MenuComponent, MenuForDirective, MenuOptionComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, MenuForDirective, MenuOptionComponent],
  entryComponents: [MenuComponent]
})
export class MenuModule { }
