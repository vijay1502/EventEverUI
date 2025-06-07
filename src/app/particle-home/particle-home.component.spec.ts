import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleHomeComponent } from './particle-home.component';

describe('ParticleHomeComponent', () => {
  let component: ParticleHomeComponent;
  let fixture: ComponentFixture<ParticleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticleHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
