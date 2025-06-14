import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChainConnectPageComponent } from './main-chain-connect-page.component';

describe('MainChainConnectPageComponent', () => {
  let component: MainChainConnectPageComponent;
  let fixture: ComponentFixture<MainChainConnectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChainConnectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChainConnectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
