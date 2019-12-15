import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[todo-button]'
})
export class ButtonDirective {
  @HostBinding('class') class = 'todo-button';
}
