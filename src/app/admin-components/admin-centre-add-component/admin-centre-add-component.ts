import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CentreService} from '../../services/centre-services/centre-services';
import {Centre} from '../../models/centre-model';

@Component({
  selector: 'app-admin-centre-add-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-centre-add-component.html',
  styleUrl: './admin-centre-add-component.css',
})
export class AdminCentreAddComponent {

  @Output() centreCreated = new EventEmitter<void>();
  @Output() cancelAdd = new EventEmitter<void>();

  addForm!: FormGroup;

  constructor(private fb: FormBuilder, private centreService: CentreService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: [''],
      address: [''],
      numeroTel: [''],
      horaire: [''],
      latitude: [0],
      longitude: [0]
    });
  }

  createCentre() {
    const newCentre: Centre = this.addForm.value;
    this.centreService.createCentre(newCentre).subscribe({
      next: () => {
        alert('Centre ajouté avec succès');
        this.centreCreated.emit();
      },
      error: () => alert('Erreur lors de l’ajout du centre')
    });
  }

  cancel() {
    this.cancelAdd.emit();
  }

}
