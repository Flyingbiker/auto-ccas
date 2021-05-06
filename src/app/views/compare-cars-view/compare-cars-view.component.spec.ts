import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCarsViewComponent } from './compare-cars-view.component';

describe('CompareCarsViewComponent', () => {
  let component: CompareCarsViewComponent;
  let fixture: ComponentFixture<CompareCarsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCarsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
