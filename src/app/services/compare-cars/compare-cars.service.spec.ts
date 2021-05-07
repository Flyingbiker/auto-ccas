import { TestBed } from '@angular/core/testing';

import { CompareCarsService } from './compare-cars.service';

describe('CompareCarsService', () => {
  let service: CompareCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
