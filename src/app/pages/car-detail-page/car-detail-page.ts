
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsServices, Car } from '../../services/cars-services/cars-services';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-car-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-detail-page.html',
  styleUrls: ['./car-detail-page.css']
})
export class CarDetailPage {
  car$: Observable<Car>;

  constructor(private carService: CarsServices, private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car$ = this.carService.getCarById(id); // Directement l’Observable
  }

  openGoogleMaps(location: string): void {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  }


  protected readonly environment = environment;
}
