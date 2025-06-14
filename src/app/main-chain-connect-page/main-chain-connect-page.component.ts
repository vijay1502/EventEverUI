import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RadialMenuComponent } from "../radial-menu/radial-menu.component";

@Component({
  selector: 'app-main-chain-connect-page',
  imports: [CommonModule, RadialMenuComponent],
  templateUrl: './main-chain-connect-page.component.html',
  styleUrl: './main-chain-connect-page.component.css'
})
export class MainChainConnectPageComponent {
}
