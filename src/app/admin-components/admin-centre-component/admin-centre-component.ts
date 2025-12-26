import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Centre} from '../../models/centre-model';
import {CentreService} from '../../services/centre-services/centre-services';
import {AdminCentreModifierComponent} from '../admin-centre-modifier-component/admin-centre-modifier-component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-centre-component',
  imports: [
    AdminCentreModifierComponent,
    NgIf
  ],
  templateUrl: './admin-centre-component.html',
  styleUrl: './admin-centre-component.css',
})
export class AdminCentreComponent {
  @Input() centre!: Centre;
  @Output() centreDeleted = new EventEmitter<void>();
  @Output() centreUpdated = new EventEmitter<void>();

  isEditing = false;

  constructor(private centreService: CentreService) {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  deleteCentre(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce centre ?')) {
      this.centreService.deleteCentre(id).subscribe({
        next: () => {
          alert('Centre supprimé avec succès');
          this.centreDeleted.emit();
        },
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }

  handleUpdate() {
    this.isEditing = false;
    this.centreUpdated.emit();
  }

  handleCancel() {
    this.isEditing = false;
  }

}
