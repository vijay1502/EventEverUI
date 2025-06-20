import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentData, PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-section',
  imports: [CommonModule],
  templateUrl: './payment-section.component.html',
  styleUrl: './payment-section.component.css'
})
export class PaymentSectionComponent implements OnInit{

payments: PaymentData[] = [];
hovering: any;
constructor(private paymentService:PaymentService){

}
ngOnInit(): void {
  this.paymentService.getAllPayments().subscribe(payment => {
    setTimeout(() => {
      this.payments = payment
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);
    });
  });
}

refreshPayments(){
  this.paymentService.getAllPayments().subscribe(payment => {
    setTimeout(() => {
      this.payments = payment
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);
    });
  });
}

}
