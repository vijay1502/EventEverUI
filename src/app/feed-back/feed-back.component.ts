import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


export interface EventRating {
  eventName: string;
  date: Date;
  rating: number;
}

@Component({
  selector: 'app-feed-back',
  imports: [CommonModule],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.css'
})
export class FeedBackComponent implements OnInit{

overallRating: any;
eventRatings: any;

constructor(){}

ngOnInit(): void {
   this.eventRatings = [
      { eventName: 'Seminar', date: new Date('2025-06-18'), rating: 4.2 },
      { eventName: 'Conference', date: new Date('2025-07-01'), rating: 4.5 },
      { eventName: 'Hackathon', date: new Date('2025-08-12'), rating: 4.8 }
    ];
    this.calculateAverage();
}


  calculateAverage() {
    const total = this.eventRatings.reduce((sum: any, e: { rating: any; }) => sum + e.rating, 0);
    this.overallRating = (total / this.eventRatings.length).toFixed(1);
  }
  
}
