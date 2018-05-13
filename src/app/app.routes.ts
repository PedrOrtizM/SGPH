import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:email/:pass', component: DashboardComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const app_routing = RouterModule.forRoot(app_routes);
