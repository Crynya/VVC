
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarsServices } from '../../services/cars-services/cars-services';
import { Car } from '../../models/car-model';
import {Centre} from '../../models/centre-model';
import {CentreService} from '../../services/centre-services/centre-services';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-cars-add-component',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, AsyncPipe],
  templateUrl: './admin-cars-add-component.html',
  styleUrls: ['./admin-cars-add-component.css'],
})
export class AdminCarsAddComponent {
  @Output() carCreated = new EventEmitter<void>();
  @Output() cancelAdd = new EventEmitter<void>();

  addForm!: FormGroup;
  centres$!: Observable<Centre[]>;

    constructor(private fb: FormBuilder,private centreService: CentreService, private carService: CarsServices) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      brand: [''],
      model: [''],
      year: [new Date().getFullYear()],
      km: [0],
      price: [0],
      fuelType: [''],
      previousOwners: [0],
      photoUrl: [''],
      transmission: [''],
      horsePower: [0],
      gearbox: [''],
      cylinders: [0],
      engineCapacity: [0],
      color: [''],
      seatMaterial: [''],
      description: [''],
      location: ['']
    });

    this.centres$ = this.centreService.centres$
    this.centreService.loadCentres();
  }

  createCar() {
    const newCar: Car = this.addForm.value;
    this.carService.createCar(newCar).subscribe({
      next: () => {
        alert('Voiture ajoutée avec succès');
        this.carCreated.emit();
      },
      error: () => alert('Erreur lors de l’ajout')
    });
  }

  cancel() {
    this.cancelAdd.emit();
  }
}
