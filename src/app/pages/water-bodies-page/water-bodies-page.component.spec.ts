import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBodiesPageComponent } from './water-bodies-page.component';

describe('WaterBodiesPageComponent', () => {
  let component: WaterBodiesPageComponent;
  let fixture: ComponentFixture<WaterBodiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterBodiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBodiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
