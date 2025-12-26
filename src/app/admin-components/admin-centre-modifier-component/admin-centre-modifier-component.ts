import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Centre} from '../../models/centre-model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CentreService} from '../../services/centre-services/centre-services';

@Component({
  selector: 'app-admin-centre-modifier-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-centre-modifier-component.html',
  styleUrl: './admin-centre-modifier-component.css',
})
export class AdminCentreModifierComponent {
  @Input() centre!: Centre;
  @Output() centreUpdated = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private centreService: CentreService) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      name: [this.centre.name],
      address: [this.centre.address],
      numeroTel: [this.centre.numeroTel],
      horaire: [this.centre.horaire],
      latitude: [this.centre.latitude],
      longitude: [this.centre.longitude]
    });
  }

  saveChanges() {
    const updatedCentre = { ...this.centre, ...this.editForm.value };
    this.centreService.updateCentre(this.centre.id, updatedCentre).subscribe({
      next: () => {
        alert('Centre mis à jour avec succès');
        this.centreUpdated.emit();
      },
      error: () => alert('Erreur lors de la mise à jour du centre')
    });
  }

  cancel() {
    this.cancelEdit.emit();
  }


}
