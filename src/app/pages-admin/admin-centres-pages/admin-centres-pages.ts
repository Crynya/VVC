import { Component } from '@angular/core';
import {AdminHeaderComponent} from "../../admin-components/admin-header-component/admin-header-component";
import {Observable} from 'rxjs';
import {Centre} from '../../models/centre-model';
import {CentreService} from '../../services/centre-services/centre-services';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {AdminCentreAddComponent} from '../../admin-components/admin-centre-add-component/admin-centre-add-component';
import {AdminCentreComponent} from '../../admin-components/admin-centre-component/admin-centre-component';

@Component({
  selector: 'app-admin-centres-pages',
  imports: [
    AdminHeaderComponent,
    NgIf,
    NgForOf,
    AsyncPipe,
    AdminCentreAddComponent,
    AdminCentreComponent,
  ],
  templateUrl: './admin-centres-pages.html',
  styleUrl: './admin-centres-pages.css',
})
export class AdminCentresPages {
  centres$: Observable<Centre[]>;
  isAdding = false;

  constructor(private centreService: CentreService) {
    this.centres$ = this.centreService.getAllCentres();
  }

  refreshList(): void {
    this.centres$ = this.centreService.getAllCentres();
  }

  toggleAdd(): void {
    this.isAdding = !this.isAdding;
  }

  handleCentreCreated(): void {
    this.isAdding = false;
    this.refreshList();
  }
}
