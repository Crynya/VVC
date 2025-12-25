import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {User} from '../../models/user-model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = `${environment.User_API}/User`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }



}
