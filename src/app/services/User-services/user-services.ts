import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {User} from '../../models/user-model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = `${environment.User_API}/User`;
  private apiUserUrl = `${environment.User_API}/User/users`;
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });

  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUserUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUserUrl}/${id}`);
  }

  loadUsers(): void {
    this.http.get<User[]>(this.apiUserUrl).subscribe(data => this.usersSubject.next(data));
  }
}
