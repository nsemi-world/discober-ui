import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuOptionsComponent } from './top-menu-options.component';

describe('TopMenuOptionsComponent', () => {
  let component: TopMenuOptionsComponent;
  let fixture: ComponentFixture<TopMenuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
