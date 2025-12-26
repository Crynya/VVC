
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Car } from '../../models/car-model';
import { Router } from '@angular/router';
import { CarsServices } from '../../services/cars-services/cars-services';

@Component({
  selector: 'app-admin-car',
  standalone: true,
  templateUrl: './admin-car-component.html',
  styleUrls: ['./admin-car-component.css']
})
export class AdminCarComponent {
  @Input() car!: Car;
  @Output() carDeleted = new EventEmitter<void>();
  protected readonly environment = environment;

  constructor(private router: Router, private carService: CarsServices) {}

  editCar(id: number) {
    this.router.navigate(['/admin/edit-car', id]);
  }

  deleteCar(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      this.carService.deleteCar(id).subscribe({
        next: () => {
          alert('Voiture supprimée avec succès');
          this.carDeleted.emit(); // ✅ Informe le parent
        },
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }
}
