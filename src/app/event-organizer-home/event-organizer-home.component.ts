import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UpcomingEventsComponent } from "../upcoming-events/upcoming-events.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from "../payment-section/payment-section.component";
import { FeedBackComponent } from "../feed-back/feed-back.component";

@Component({
  selector: 'app-event-organizer-home',
  imports: [UpcomingEventsComponent, CommonModule, PaymentSectionComponent, FeedBackComponent],
  templateUrl: './event-organizer-home.component.html',
  styleUrl: './event-organizer-home.component.css'
})
export class EventOrganizerHomeComponent implements AfterViewInit{
@ViewChild(UpcomingEventsComponent) upcomingEventsRef!: UpcomingEventsComponent;
@ViewChild(PaymentSectionComponent) paymentSectionRef!: PaymentSectionComponent;
hovering: boolean = false;
 showNotifications = false;
  showProfileMenu = false;
  notifications: string[] = ['Welcome to EventEver!', 'New update available!'];
constructor(private router:Router){}
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showProfileMenu = false;
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
    this.showNotifications = false;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.showProfileMenu = false;
  }

  logout() {
    // Add logout logic here
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
ngAfterViewInit() {
  this.upcomingEventsRef.refreshEvents(); // only if needed
  this.paymentSectionRef.refreshPayments();
}

navigateToCreateEvent(){
  console.log("/createEvent Click");
  this.router.navigate(['createEvent']);
}

navigateToBookEvent(){
  console.log("Book Event click")
  this.router.navigate([''])

}

}
