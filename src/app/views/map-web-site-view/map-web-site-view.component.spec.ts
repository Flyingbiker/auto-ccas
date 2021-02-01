import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWebSiteViewComponent } from './map-web-site-view.component';

describe('MapWebSiteViewComponent', () => {
  let component: MapWebSiteViewComponent;
  let fixture: ComponentFixture<MapWebSiteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWebSiteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWebSiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
