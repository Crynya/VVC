import { Component } from '@angular/core';
import {HeaderConnectionComponent} from '../../components/header-connection-component/header-connection-component';
import {ConnectionUserComponent} from '../../components/connection-user-component/connection-user-component';
import {CreateUserComponent} from '../../components/create-user-component/create-user-component';
import {NgIf} from '@angular/common';
import {UserServices} from '../../services/User-services/user-services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-connection-page',
  imports: [
    HeaderConnectionComponent,
    ConnectionUserComponent,
    CreateUserComponent,
    NgIf
  ],
  templateUrl: './connection-page.html',
  styleUrls: ['./connection-page.css'],
})
export class ConnectionPage {
  role = 'User';

  constructor(private authService: UserServices, private router: Router) {}

  handleLogin(data: { email: string; password: string }) {
    this.authService.login(data.email, data.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); //  Stocke le token
        localStorage.setItem('role', res.role);//  Stocke le rôle (Admin/User)
        localStorage.setItem('surname', res.surname);//  Stocke le rôle (prenom)
        this.router.navigate(['/sell']);
      },
      error: () => alert('Email ou mot de passe incorrect')
    });
  }

  handleRegister(user: any) {
    this.authService.register(user).subscribe({
      next: () => {
        alert('Compte créé avec succès !');
        this.router.navigate(['/sell']);
      },
      error: () => alert('Erreur lors de la création du compte')
    });
  }




}
