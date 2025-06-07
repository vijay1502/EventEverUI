import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
searchForm!: FormGroup;
searchFormFilter !: FormGroup;
adventureTypes = ['Trekking', 'Safari', 'Scuba Diving'];
  prices = [100, 200, 300, 400, 500, 1000];


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      keyword: ['', Validators.required]
    });
     this.searchFormFilter = this.fb.group({
      destination: [''],
      adventureType: [''],
      minPrice: [''],
      maxPrice: ['']
    });
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      console.log('Search:', this.searchForm.value.keyword);
    } else {
      this.searchForm.markAllAsTouched();
    }
  }

  onSearchFilter():void{
    
  }
}
