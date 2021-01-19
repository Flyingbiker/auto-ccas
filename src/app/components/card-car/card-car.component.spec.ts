import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarComponent } from './card-car.component';

describe('CardCarComponent', () => {
  let component: CardCarComponent;
  let fixture: ComponentFixture<CardCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
