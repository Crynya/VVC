import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  isLoggedIn = false;
  userName = '';
  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      this.userName = localStorage.getItem('surname') || 'Compte';// affiche le nom
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.isLoggedIn = false;
    this.router.navigate(['/']); // ✅ Retour à la page de connexion
  }


}
