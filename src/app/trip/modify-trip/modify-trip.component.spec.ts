import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTripComponent } from './modify-trip.component';

describe('ModifyTripComponent', () => {
  let component: ModifyTripComponent;
  let fixture: ComponentFixture<ModifyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
