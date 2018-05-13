import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ModulosService } from './services/modulos.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import {FormsModule} from  '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    DashboardComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing

  ],
  providers: [ModulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
