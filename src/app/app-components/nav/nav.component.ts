import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'todo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  userData$: Observable<User>;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.userData$ = this.applicationService.user$;
  }

  logout(){
    this.applicationService.logout();
  }
}
