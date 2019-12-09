import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServicesModule } from './api-services/api-services.module';
import { NavComponent } from './app-components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
