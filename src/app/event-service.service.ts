import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface EventData {
id: any;
  title: string;
  date: string; // ISO format like '2025-06-07T15:00:00'
}

@Injectable({
  providedIn: 'root'
})

export class EventServiceService {
  constructor() { }
    getEvents():Observable<EventData[]> {
    const mockEvents: EventData[] = [
      { title: 'Workshop', date: '2025-06-07T15:00:00',id:'' },
      { title: 'Seminar', date: '2025-06-18T10:30:00',id:'' },
      { title: 'Conference', date: '2025-07-01T12:00:00',id:'' },
      { title: 'Hackathon', date: '2025-08-12T14:45:00' ,id:''}
    ];

    return of(mockEvents);
  }
}
