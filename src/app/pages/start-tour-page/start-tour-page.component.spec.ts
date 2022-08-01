import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTourPageComponent } from './start-tour-page.component';

describe('StartTourPageComponent', () => {
  let component: StartTourPageComponent;
  let fixture: ComponentFixture<StartTourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTourPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
