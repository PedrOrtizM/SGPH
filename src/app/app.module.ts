import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import {APP_ROUTING} from './app.routes';

//SERVICIOS
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModulosService } from './services/modulos.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    NavbarComponent,

    HomeComponent,

    SesionComponent,



  ],
  imports: [
    BrowserModule,
    APP_ROUTING,


  ],
  providers: [ModulosService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
