import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWrapperComponent } from './background-wrapper.component';

describe('BackgroundWrapperComponent', () => {
  let component: BackgroundWrapperComponent;
  let fixture: ComponentFixture<BackgroundWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
