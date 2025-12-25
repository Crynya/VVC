import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-connection-user-component',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './connection-user-component.html',
  styleUrls: ['./connection-user-component.css'],
})
export class ConnectionUserComponent {

  @Input() role: string = 'User';
  @Output() onLogin = new EventEmitter<{ email: string; password: string }>();

  email = '';
  password = '';

  login() {
    this.onLogin.emit({ email: this.email, password: this.password });
  }


}
