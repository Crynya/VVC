
import { Routes } from '@angular/router';
import { SellPage } from './pages/sell-page/sell-page';
import {CarDetailPage} from './pages/car-detail-page/car-detail-page';
import {ConnectionPage} from './pages/connection-page/connection-page';
import {AuthGuard} from './guards/auth_guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnectionPage },
  { path: 'sell', component: SellPage, canActivate: [AuthGuard]},
  { path: 'info', component: SellPage },
  { path: 'car/:id', component: CarDetailPage, canActivate: [AuthGuard]}
];
