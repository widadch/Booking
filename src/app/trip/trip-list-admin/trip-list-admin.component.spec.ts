import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListAdminComponent } from './trip-list-admin.component';

describe('TripListAdminComponent', () => {
  let component: TripListAdminComponent;
  let fixture: ComponentFixture<TripListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
