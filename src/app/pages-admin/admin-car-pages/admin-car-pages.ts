
import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../admin-components/admin-header-component/admin-header-component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Car } from '../../models/car-model';
import { CarsServices } from '../../services/cars-services/cars-services';
import { Observable } from 'rxjs';
import {AdminCarComponent} from '../../admin-components/admin-car-component/admin-car-component';

@Component({
  selector: 'app-admin-car-pages',
  imports: [
    AdminHeaderComponent,
    AsyncPipe,
    AdminCarComponent,
    NgForOf,
  ],
  templateUrl: './admin-car-pages.html',
  styleUrls: ['./admin-car-pages.css'],
})
export class AdminCarPages {
  cars$: Observable<Car[]>;

  constructor(private carService: CarsServices) {
    this.cars$ = this.carService.getAllCars();
  }
  refreshList(): void {
    this.cars$ = this.carService.getAllCars();
  }


}
