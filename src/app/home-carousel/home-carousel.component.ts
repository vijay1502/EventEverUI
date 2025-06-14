import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  imports: [CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  @Input() events: any[] = []; // Array of event objects with {imageUrl, title, viewers, trend}

}
