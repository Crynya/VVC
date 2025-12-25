
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsServices} from '../../services/cars-services/cars-services';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CentreService} from '../../services/centre-services/centre-services';
import {Car} from '../../models/car-model';
import {Centre} from '../../models/centre-model';
import {HeaderComponent} from '../../components/header-component/header-component';

@Component({
  selector: 'app-car-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './car-detail-page.html',
  styleUrls: ['./car-detail-page.css']
})
export class CarDetailPage {
  car$: Observable<Car>;
  centre$: Observable<Centre>

  constructor(private carService: CarsServices,private centreService: CentreService, private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car$ = this.carService.getCarById(id); // Directement l’Observable

    this.centre$ = this.car$.pipe(
      switchMap(car => this.centreService.getCentreByName(car.location))
    );

  }

  openGoogleMaps(centre: Centre): void {
    const lat = centre.latitude;
    const lng = centre.longitude;
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  }

  protected readonly environment = environment;
}
