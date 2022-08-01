import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchesPageComponent } from './churches-page.component';

describe('ChurchesPageComponent', () => {
  let component: ChurchesPageComponent;
  let fixture: ComponentFixture<ChurchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
