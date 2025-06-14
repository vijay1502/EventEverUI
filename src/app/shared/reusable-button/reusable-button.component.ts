import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  imports: [CommonModule],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css'
})
export class ReusableButtonComponent {
  @Input() label: string = 'Click';
  @Input() type: string = 'primary'; // Bootstrap button types
  @Input() size: string = 'md'; // sm, md, lg
  @Output() clicked = new EventEmitter<void>();
  onClick() {
    this.clicked.emit();
  }
}
