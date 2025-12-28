import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-connection-component',
  imports: [
  ],
  templateUrl: './header-connection-component.html',
  styleUrl: './header-connection-component.css',
})
export class HeaderConnectionComponent {
  @Output() roleChanged = new EventEmitter<string>();
  selectedRole = 'User';

  onRoleChange(role: string) {
    this.selectedRole = role;
    this.roleChanged.emit(role);
  }


}
