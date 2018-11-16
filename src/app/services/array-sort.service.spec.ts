import { TestBed } from '@angular/core/testing';

import { ArraySortService } from './array-sort.service';

describe('ArraySortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArraySortService = TestBed.get(ArraySortService);
    expect(service).toBeTruthy();
  });
});
