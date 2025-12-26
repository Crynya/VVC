
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car-model';
import { environment } from '../../../environments/environment';
import { CarsServices } from '../../services/cars-services/cars-services';
import { Router } from '@angular/router';
import {AdminCarsModifierComponent} from '../admin-cars-modifier-component/admin-cars-modifier-component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-admin-car',
  standalone: true,
  templateUrl: './admin-car-component.html',
  styleUrls: ['./admin-car-component.css'],
  imports: [AdminCarsModifierComponent, NgIf]
})
export class AdminCarComponent {
  @Input() car!: Car;
  @Output() carDeleted = new EventEmitter<void>();
  @Output() carUpdated = new EventEmitter<void>();

  isEditing = false;
  protected readonly environment = environment;

  constructor(private router: Router, private carService: CarsServices) {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  deleteCar(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      this.carService.deleteCar(id).subscribe({
        next: () => {
          alert('Voiture supprimée avec succès');
          this.carDeleted.emit();
        },
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }

  handleUpdate() {
    this.isEditing = false;
    this.carUpdated.emit();
  }

  handleCancel() {
    this.isEditing = false;
  }
}
