import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxParticlesModule } from "@tsparticles/angular";
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxParticlesModule
  ]
})
export class AppModule { }
