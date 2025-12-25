import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {User} from '../../models/user-model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = `${environment.User_API}/UserController`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        return user || null;
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }


}
