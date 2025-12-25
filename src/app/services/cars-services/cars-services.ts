import {Component, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';

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
  previousOwners: number;
  photoUrl: string;
  transmission: string;
  horsePower: number;
  gearbox: string;
  cylinders: number;
  engineCapacity: number;
  color: string;
  seatMaterial: string;
  description: string;
  location: string;

}

@Injectable({ providedIn: 'root' })
export class CarsServices {
  private apiUrl = `${environment.API_VVC}/cars`;

  constructor(private http: HttpClient) {
  }

  getAllCars(filters?: any): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl, { params: filters }).pipe(take(1));
  }



  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }


}
