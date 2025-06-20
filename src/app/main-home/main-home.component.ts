import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ReusableButtonComponent } from "../shared/reusable-button/reusable-button.component";
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { NAVIGATION_MAP, SIGNIN_BOOL, USER_CHECK_LIST } from '../constants/navigation.constants';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-home',
  imports: [ReusableButtonComponent, CommonModule],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent implements AfterViewInit{
trendingSlides: any;

constructor(private router: Router,
  @Inject(PLATFORM_ID) private platformId: Object
) {}
  isSignUpEnabled: boolean = true;
 @ViewChild('usageChart',{static: false}) usageChartRef!: ElementRef<HTMLCanvasElement>;
  email: String = "support@eventever.com";
trendingEvents = [
  {
    title: 'Startup Weekend',
    subtitle: 'Pitch. Launch. Grow.',
    imageUrl: '../../assets/EventEverLogoLoad.jpg'
  },
  {
    title: 'Yogathon',
    subtitle: 'Breathe. Stretch. Live.',
    imageUrl: '../../assets/BackgroundImgEvent.png'
  },
  {
    title: 'Food Festival',
    subtitle: 'Taste the Culture',
    imageUrl: '../../assets/BackgroundImgEvent.png'
  },
  {
    title: 'Tech Talk 2025',
    subtitle: 'Future Begins Here',
    imageUrl: '../../assets/EventEverLogo.jpg'
  }
];

ngAfterViewInit(): void {
  if (!this.usageChartRef) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = this.usageChartRef.nativeElement.getContext('2d');
  if (!ctx) {
    console.error('Could not acquire canvas context');
    return;
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Usage',
        data: [12, 19, 3, 5, 2, 8],
        borderColor: 'gold',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      scales: {
        x: { ticks: { color: 'gold' }},
        y: { ticks: { color: 'gold' }}
      },
      plugins: {
        legend: {
          labels: { color: 'gold' }
        }
      }
    }
  });
}

onClick(label: any) {
const route = NAVIGATION_MAP[label];
    if (route) {
      if(USER_CHECK_LIST.includes(label)){
        if(label==='Login'){
          this.isSignUpEnabled = false;
        }
        if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem(SIGNIN_BOOL,JSON.stringify(this.isSignUpEnabled))
      }
      }
      this.router.navigate([route]);
    } else {
      console.warn(`No route defined for: ${label}`);
    }
  }



}
