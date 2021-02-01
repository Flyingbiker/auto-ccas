import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseGuideViewComponent } from './purchase-guide-view.component';

describe('PurchaseGuideViewComponent', () => {
  let component: PurchaseGuideViewComponent;
  let fixture: ComponentFixture<PurchaseGuideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseGuideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseGuideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
