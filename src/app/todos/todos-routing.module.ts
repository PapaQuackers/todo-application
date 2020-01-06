import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { NextSevenDaysComponent } from './next-seven-days/next-seven-days.component';

const routes: Routes = [
  { path: '', component: TodosComponent, children: [
    {path: 'Inbox', component: InboxComponent},
    {path: 'Today', component: TodayComponent},
    {path: 'NextSeven', component: NextSevenDaysComponent},
    {path: '', redirectTo: 'Inbox'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
