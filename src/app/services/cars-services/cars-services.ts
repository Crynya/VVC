import {Component, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {Car} from '../../models/car-model';

// @ts-ignore
@Component({
  selector: 'app-cars-services',
  imports: [],
  templateUrl: './cars-services.html',
  styleUrl: './cars-services.css',
})

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

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car).pipe(take(1));
  }

  updateCar(id: number, car: Car): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, car).pipe(take(1));
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(take(1));
  }
}

