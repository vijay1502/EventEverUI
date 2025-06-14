import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
import type { Container, Engine, IOptions, RecursivePartial } from '@tsparticles/engine';

@Component({
  selector: 'app-home-page',
  imports: [NgxParticlesModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  isBrowser: boolean = false;
isLoading: boolean = true;
  showTitle :boolean = false;

constructor(@Inject(PLATFORM_ID) private platformId: Object,
private router: Router) {
  this.isBrowser = isPlatformBrowser(platformId);
}
  ngOnInit(): void {
// setTimeout(() => {
//       this.showTitle = false;
//       this.router.navigate(['/home']); // 👈 change route as needed
//     }, 2000); // 2 seconds splash delay
  }

   onTitleLoaded(): void {
    this.showTitle = true;

    // Navigate after short delay
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000); // Wait after title is visible
  }
// particlesOptions: RecursivePartial<IOptions> = {
//   background: {
//     color: { value: "#000000" }
//   },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse"
//       },
//       resize: { enable: true } // ✅ Proper typing structure
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4
//       }
//     }
//   },
//   particles: {
//     color: { value: "#ffffff" },
//     links: {
//       color: "#ffffff",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: {
//         default: "bounce"
//       },
//       random: false,
//       speed: 2,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: true,
//         width: 800
//       },
//       value: 80
//     },
//     opacity: {
//       value: 0.5
//     },
//     shape: {
//       type: "circle"
//     },
//     size: {
//       value: { min: 1, max: 5 }
//     }
//   },
//   detectRetina: true
// };
}
