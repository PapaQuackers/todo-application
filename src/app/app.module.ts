import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServicesModule } from './api-services/api-services.module';
import { NavComponent } from './app-components/nav/nav.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { MenuComponent } from './app-components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiServicesModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MenuComponent]
})
export class AppModule { }
