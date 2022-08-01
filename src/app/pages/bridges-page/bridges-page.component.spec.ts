import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgesPageComponent } from './bridges-page.component';

describe('BridgesPageComponent', () => {
  let component: BridgesPageComponent;
  let fixture: ComponentFixture<BridgesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
