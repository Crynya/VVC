
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Sidebar-component.html',
  styleUrls: ['./Sidebar-component.css']
})
export class SidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  brands = ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Ford', 'Renault', 'Peugeot','Tesla', 'Volswagen', 'toyota', 'Suzuki'];

  filters = {
    brand: '',
    priceMax: null,
    kmMax: null,
    fuel: '',
    yearMin: null
  };

  applyFilters() {
    const queryParams: any = {
      brand: this.filters.brand || '',
      price: this.filters.priceMax || '',
      km: this.filters.kmMax || '',
      fuelType: this.filters.fuel || '',
      year: this.filters.yearMin || ''
    };
    this.filtersChanged.emit(queryParams);
  }

  resetFilters() {
    this.filters = {
      brand: '',
      priceMax: null,
      kmMax: null,
      fuel: '',
      yearMin: null
    };
    this.filtersChanged.emit({});
  }


}
