import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvViewComponent } from './cgv-view.component';

describe('CgvViewComponent', () => {
  let component: CgvViewComponent;
  let fixture: ComponentFixture<CgvViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgvViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
