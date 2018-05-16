import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import {APP_ROUTING} from './app.routes';


//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModulosService } from './services/modulos.service';



//SERVICIOS
import {AuthService} from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,



  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [ModulosService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
