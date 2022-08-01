import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewJumbotronComponent } from './overview-jumbotron.component';

describe('OverviewJumbotronComponent', () => {
  let component: OverviewJumbotronComponent;
  let fixture: ComponentFixture<OverviewJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
