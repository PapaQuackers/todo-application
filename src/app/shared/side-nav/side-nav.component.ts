import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav.model';

@Component({
  selector: 'todo-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() navItems: NavItem[];
}
