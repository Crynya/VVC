import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {Car} from '../../models/car-model';

@Component({
  selector: 'app-car-component',
  imports: [],
  templateUrl: './car-component.html',
  styleUrl: './car-component.css',
})
export class CarComponent {
  @Input() car!: Car;
  protected readonly environment = environment;

  constructor(private router: Router) {}


  goToDetail(id: number) {
    this.router.navigate(['/car', id]);
  }

}
