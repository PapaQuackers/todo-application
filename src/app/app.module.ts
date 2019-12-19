import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServicesModule } from './api-services/api-services.module';
import { NavComponent } from './app-components/nav/nav.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { MenuModule } from './shared/menu/menu.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './api-services/services/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiServicesModule,
    OverlayModule,
    MenuModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
