import {Component, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-cars-services',
  imports: [],
  templateUrl: './cars-services.html',
  styleUrl: './cars-services.css',
})
export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  km: number;
  price: number;
  fuelType: string;
  photoUrl: string;
}

@Injectable({ providedIn: 'root' })
export class CarsServices {
  private apiUrl = `${environment.API_VVC}/cars`;

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
}
