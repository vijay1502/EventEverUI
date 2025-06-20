import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PaymentData {
id: any;
  name: string;
  date: Date; // ISO format like '2025-06-07T15:00:00'
  amount: number;
}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  getAllPayments():Observable<PaymentData[]>{
    const mockEvents: PaymentData[] = [
  { name: 'Payment 1', date: new Date('2025-03-25'), amount: 200,id:'' },
  { name: 'Payment 2', date: new Date('2025-12-07'), amount: 150,id:'' },
  { name: 'Payment 3', date: new Date('2025-09-10'), amount: 300,id:'' }
        ];
    
        return of(mockEvents);
  }
}
