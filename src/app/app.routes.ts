import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SesionComponent} from './components/sesion/sesion.component';
import {AuthGuardService} from './services/auth-guard.service'



const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  // RUTA PROTEGIDA
  {
  path: 'sesion',
  component: SesionComponent ,
  canActivate: [AuthGuardService]
},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
