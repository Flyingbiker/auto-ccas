import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsViewComponent } from './car-details-view.component';

describe('CarDetailsViewComponent', () => {
  let component: CarDetailsViewComponent;
  let fixture: ComponentFixture<CarDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
