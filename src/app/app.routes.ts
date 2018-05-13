import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';


const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
