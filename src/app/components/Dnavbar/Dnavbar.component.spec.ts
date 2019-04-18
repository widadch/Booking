import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnavbarComponent } from './Dnavbar.component';

describe('NavbarComponent', () => {
  let component: DnavbarComponent;
  let fixture: ComponentFixture<DnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
