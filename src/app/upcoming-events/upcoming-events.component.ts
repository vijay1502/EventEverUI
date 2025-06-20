import { Component, OnInit } from '@angular/core';
import { EventData, EventServiceService } from '../event-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-upcoming-events',
  imports: [CommonModule, RouterModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})
export class UpcomingEventsComponent implements OnInit{

  upcomingEvents: EventData[] = [];
hovering: any;

  constructor(private eventService: EventServiceService) {}

  ngOnInit(): void {
   this.eventService.getEvents().subscribe(events => {
    setTimeout(() => {
      this.upcomingEvents = events
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);
    });
  });
  }

    refreshEvents() {
    this.eventService.getEvents().subscribe(events => {
    setTimeout(() => {
      this.upcomingEvents = events
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);
    });
  });
  }

}
