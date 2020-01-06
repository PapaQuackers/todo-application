import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { NextSevenDaysComponent } from './next-seven-days/next-seven-days.component';


@NgModule({
  declarations: [TodosComponent, InboxComponent, TodayComponent, NextSevenDaysComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SideNavModule
  ]
})
export class TodosModule { }
