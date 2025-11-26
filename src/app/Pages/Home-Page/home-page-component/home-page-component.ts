import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar'
import { CommonModule } from '@angular/common';
import { SliderComponent } from "./slider-component/slider-component/slider-component";

@Component({
  selector: 'app-home-page-component',
  imports: [MatMenuModule, MatIconModule, MatToolbarModule, CommonModule, SliderComponent],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css',
})
export class HomePageComponent {

}
