import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-slider-component',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './slider-component.html',
  styleUrls: ['./slider-component.css']
})
export class SliderComponent {
  slides = [
    { image: 'https://lipsum.app/1200x500', title: 'Slide 1', subtitle: 'Açıklama 1', buttonText: 'Başla' },
    { image: 'https://lipsum.app/640x780/ff7f7f', title: 'Slide 2', subtitle: 'Açıklama 2', buttonText: 'Daha Fazla' },
    { image: 'https://lipsum.app/1200x500/7f7fff', title: 'Slide 3', subtitle: 'Açıklama 3', buttonText: 'İncele' }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
