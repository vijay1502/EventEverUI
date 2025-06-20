import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxParticlesModule } from "@tsparticles/angular";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxParticlesModule,
    RouterModule
  ]
})
export class AppModule { }
