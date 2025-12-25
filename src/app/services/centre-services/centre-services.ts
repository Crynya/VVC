import { Component } from '@angular/core';

@Component({
  selector: 'app-centre-services',
  imports: [],
  templateUrl: './centre-services.html',
  styleUrl: './centre-services.css',
})
export interface Centre {
  id: number;
  name: string;
  address: string;
  numeroTel: string;
  latitude: number;
  longitude: number;
}

