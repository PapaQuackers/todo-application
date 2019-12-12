import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './application-wide-services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private appService: ApplicationService){

  }
  ngOnInit() {
    this.appService.initializeUserData();
  }
}
