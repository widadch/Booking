import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSingleViewComponent } from './trip-single-view.component';

describe('TripSingleViewComponent', () => {
  let component: TripSingleViewComponent;
  let fixture: ComponentFixture<TripSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
