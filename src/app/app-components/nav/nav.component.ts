import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { TodoApi } from 'src/app/api-services/services/todo-api';
import { Todo } from 'src/app/models/todo.model';
import { map, debounceTime, distinctUntilChanged, share } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'todo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  userData$: Observable<User>;
  todoSearches$: Observable<Todo[]>;
  searchControl: FormControl = new FormControl();
  constructor(private applicationService: ApplicationService, private todoAPI: TodoApi) { }

  ngOnInit() {
    this.userData$ = this.applicationService.user$;
    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(v => {
      this.searchTodos(v)
    })
  }

  logout(){
    this.applicationService.logout();
  }

  logValue(data: any){
    console.log(data);
  }

  searchTodos(search: string){
    console.log(search);
    this.todoSearches$ = this.todoAPI.getAllTodos(search).pipe(
      map(r => r.data),
      share()
    )
  }
}
