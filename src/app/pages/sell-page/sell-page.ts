import { Component } from '@angular/core';
import {CarComponent} from '../../components/car-component/car-component';
import {SidebarComponent} from '../../components/sidebar-component/sidebar-component';

@Component({
  selector: 'app-sell-page',
  imports: [
    CarComponent,
    SidebarComponent
  ],
  templateUrl: './sell-page.html',
  styleUrl: './sell-page.css',
})
export class SellPage {

}
