import {Component, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Centre} from '../../models/centre-model';

// @ts-ignore
@Component({
  selector: 'app-centre-services',
  imports: [],
  templateUrl: './centre-services.html',
  styleUrl: './centre-services.css',
})


@Injectable({ providedIn: 'root' })
export class CentreService {
  private apiUrl = `${environment.API_VVC}/CentreControllers`;

  constructor(private http: HttpClient) {}

  getCentreByName(name: string): Observable<Centre> {
    return this.http.get<Centre>(`${this.apiUrl}/${name}`);
  }
}
