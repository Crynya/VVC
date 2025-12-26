import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../../models/car-model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CarsServices} from '../../services/cars-services/cars-services';

@Component({
  selector: 'app-admin-cars-modifier-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-cars-modifier-component.html',
  styleUrl: './admin-cars-modifier-component.css',
})
export class AdminCarsModifierComponent {

  @Input() car!: Car;
  @Output() carUpdated = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarsServices) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      brand: [this.car.brand],
      model: [this.car.model],
      price: [this.car.price],
      km: [this.car.km],
      year: [this.car.year]
    });
  }

  saveChanges() {
    const updatedCar = { ...this.car, ...this.editForm.value };
    this.carService.updateCar(this.car.id, updatedCar).subscribe({
      next: () => {
        alert('Voiture mise à jour avec succès');
        this.carUpdated.emit();
      },
      error: () => alert('Erreur lors de la mise à jour')
    });
  }

  cancel() {
    this.cancelEdit.emit();
  }
}
