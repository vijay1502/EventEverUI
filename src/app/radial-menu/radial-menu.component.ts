import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-radial-menu',
  templateUrl: './radial-menu.component.html',
  styleUrls: ['./radial-menu.component.css'],
  imports: [CommonModule]
})
export class RadialMenuComponent implements OnInit,AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  

  center = { x: 0, y: 0, label: 'EventEver' };
  radius = 50;
  nodes = [
    { label: 'Home', x: 0, y: 0, color: '#CBA135' },
    { label: 'Events', x: 0, y: 0, color: '#CBA135' },
    { label: 'Register', x: 0, y: 0, color: '#CBA135' },
    { label: 'Booking', x: 0, y: 0, color: '#CBA135' },
    { label: 'Vendors', x: 0, y: 0, color: '#CBA135' },
    { label: 'Payments', x: 0, y: 0, color: '#CBA135' },
    { label: 'Feedback', x: 0, y: 0, color: '#CBA135' },
    { label: 'Contact', x: 0, y: 0, color: '#CBA135' },
  ];

  draggingNode: any = null;
  offset = { x: 0, y: 0 };
 centerNode = { label: 'EventEver' };
// outerNodes: any = [
//     { label: 'Home', x: 0, y: 0, color: '#FF6B6B' },
//     { label: 'Events', x: 0, y: 0, color: '#FFD93D' },
//     { label: 'Register', x: 0, y: 0, color: '#6BCB77' },
//     { label: 'Booking', x: 0, y: 0, color: '#4D96FF' },
//     { label: 'Vendors', x: 0, y: 0, color: '#845EC2' },
//     { label: 'Payments', x: 0, y: 0, color: '#FF9671' },
//     { label: 'Feedback', x: 0, y: 0, color: '#00C9A7' },
//     { label: 'Contact', x: 0, y: 0, color: '#C34A36' },
//   ];;

  ngOnInit(): void {
  // if (isPlatformBrowser(this.platformId)) {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   this.center = { x: width / 2, y: height / 2, label: 'EventEver' };

  //   const radius = 200;
  //   const angleStep = (2 * Math.PI) / this.nodes.length;

  //   this.nodes = this.nodes.map((node, i) => {
  //     const angle = i * angleStep;
  //     return {
  //       ...node,
  //       x: this.center.x + radius * Math.cos(angle),
  //       y: this.center.y + radius * Math.sin(angle),
  //     };
  //   });
  // }
}

  startDrag(event: MouseEvent, node: any) {
    event.preventDefault();
    this.draggingNode = node;
    this.offset.x = event.clientX - node.x;
    this.offset.y = event.clientY - node.y;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.draggingNode) {
      this.draggingNode.x = event.clientX - this.offset.x;
      this.draggingNode.y = event.clientY - this.offset.y;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.draggingNode = null;
  }
    onClickNode(node: any) {
    alert(`Navigate to: ${node.route}`);
    // this.router.navigate([node.route]);
  }
  getPositionStyle(index: number, total: number) {
  const angle = (2 * Math.PI * index) / total;
  const radius = 220;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return {
    top: `calc(50% + ${y}px - 50px)`,
    left: `calc(50% + ${x}px - 50px)`,
  };
}
ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.center = { x: width / 2, y: height / 2, label: 'EventEver' };

    const radius = 200;
    const angleStep = (2 * Math.PI) / this.nodes.length;

    this.nodes = this.nodes.map((node, i) => {
      const angle = i * angleStep;
      return {
        ...node,
        x: this.center.x + radius * Math.cos(angle),
        y: this.center.y + radius * Math.sin(angle),
      };
    });
  }
}

getNodeAnimation(index: number): string {
  const animations = [
    'float-up 3s ease-in-out infinite',
    'float-down 4s ease-in-out infinite',
    'float-left 3.5s ease-in-out infinite',
    'float-right 2.8s ease-in-out infinite',
    'float-diagonal 4.2s ease-in-out infinite',
  ];
  return animations[index % animations.length];
}

getNodeClass(index: number): string {
  const animationClasses = [
    'float-up',
    'float-down',
    'float-left',
    'float-right',
    'float-diagonal'
  ];
  return animationClasses[index % animationClasses.length];
}
}
