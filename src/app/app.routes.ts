
import { Routes } from '@angular/router';
import { SellPage } from './pages/sell-page/sell-page';
import {CarDetailPage} from './pages/car-detail-page/car-detail-page';
import {ConnectionPage} from './pages/connection-page/connection-page';
import {AuthGuard} from './guards/auth_guard';
import {AdminGuard} from './guards/admin-guard';
import {AdminCarPages} from './pages-admin/admin-car-pages/admin-car-pages';
import {AdminCentresPages} from './pages-admin/admin-centres-pages/admin-centres-pages';
import {AdminUsersPages} from './pages-admin/admin-users-pages/admin-users-pages';
import {InforamtionPage} from './pages/inforamtion-page/inforamtion-page';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnectionPage },
  { path: 'sell', component: SellPage, canActivate: [AuthGuard]},
  { path: 'info', component: InforamtionPage, canActivate: [AuthGuard] },
  { path: 'car/:id', component: CarDetailPage, canActivate: [AuthGuard]},
  {path: 'admin',
    canActivate: [AdminGuard],
    children: [
      { path: 'voiture', component: AdminCarPages },
      { path: 'centre', component: AdminCentresPages },
      { path: 'user', component: AdminUsersPages }
    ]
  }
];
