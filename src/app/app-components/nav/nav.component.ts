import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { TodoApi } from 'src/app/api-services/services/todo-api';


@Component({
  selector: 'todo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  userData$: Observable<User>;
  constructor(private applicationService: ApplicationService, private todoAPI: TodoApi) { }

  ngOnInit() {
    this.userData$ = this.applicationService.user$;
  }

  logout(){
    this.applicationService.logout();
  }

  logValue(data: any){
    console.log(data);
  }

  searchTodos(search: string){
    this.todoAPI.getAllTodos(search).subscribe(console.log);
  }
}
