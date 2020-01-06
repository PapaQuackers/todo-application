import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/side-nav/nav.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  navItems: NavItem[] = [
    {
      routerLink: "Inbox",
      navText: 'Inbox',
      iconColor: '#246fe0'
    },
    {
      routerLink: "Today",
      navText: 'Today',
      iconColor: '#058527'
    },
    {
      routerLink: "NextSeven",
      navText: 'Next 7 Days',
      iconColor: '#692fc2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
