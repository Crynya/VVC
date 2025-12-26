import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-header-component',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './admin-header-component.html',
  styleUrl: './admin-header-component.css',
})
export class AdminHeaderComponent
{

  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role === 'Admin') {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('surname');
    this.isLoggedIn = false;
    this.router.navigate(['/']); // ✅ Retour à la page de connexion
  }

}
