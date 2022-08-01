import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksPageComponent } from './parks-page.component';

describe('ParksPageComponent', () => {
  let component: ParksPageComponent;
  let fixture: ComponentFixture<ParksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
