import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[todo-link-button]'
})
export class ButtonLinkDirective {
  @HostBinding('class') class = 'todo-link-button';
}
