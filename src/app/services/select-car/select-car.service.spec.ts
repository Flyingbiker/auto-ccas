import { TestBed } from '@angular/core/testing';

import { SelectCarService } from './select-car.service';

describe('SelectCarService', () => {
  let service: SelectCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
