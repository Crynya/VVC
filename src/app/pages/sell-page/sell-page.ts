
import { Component } from '@angular/core';
import { CarComponent } from '../../components/car-component/car-component';
import { SidebarComponent } from '../../components/sidebar-component/sidebar-component';
import { CarsServices} from '../../services/cars-services/cars-services';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {Car} from '../../models/car-model';
import {HeaderComponent} from '../../components/header-component/header-component';

@Component({
  selector: 'app-sell-page',
  standalone: true,
  imports: [CarComponent, SidebarComponent, CommonModule, HeaderComponent],
  templateUrl: './sell-page.html',
  styleUrls: ['./sell-page.css']
})
export class SellPage {
  cars$: Observable<Car[]>;

  loadCars(filters?: any) {
    this.cars$ = this.carService.getAllCars(filters);
  }

  constructor(private carService: CarsServices) {
    this.cars$ = this.carService.getAllCars();
  }
}
