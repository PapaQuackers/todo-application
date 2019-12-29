import { Component, OnInit, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@Component({
  selector: 'todo-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @ContentChild(InputRefDirective,{static:false})
    input: InputRefDirective;
    
    @HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }
  constructor() { }

  ngOnInit() {
  }

}
