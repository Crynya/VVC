import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-create-user-component',
  imports: [FormsModule],
  templateUrl: './create-user-component.html',
  styleUrls: ['./create-user-component.css'],
})
export class CreateUserComponent {

  @Output() onRegister = new EventEmitter<any>();

  nom = '';
  prenom = '';
  email = '';
  password = '';

  register() {
    if (!this.nom || !this.prenom || !this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    this.onRegister.emit({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      role: 'User'
    });
  }


}
