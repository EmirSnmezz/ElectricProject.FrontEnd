import { Component, HostListener } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatToolbar, MatToolbarRow } from "@angular/material/toolbar";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar-component',
  imports: [MatToolbar, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  
}


