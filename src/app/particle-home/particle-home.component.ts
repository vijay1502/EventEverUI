import { Component} from '@angular/core';

import { NgxParticlesModule } from '@tsparticles/angular';
import { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';


@Component({
  selector: 'app-particle-home',
  templateUrl: './particle-home.component.html',
  styleUrls: ['./particle-home.component.css'],
  imports: [NgxParticlesModule]
})
export class ParticleHomeComponent {
menu = [
    {
      label: 'Home',
      route: '/home',
    },
    {
      label: 'Events',
      expanded: false,
      children: [
        { label: 'Upcoming', route: '/events/upcoming' },
        { label: 'Past Events', route: '/events/past' },
      ],
    },
    {
      label: 'Register',
      route: '/register',
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ];

  particlesOptions: any = {
    background: {
      color: { value: '#000' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: '#00ffff' },
      links: {
        color: '#00ffff',
        distance: 120,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

  onParticlesLoaded(container: Container): void {
    // Optional
  }

  onMenuClick(item: any, event?: Event) {
    if (event) event.stopPropagation();
    if (item.children) {
      item.expanded = !item.expanded;
    } else if (item.route) {
      alert('Navigating to: ' + item.route);
      // In real use-case: this.router.navigate([item.route]);
    }
  }
}