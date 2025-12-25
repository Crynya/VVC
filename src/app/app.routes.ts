
import { Routes } from '@angular/router';
import { SellPage } from './pages/sell-page/sell-page';
import {CarDetailPage} from './pages/car-detail-page/car-detail-page';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'sell', pathMatch: 'full' },
  { path: 'sell', component: SellPage },
  { path: 'info', component: SellPage },
  { path: 'car/:id', component: CarDetailPage}
];
