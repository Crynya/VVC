
import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../admin-components/admin-header-component/admin-header-component';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import { Car } from '../../models/car-model';
import { CarsServices } from '../../services/cars-services/cars-services';
import { Observable } from 'rxjs';
import {AdminCarComponent} from '../../admin-components/admin-car-component/admin-car-component';
import {AdminCarsAddComponent} from '../../admin-components/admin-cars-add-component/admin-cars-add-component';

@Component({
  selector: 'app-admin-car-pages',
  imports: [
    AdminHeaderComponent,
    AsyncPipe,
    AdminCarComponent,
    NgForOf,
    AdminCarsAddComponent,
    NgIf,
  ],
  templateUrl: './admin-car-pages.html',
  styleUrls: ['./admin-car-pages.css'],
})
export class AdminCarPages {
  cars$: Observable<Car[]>;
  isAdding: boolean = false;

  constructor(private carService: CarsServices) {
    this.cars$ = this.carService.getAllCars();
  }
  refreshList(): void {
    this.cars$ = this.carService.getAllCars();
  }
  toggleAdd(): void {
    this.isAdding = !this.isAdding;
  }

  handleCarCreated(): void {
    this.isAdding = false;
    this.refreshList();
  }

}
