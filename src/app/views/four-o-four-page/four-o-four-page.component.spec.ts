import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOFourPageComponent } from './four-o-four-page.component';

describe('FourOFourPageComponent', () => {
  let component: FourOFourPageComponent;
  let fixture: ComponentFixture<FourOFourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOFourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
