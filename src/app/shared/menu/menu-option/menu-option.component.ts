import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'todo-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent {
  @Input('value') value: any;
  private valueSelected: Subject<any> = new Subject<any>();
  public valueSeleted$: Observable<any> = this.valueSelected.asObservable();

  @HostListener('click', ['$event.target'])
  onClick(_){
    this.valueSelected.next(this.value);
  }

}
