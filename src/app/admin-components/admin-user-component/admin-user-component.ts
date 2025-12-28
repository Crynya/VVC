import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user-model';
import { ReactiveFormsModule} from '@angular/forms';
import {UserServices} from '../../services/User-services/user-services';
import {AdminUserModifierComponent} from '../admin-user-modifier-component/admin-user-modifier-component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-user-component',
  imports: [
    ReactiveFormsModule,
    AdminUserModifierComponent,
    NgIf
  ],
  templateUrl: './admin-user-component.html',
  styleUrl: './admin-user-component.css',
})
export class AdminUserComponent {
  @Input() user!: User;
  @Output() userUpdated = new EventEmitter<void>();
  @Output() userDeleted = new EventEmitter<void>();

  isEditing = false;

  constructor(private userService: UserServices) {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  handleUpdate() {
    this.isEditing = false;
    this.userUpdated.emit();
  }

  handleCancel() {
    this.isEditing = false;
  }

  deleteUser() {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(this.user.id).subscribe(() => {
        alert('Utilisateur supprimé avec succès');
        this.userDeleted.emit(); // ✅ Pour rafraîchir la liste
      });
    }
  }

}
