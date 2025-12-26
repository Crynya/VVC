import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user-model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserServices} from '../../services/User-services/user-services';

@Component({
  selector: 'app-admin-user-modifier-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-user-modifier-component.html',
  styleUrl: './admin-user-modifier-component.css',
})
export class AdminUserModifierComponent {

  @Input() user!: User;
  @Output() userUpdated = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServices) {}


  ngOnInit() {
    this.editForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      password: [''],
      role: ['']
    });
  }

  ngOnChanges() {
    if (this.user && this.editForm) {
      console.log('User reçu :', this.user);
      this.editForm.patchValue({
        nom: this.user.nom,
        prenom: this.user.prenom,
        email: this.user.email,
        password: this.user.password,
        role: this.user.role
      });
    }
  }


  updateUser() {
    const updatedUser: User = this.editForm.value;
    this.userService.updateUser(this.user.id, updatedUser).subscribe(() => {
      alert('Utilisateur modifié avec succès');
      this.userService.loadUsers();
      this.userUpdated.emit();
    });
  }

  cancel() {
    this.cancelEdit.emit();
  }


}
