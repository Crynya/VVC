import {Component, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Centre} from '../../models/centre-model';

@Injectable({ providedIn: 'root' })
export class CentreService {
  private apiUrl = `${environment.API_VVC}/CentreControllers`;


  private centresSubject = new BehaviorSubject<Centre[]>([]);
  centres$ = this.centresSubject.asObservable();


  constructor(private http: HttpClient) {}

  getCentreByName(name: string): Observable<Centre> {
    return this.http.get<Centre>(`${this.apiUrl}/${name}`);
  }

  getAllCentres(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.apiUrl);
  }

  loadCentres(): void {
    this.http.get<Centre[]>(this.apiUrl).subscribe({
      next: (data) => this.centresSubject.next(data),
      error: (err) => console.error('Erreur API :', err)
    });
  }

  createCentre(centre: Centre): Observable<Centre> {
    return this.http.post<Centre>(this.apiUrl, centre);
  }

  updateCentre(id: number, centre: Centre): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, centre);
  }

  deleteCentre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
