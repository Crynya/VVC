
import { Component } from '@angular/core';
import { CarComponent } from '../../components/car-component/car-component';
import { SidebarComponent } from '../../components/sidebar-component/sidebar-component';
import { CarsServices, Car } from '../../services/cars-services/cars-services';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sell-page',
  standalone: true,
  imports: [CarComponent, SidebarComponent, CommonModule],
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
