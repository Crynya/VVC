import { Component } from '@angular/core';
import {AdminHeaderComponent} from "../../admin-components/admin-header-component/admin-header-component";
import {User} from '../../models/user-model';
import {UserServices} from '../../services/User-services/user-services';
import {AdminUserComponent} from '../../admin-components/admin-user-component/admin-user-component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-admin-users-pages',
  imports: [
    AdminHeaderComponent,
    AdminUserComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './admin-users-pages.html',
  styleUrl: './admin-users-pages.css',
})
export class AdminUsersPages {

  users$!: Observable<User[]>;

  constructor(private userService: UserServices) {
  }

  ngOnInit(): void {
    this.userService.loadUsers();
    this.users$ = this.userService.users$.pipe(
      map(users => users.filter(u => u.role === 'User'))
    );
  }

  refreshUsers() {
    this.userService.loadUsers();
  }
}
